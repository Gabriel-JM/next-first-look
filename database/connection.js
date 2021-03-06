const sqlite = require('sqlite')
const sqlite3 = require('sqlite3')

async function setup() {
  try {
    const db = await sqlite.open({
      filename: './database/mydb.sqlite',
      driver: sqlite3.Database
    })

    return db
  } catch(catchedError) {
    console.log('Database Error:', catchedError.message)
  }
}

const db = setup()

module.exports = {
  open: () => db
}
