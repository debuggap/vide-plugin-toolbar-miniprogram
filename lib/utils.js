var fs = require('fs')

exports.getContent = function (filepath) {
  return new Promise(function (resolve) {
    fs.readFile(filepath, function (err, con) {
      resolve(con.toString())
    })
  })
}