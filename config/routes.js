
module.exports = function(router, controllers) {

  router.get('/', controllers.home.index)
  router.get('/measurements', controllers.measurements.index)
  router.post('/measurements', controllers.measurements.create)
}

