var Measurement = require("../models/Measurement")

exports.recordPounds = mass => {

  return Measurement.create({
    value: mass,
    date: new Date(),
    type: "mass"
  })
}

exports.getRecent = limit => {

  return Measurement.findAll({ where: {
    date: {
      $gt: new Date(new Date() - 24 * 60 * 60 * 1000 * 7)
    }
  }})
}

