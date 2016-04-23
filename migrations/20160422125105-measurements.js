var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  console.log("migrating up")

  db.createTable('measurements', {
    id: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true 
    },
    type: {
      type: 'string',
      required: true
    },
    date: {
      type: 'date',
      required: true
    },
    value: {
      type: 'decimal',
      required: true
    },
    createdAt: {
      type: 'date',
      required: true
    },
    updatedAt: {
      type: 'date',
      required: true
    },
  }, callback);
};

exports.down = function(db, callback) {
  db.dropTable("measurements", callback)
  //callback()
};
