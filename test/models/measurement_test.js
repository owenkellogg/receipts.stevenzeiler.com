const assert = require("assert");
const Measurement = require('../../models/measurement.js');
const BodyMass = require("../../lib/BodyMass");

describe("Measurement", () => {

  it("should record the body's mass", () => {
    const mass = 191.1;

    return BodyMass.recordPounds(mass).then(measurement => {
      assert(measurement.id)
      assert(measurement.date)
      assert.strictEqual(measurement.value, mass)
      assert.strictEqual(measurement.type, "mass")
    })
  }) 
})

