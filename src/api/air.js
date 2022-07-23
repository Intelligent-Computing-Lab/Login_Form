// import request from '@/utils/request'
import http from '@/utils/request'

// export function fetchList(params) {
//   return request({
//     url: 'http://api.tianapi.com/aqi/index?key=7ddcf716a30672387708b5725268c79e&area=上海',
//     method: 'get',
//     params
//   })
// }

export async function fetchListApi(parm) {
  return await http.get('http://api.tianapi.com/aqi/index?key=7ddcf716a30672387708b5725268c79e', parm)
}
