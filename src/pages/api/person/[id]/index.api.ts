import { NextApiRequest, NextApiResponse } from 'next'
import connection from '../../../../../database/connection'

async function getPersonById(req: NextApiRequest, res: NextApiResponse) {
  const db = await connection.open()

  if(req.method === 'PUT') {
    const statement = await db?.prepare(
      'update person set name = ?, email = ? where id = ?'
    )

    await statement?.run(
      req.body.name,
      req.body.email,
      req.query.id
    )
  }

  const person = await db?.get(
    'select * from person where id = ?',
    [req.query.id]
  )

  res.json(person)
}

export default getPersonById
