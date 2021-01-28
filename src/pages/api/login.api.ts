import { NextApiRequest, NextApiResponse } from 'next'
import connection from '../../../database/connection'
import { compare } from 'bcrypt'
import jwt from 'jsonwebtoken'
import { secretKey } from '../../../api/secret'

async function login(req: NextApiRequest, res: NextApiResponse) {
  const db = await connection.open()

  if(req.method === 'POST') {
    const person = await db?.get(
      'select * from person where email = ?',
      [req.body.email]
    )

    if(!person) {
      return res.status(404).json({
        message: 'Email or Password invalid'
      })
    }

    compare(req.body.password, person.password, async (err, result) => {
      if(err) throw new Error(err.message)

      if(!result) {
        return res.status(400).json({
          message: 'Email or Password invalid'
        })
      }

      const claims = { sub: person.id }
      const token = jwt.sign(claims, secretKey, { expiresIn: '1d' })
  
      res.json({ authToken: token })
    })
  } else {
    res.status(405).json({ message: 'We only support POST' })
  }
}

export default login
