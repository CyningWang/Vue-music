import originJSONP from 'jsonp'

// 自定义改写
export default function jsonp(url, data, options) {
  // 拼接成完整带参URL
  url = formatURL(url, data)

  return new Promise((resolve, reject) => {
    originJSONP(url, options, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

function formatURL(url, data) {
  let params = ''
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      let value = data[key] !== void 0 ? data[key] : ''
      params += `&${key}=${encodeURIComponent(value)}`
    }
  }
  params = params ? params.substring(1) : ''
  return `${url}?${params}`
}