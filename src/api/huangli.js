import request from '@/utils/request'

export function fetchList(params) {
  return request({
    url: '/lunar/index',
    method: 'get',
    params
  })
}
