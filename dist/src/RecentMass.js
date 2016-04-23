const http = require("superagent")

module.exports.fetch = () => {

  return new Promise((resolve, reject) => {

    http.get('/measurements').end((err, res) => {

      if (err) {
        reject(err)
      }

      let l = res.body.measurements.length
      let mass = res.body.measurements[l-1].value

      resolve(mass)
    })
  })
}
