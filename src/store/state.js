//  状态对象
export default {
  //  从localstorage中读取todos
  todos: JSON.parse(window.localStorage.getItem('todos_key') || '[]')
}
