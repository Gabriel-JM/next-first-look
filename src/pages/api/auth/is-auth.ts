import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'
import { secretKey } from '../../../../api/secret'

export function authenticated(fn: NextApiHandler) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { authorization = '' } = req.headers
      jwt.verify(authorization.slice(7), secretKey)

      return await fn(req, res)
    } catch(catchedError) {
      return res.status(401).json({
        message: 'You aren\'t authenticated'
      })
    }
  }
}
