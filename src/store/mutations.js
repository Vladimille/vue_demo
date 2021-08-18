//  mutations对象
import {ADD_TODO, CLEAR_ALL_COMPLETED, DELETE_TODO, SELECT_ALL_TODOS} from './mutation-types'

export default {
  [ADD_TODO] (state, {todo}) {
    state.todos.unshift(todo)
  },
  [DELETE_TODO] (state, {index}) {
    state.todos.splice(index, 1)
  },
  [SELECT_ALL_TODOS] (state, {check}) {
    state.todos.forEach(todo => { todo.complete = check })
  },
  [CLEAR_ALL_COMPLETED] (state) {
    state.todos = state.todos.filter(todo => !todo.complete)
  }
}
