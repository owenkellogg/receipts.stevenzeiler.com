var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {

  db.createTable('receipts', {
    id: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true 
    },
    merchant_name: {
      type: 'string',
    },
    category_name: {
      type: 'string',
    },
    amount: {
      type: 'decimal',
    },
    currency: {
      type: 'string',
    },
    s3_image_url: {
      type: 'string',
      required: true
    },
    notes: {
      type: 'string'
    },
    createdAt: {
      type: 'date',
      required: true
    },
    updatedAt: {
      type: 'date',
      required: true
    }
  }, callback);
};

exports.down = function(db, callback) {
  db.dropTable("receipts", callback)
};
