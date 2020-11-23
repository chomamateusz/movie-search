import { NextApiRequest, NextApiResponse } from 'next'

import getConfig from 'next/config'

const { serverRuntimeConfig } = getConfig()
const API_URL = serverRuntimeConfig.API_URL

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!API_URL) {
      throw new Error('API is not configured!')
    }

    res.status(200).json(API_URL)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
