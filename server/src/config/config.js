module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'reDo',
    user: process.env.DB_USER || 'reDo',
    password: process.env.DB_PASS || 'reDo',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './reDo.sqlite'
    }
  }
}
