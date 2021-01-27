import { NextApiRequest, NextApiResponse } from 'next'
import connection from '../../../../database/connection'

async function getVehicleById(req: NextApiRequest, res: NextApiResponse) {
  const db = await connection.open()
  const vehicle = await db?.get(
    'select * from vehicle where id = ?',
    [req.query.id]
  )

  res.json(vehicle)
}

export default getVehicleById
