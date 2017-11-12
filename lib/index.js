var transformApi = require('./api')
var co = require('co')

module.exports = function transformMiniprogram (form) {
  if (!["w2a"].includes(form.type)) {
    return
  }
  var transformLogs = []
  co(function * () {
    let a = yield transformApi(form, transformLogs)
  }).then(function () {
    console.log(transformLogs)
  })
}