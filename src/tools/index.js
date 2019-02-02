const fetch = require('@system.fetch')
const prompt = require('@system.prompt')

let default_options = {
  responseType: 'json',
}

function assignOptions (options) {
  if (!options) {
    return Object.assign(default_options,options)
  }else {
    return default_options 
  }
}
const request = function (url, data = {}, method = "GET", options = assignOptions(options)) {
  return new Promise(resolve => {
    fetch.fetch({
      url: url,
      method: method,
      data: data,
      success: function (data) {
        if (data.code == '200' && data.data) { 
          resolve(data.data)
        }else {
          throw Error(`接口返回错误`)
        }
      },
      fail: function (data, code) {
        throw Error(`接口返回错误`)
      }
    })
  })
}

const baseUrl = 'https://cnodejs.org/api/v1'

const showLoading = function (msg = '',loadingColor = "#29B6F6") {
  prompt.showLoading({
    message: msg,
    loadingColor: loadingColor
  })
}
const hideLoading = function () {
  prompt.hideLoading();
} 
export {
  request,
  baseUrl,
  showLoading,
  hideLoading
}