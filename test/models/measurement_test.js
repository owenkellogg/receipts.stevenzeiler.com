const assert = require("assert");
const Receipt = require('../../models/receipt.js');

describe("Receipt", () => {

  it("should record a recipt with s3 image url", () => {

    var url = "some_s3_image_url"

    return Receipt.create({
      s3_image_url: url
    })
    .then(receipt => {
      assert.strictEqual(receipt.s3_image_url, url)
      assert(receipt.id > 0)
      assert(receipt.createdAt)
      assert(receipt.updatedAt)
    })
  })
})

