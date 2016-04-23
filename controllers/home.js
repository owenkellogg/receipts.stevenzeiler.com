
module.exports = function(models, lib) {

  return {
    index: function(req, res, next) {

      res.static(__dirname+"/../dist")
    }
  }
}

