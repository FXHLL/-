export function xml_fn(option) {
  function objToStr(data) {
    let str = ''
    for (let key in data) {
      str += key + '=' + data[key] + '&'
    }
    return str.slice(0, -1)
  }
  console.log('参数：',option)
  return new Promise((resolve, reject) => {
    let { method, url, params, dataType } = option
    let xhr = new XMLHttpRequest()
    switch (method.toUpperCase()) {
      case 'GET':
        let dataUrl = params ? url + '?' + objToStr(params) : url
        console.log(dataUrl)
        xhr.open(method, dataUrl)
        xhr.send()
        break
      case 'POST':
        xhr.open(method, url)
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
        xhr.send(objToStr(params))
        break
      default:
        alert('不想支持的方法')
    }
    xhr.onreadystatechange = () => {
      console.log(xhr)
      if (xhr.readyState === 4) {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
          let data
          console.log(xhr)
          switch (dataType.toUpperCase()) {
            case 'JSON':
              data = JSON.parse(xhr.responseText)
              break
            case 'TEXT':
              data = xhr.responseText
              break
            case 'XML':
              data = xhr.responseXML
              break
          }
          resolve(data)
        } else {
          reject(xhr.status)
        }
      }
    }
  })

}
