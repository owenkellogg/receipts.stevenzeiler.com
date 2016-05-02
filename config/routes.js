var express = require('express')

module.exports = function(router, controllers) {

  router.use(express.static(__dirname+'/../dist'));
}

