
var Sequelize = require("sequelize")
var sequelize = new Sequelize(process.env.DATABASE_URL);

module.exports = sequelize.define('receipts', {
  category_name: Sequelize.STRING,
  merchant_name: Sequelize.STRING,
  currency: Sequelize.STRING,
  amount: Sequelize.DECIMAL,
  s3_image_url: Sequelize.STRING,
  notes: Sequelize.STRING
})

