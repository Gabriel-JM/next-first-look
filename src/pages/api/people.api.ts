import { NextApiRequest, NextApiResponse } from 'next'
import connection from '../../../database/connection'
import { authenticated } from './auth/is-auth'

async function getPeople(req: NextApiRequest, res: NextApiResponse) {
  const db = await connection.open()
  const people = await db?.all('select id, email, name from person;')

  res.json(people)
}

export default authenticated(getPeople)
