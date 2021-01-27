import { NextApiRequest, NextApiResponse } from 'next'
import connection from '../../../database/connection'

async function getAllVehicles(req: NextApiRequest, res: NextApiResponse) {
  const db = await connection.open()
  const vehicles = await db?.all('select * from vehicles')

  res.json(vehicles)
}

export default getAllVehicles
