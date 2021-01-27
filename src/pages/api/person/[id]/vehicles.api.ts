import { NextApiRequest, NextApiResponse } from 'next'
import connection from '../../../../../database/connection'

async function getAllVehicleByPersonId(req: NextApiRequest, res: NextApiResponse) {
  const db = await connection.open()
  const personVehicles = await db?.all(
    'select * from vehicle where ownerId = ?',
    [req.query.id]
  )

  res.json(personVehicles)
}

export default getAllVehicleByPersonId
