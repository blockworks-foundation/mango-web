import { produce } from 'immer'
import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'
import { AnchorProvider, web3 } from '@coral-xyz/anchor'
import {
  ConfirmOptions,
  Connection,
  Keypair,
  PublicKey,
  TransactionInstruction,
} from '@solana/web3.js'
import {
  MangoClient,
  Group,
  MANGO_V4_ID,
} from '@blockworks-foundation/mango-v4'

import EmptyWallet from '../utils/wallet'

const CONNECTION_COMMITMENT = 'processed'
const DEFAULT_PRIORITY_FEE = 1
const LITE_RPC_URL = `https://api.mngo.cloud/lite-rpc/v1-mangoui-812743`
const TRITON_DEDICATED_URL = process.env.NEXT_PUBLIC_TRITON_TOKEN
  ? `https://mango.rpcpool.com/${process.env.NEXT_PUBLIC_TRITON_TOKEN}`
  : 'https://mango.rpcpool.com/946ef7337da3f5b8d3e4a34e7f88'
const MANGO_MAINNET_GROUP = new PublicKey(
  '78b8f4cGCwmZ9ysPFMWLaLTkkaYnUjwMJYStWe5RTSSX',
)

const ENDPOINTS = [
  {
    name: 'mainnet-beta',
    url: process.env.NEXT_PUBLIC_ENDPOINT || TRITON_DEDICATED_URL,
    websocket: process.env.NEXT_PUBLIC_ENDPOINT || TRITON_DEDICATED_URL,
    custom: false,
  },
  {
    name: 'devnet',
    url: 'https://realms-develope-935c.devnet.rpcpool.com/67f608dc-a353-4191-9c34-293a5061b536',
    websocket:
      'https://realms-develope-935c.devnet.rpcpool.com/67f608dc-a353-4191-9c34-293a5061b536',
    custom: false,
  },
]

const options = {
  ...AnchorProvider.defaultOptions(),
  preflightCommitment: 'confirmed',
} as ConfirmOptions
export const CLUSTER: 'mainnet-beta' | 'devnet' = 'mainnet-beta'
const ENDPOINT = ENDPOINTS.find((e) => e.name === CLUSTER) || ENDPOINTS[0]
export const emptyWallet = new EmptyWallet(Keypair.generate())

const initMangoClient = (
  provider: AnchorProvider,
  opts: {
    prioritizationFee: number
    prependedGlobalAdditionalInstructions: TransactionInstruction[]
    multipleConnections: Connection[]
  } = {
    prioritizationFee: DEFAULT_PRIORITY_FEE,
    prependedGlobalAdditionalInstructions: [],
    multipleConnections: [],
  },
  //for analytics use
  // telemetry: ReturnType<typeof usePlausible> | null,
): MangoClient => {
  return MangoClient.connect(provider, CLUSTER, MANGO_V4_ID[CLUSTER], {
    prioritizationFee: opts.prioritizationFee,
    fallbackOracleConfig: [
      new PublicKey('Gnt27xtC473ZT2Mw5u8wZ68Z3gULkSTb5DuxJy7eJotD'), // USDC pyth oracle
      new PublicKey('AFrYBhb5wKQtxRS9UA9YRS4V3dwFm7SqmS6DHKq6YVgo'), //Bsol
      new PublicKey('7yyaeuJ1GGtVBLT2z2xub5ZWYKaNhF28mj1RdV4VDFVk'), //jitoSol
      new PublicKey('E4v1BBgoso9s64TQvmyownAVJbhbEPGyzA3qn4n46qj9'), //mSol
      new PublicKey('8ihFLu5FimgTQ1Unh4dVyEHUGodJ5gJQCrQf4KUVB9bN'), //bonk
      new PublicKey('AwpALBTXcaz2t6BayXvQQu7eZ6h7u2UNRCQNmD9ShY7Z'), //blze
      new PublicKey('6ABgrEZk8urs6kJ1JNdC1sspH5zKXRqxy8sg3ZG2cQps'), //wif
      new PublicKey('4dusJxxxiYrMTLGYS6cCAyu3gPn2xXLBjS7orMToZHi1'), //mnde
    ],
    multipleConnections: opts.multipleConnections,
    idsSource: 'api',
    prependedGlobalAdditionalInstructions:
      opts.prependedGlobalAdditionalInstructions,
    // postSendTxCallback: (txCallbackOptions: TxCallbackOptions) => {
    //   if (telemetry) {
    //     telemetry('postSendTx', {
    //       props: { fee: opts.prioritizationFee },
    //     })
    //   }

    //   notify({
    //     title: 'Transaction sent',
    //     description: 'Waiting for confirmation',
    //     type: 'confirm',
    //     txid: txCallbackOptions.txid,
    //   })

    //   collectTxConfirmationData(
    //     provider.connection.rpcEndpoint,
    //     opts.prioritizationFee,
    //     txCallbackOptions,
    //   )
    // },
  })
}

const createBackupConnections = (
  primaryConnection: Connection,
): Connection[] => {
  const liteRpcConnection = new Connection(LITE_RPC_URL)
  const backupConnections = [liteRpcConnection]
  if (primaryConnection.rpcEndpoint !== TRITON_DEDICATED_URL) {
    const conn = new Connection(TRITON_DEDICATED_URL)
    backupConnections.push(conn)
  }
  return backupConnections
}

export type Store = {
  connection: Connection
  group: Group | undefined
  groupLoaded: boolean
  client: MangoClient
  set: (x: (x: Store) => void) => void
  actions: {
    fetchGroup: () => Promise<void>
  }
}

const store = create<Store>()(
  subscribeWithSelector((_set, get) => {
    const rpcUrl = ENDPOINT.url

    // if (typeof window !== 'undefined' && CLUSTER === 'mainnet-beta') {
    //   const urlFromLocalStorage = localStorage.getItem(RPC_PROVIDER_KEY)
    //   rpcUrl = urlFromLocalStorage
    //     ? JSON.parse(urlFromLocalStorage)
    //     : ENDPOINT.url
    // }

    let connection: Connection
    try {
      // if connection is using Triton RpcPool then use whirligig
      // https://docs.triton.one/project-yellowstone/whirligig-websockets
      if (rpcUrl.includes('rpcpool')) {
        connection = new web3.Connection(rpcUrl, {
          wsEndpoint: `${rpcUrl.replace('http', 'ws')}/whirligig/`,
          commitment: CONNECTION_COMMITMENT,
        })
      } else {
        connection = new web3.Connection(rpcUrl, CONNECTION_COMMITMENT)
      }
    } catch {
      connection = new web3.Connection(ENDPOINT.url, CONNECTION_COMMITMENT)
    }
    const provider = new AnchorProvider(connection, emptyWallet, options)
    provider.opts.skipPreflight = true
    const backupConnections = createBackupConnections(connection)
    const client = initMangoClient(
      provider,
      {
        prioritizationFee: DEFAULT_PRIORITY_FEE,
        prependedGlobalAdditionalInstructions: [],
        multipleConnections: backupConnections,
      },
      // null,
    )

    return {
      connection,
      group: undefined,
      groupLoaded: false,
      client,
      set: (fn) => _set(produce(fn)),
      actions: {
        fetchGroup: async () => {
          try {
            const set = get().set
            const client = get().client
            const group = await client.getGroup(MANGO_MAINNET_GROUP)

            set((state) => {
              state.group = group
              state.groupLoaded = true
            })
          } catch (e) {
            // notify({ type: 'info', title: 'Unable to refresh data' })
            console.error('Error fetching group', e)
          }
        },
      },
    }
  }),
)

export default store
