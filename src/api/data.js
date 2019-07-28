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

export const getTableData = () => {
  return axios.request({
    url: 'get_table_data',
    method: 'get'
  })
}

export const getDragList = () => {
  return axios.request({
    url: 'get_drag_list',
    method: 'get'
  })
}

export const errorReq = () => {
  return axios.request({
    url: 'error_url',
    method: 'post'
  })
}

export const saveErrorLogger = info => {
  return axios.request({
    url: 'save_error_logger',
    data: info,
    method: 'post'
  })
}

export const uploadImg = formData => {
  return axios.request({
    url: 'image/upload',
    data: formData
  })
}

export const getOrgData = () => {
  return axios.request({
    url: 'get_org_data',
    method: 'get'
  })
}

export const getTreeSelectData = () => {
  return axios.request({
    url: 'get_tree_select_data',
    method: 'get'
  })
}
