const host = 'localhost'

module.exports = {
  port: process.env.port || process.env.PORT || '3005',
  mongoUrl: process.env.MONGODB_URI || `mongodb://lavrenko_777:vitalik231@ds261078.mlab.com:61078/map_server`
}
