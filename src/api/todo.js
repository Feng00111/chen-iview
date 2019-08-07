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

export const addTodo = (todo) => {
  return axios.request({
    url: '/api/todo/add',
    method: 'post',
    data: todo,
    headers: { 'Content-Type': 'application/json' }
  })
}

export const updateTodo = (todo) => {
  return axios.request({
    url: '/api/todo/update',
    method: 'post',
    data: todo,
    headers: { 'Content-Type': 'application/json' }
  })
}
