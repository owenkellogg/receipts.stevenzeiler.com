var BodyMass = require("../lib/BodyMass")

module.exports = function(models, lib) {

  return {
    index: function(req, res, next) {
      BodyMass.getRecent(10).then(measurements => {

        res.status(200).json({
          measurements: measurements
        })
      })
    },

    create: (req, res, next) => {
      if (!req.body.pounds || req.body.pounds <= 0) {
        return next(new Error("pounds parameter not found"))
      }

      BodyMass.recordPounds(req.body.pounds).then(measurement => {
        res.status(201).json({
          measurement: measurement
        })
      })
    }
  }
}

