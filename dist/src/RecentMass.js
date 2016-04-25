var http = require("superagent")

module.exports.fetch = function() {

  return new Promise(function(resolve, reject) {

    http.get('/measurements').end(function(err, res) {

      if (err) {
        reject(err)
      }

      var l = res.body.measurements.length
      var mass = res.body.measurements[l-1].value

      resolve(mass)
    })
  })
}


module.exports.recordPounds = function(mass) {

  return new Promise(function(resolve, reject) {

    http
      .post('/measurements')
      .send({ pounds: mass })
      .end(function (err, res) {
        if (err) {
          return reject(err)
        }

        resolve(res.body.measurement)
      })
  })
}
