/**
 * Created by Bianrongcheng on 2018
 * 发送ajax请求函数封装模块
 */

import axios from 'axios'

export default function ajax(url='', data={}, method='GET') {
  return new Promise(function (resolve, reject) {
    let promise;
    if(method==='GET') {// /login?name=tom&pwd=123
      // name=tom&pwd=123
      let dataString = '';
      Object.keys(data).forEach(key => {
        const value = data[key];
        dataString += key + '=' + value + '&'
      });
      if(dataString) {
        dataString = dataString.substring(0, dataString.length-1);//
        url += '?' + dataString
      }


      promise = axios.get(url)
    } else {
      promise = axios.post(url, data)
    }

    promise.then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(error)
    })
  })

}
