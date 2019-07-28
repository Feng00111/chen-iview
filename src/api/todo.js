import axios from '@/libs/api.request'

export const loadTodoAll = () => {
  return axios.request({
    url: '/api/todo/all',
    method: 'get'
  })
}

export const removeTodo = (id) => {
  return axios.request({
    url: '/api/todo/delete',
    method: 'get',
    params: { 'id': id }
  })
}
