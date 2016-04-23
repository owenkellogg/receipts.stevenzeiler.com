var express = require('express')

module.exports = function(router, controllers) {

  router.get('/measurements', controllers.measurements.index)
  router.post('/measurements', controllers.measurements.create)
  router.use(express.static(__dirname+'/../dist'));
}

