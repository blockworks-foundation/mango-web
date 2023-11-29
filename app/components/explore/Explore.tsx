'use client'

import { TokenPageWithData } from '../../../contentful/tokenPage'
import { Table, Td, Th, TrBody, TrHead } from '../shared/TableElements'

const Explore = ({ tokens }: { tokens: TokenPageWithData[] }) => {
  return (
    <Table>
      <thead>
        <TrHead>
          <Th className="text-left">Token</Th>
          <Th className="text-left">Price</Th>
          <Th className="text-left">Change</Th>
        </TrHead>
      </thead>
      <tbody>
        {tokens.map((token) => {
          const { tokenName, slug, symbol, birdeyeData } = token
          const price = birdeyeData?.price || '–'
          const change24Hour = birdeyeData?.priceChange24hPercent
            ? `${birdeyeData.priceChange24hPercent.toFixed(2)}%`
            : '–'
          return (
            <TrBody key={slug}>
              <Td>
                <p>{tokenName}</p>
                <p>{symbol}</p>
              </Td>
              <Td>
                <p>{price}</p>
              </Td>
              <Td>
                <p>{change24Hour}</p>
              </Td>
            </TrBody>
          )
        })}
      </tbody>
    </Table>
  )
}

export default Explore
