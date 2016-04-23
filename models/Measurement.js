
var Sequelize = require("sequelize")
var sequelize = new Sequelize(process.env.DATABASE_URL);

module.exports = sequelize.define('measurements', {
  date: Sequelize.DATE,
  type: Sequelize.STRING,
  value: Sequelize.STRING
})

