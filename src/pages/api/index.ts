import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

import getConfig from 'next/config'

const { serverRuntimeConfig } = getConfig()
const API_URL = serverRuntimeConfig.API_URL

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!API_URL) throw new Error('API is not configured!')

    const { id, title, year } = req.query

    const { data } = await axios(API_URL, {
      params: {
        i: id,
        s: title,
        y: year,
      },
    })

    res.status(200).json(data)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
