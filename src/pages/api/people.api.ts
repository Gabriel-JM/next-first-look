import { NextApiRequest, NextApiResponse } from 'next'
import connection from '../../../database/connection'

async function getPeople(req: NextApiRequest, res: NextApiResponse) {
  const db = await connection.open()
  const people = await db?.all('select * from person;')

  res.json(people)
}

export default getPeople
