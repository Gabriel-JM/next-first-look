import { NextApiRequest, NextApiResponse } from 'next'
import connection from '../../../database/connection'
import { hash } from 'bcrypt'

async function signup(req: NextApiRequest, res: NextApiResponse) {
  const db = await connection.open()

  if(req.method === 'POST') {
    hash(req.body.password, 10, async (err, hash) => {
      if(err) throw new Error(err.message)

      const statement = await db?.prepare(
        'insert into person (name, email, password) values (?, ?, ?)'
      )
  
      await statement?.run(
        req.body.name,
        req.body.email,
        hash
      )
  
      const person = await db?.all('select * from person')
      res.json(person)
    })
  } else {
    res.status(405).json({ message: 'We only support POST' })
  }
}

export default signup
