const { Sequelize } = require('sequelize')

// Database
const sequelize = new Sequelize(
  'postgres://cloud:RJ6VAAtZMgBygY7Er2dYhxauIylApZW5@dpg-clesbkk15k1s73f5o29g-a/cloud_spou', // TODO: database connection string
  {
    database: "cloud_spou",
    username:"cloud",
    password: "RJ6VAAtZMgBygY7Er2dYhxauIylApZW5",
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
