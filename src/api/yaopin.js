import request from '@/utils/request'

export function fetchList(params) {
  return request({
    url: '/yaopin/index',
    method: 'get',
    params
  })
}
