import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
// import fetch from 'isomorphic-unfetch'

interface VehiclesProps {
  list: Array<{
    id: number
    brand: string
    model: string
    ownerId: number
  }>
}

export default function Vehicles({ list }: VehiclesProps) {
  return(
    <TableContainer component={Paper}>
      <Table /*className={classes.table}*/ size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Brand</TableCell>
            <TableCell align="right">Model</TableCell>
            <TableCell align="right">Owner</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((vehicle) => (
            <TableRow key={vehicle.id}>
              <TableCell component="th" scope="row">
                {vehicle.brand}
              </TableCell>
              <TableCell align="right">{vehicle.model}</TableCell>
              <TableCell align="right">{vehicle.ownerId}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

Vehicles.getInitialProps = async () => {
  const response = await fetch('http://localhost:3000/api/vehicles')
  const list = await response.json()

  return { list }
}
