transformMiniprogram = require('./lib/index')

let form = {type: 'w2a', src:'/Volumes/ext/weixin/aaa/'};
transformMiniprogram(form, function (err, logs) {
  if (err) {
    console.log(err)
  } else {
    console.log(logs)
  }
})