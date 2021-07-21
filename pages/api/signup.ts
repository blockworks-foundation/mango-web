import client from '@sendgrid/client'

const { SENDGRID_API_KEY } = process.env
client.setApiKey(SENDGRID_API_KEY)

export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      res.status(405).json({ error: 'Method not allowed' })
      return
    }

    const { email } = req.body
    const request = {
      method: 'PUT' as any,
      url: '/v3/marketing/contacts',
      body: { contacts: [{ email }] },
    }

    const [_, body] = await client.request(request)
    res.status(200).send(body)
  } catch (e) {
    console.error(e)
    res.status(500).send(e.toString())
  }
}
