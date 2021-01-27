const sqlite = require('sqlite')
const sqlite3 = require('sqlite3')

async function setup() {
  try {
    const db = await sqlite.open({
      filename: './database/mydb.sqlite',
      driver: sqlite3.Database
    })
    
    await db.migrate({
      force: 'last',
      migrationsPath: './database/migrations'
    })
    
    console.log('Database Started.')
  } catch(catchedError) {
    console.log('Database Error:', catchedError.message)
  }
}

setup()
