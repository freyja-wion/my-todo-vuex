import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

var shoppingCartStore = {
  // namespaced: true,
  state: {
    totalPrice: 111,
  },
  mutations: {
    add(state) {
      state.totalPrice++
    },
  },
}

var yuangongStore = {
  // namespaced: true,
  state: {
    count: 222,
  },
  mutations: {
    add(state) {
      state.count++
    },
  },
}

export default new Vuex.Store({
  //存放数据
  strict: true,
  state: {
    shoppingCart: {},
    orders: [],
    editingIdx: -1,
    show: "all",
    lastId: 4,
    todos: [
      {
        text: "抢显卡",
        done: true,
        id: 1,
      },
      {
        text: "抢PS5",
        done: true,
        id: 2,
      },
      {
        text: "抢XBOX",
        done: true,
        id: 3,
      },
    ],
  },
  getters: {
    // 类似于组件的computed，计算属性，用来得到用现有数据推导出来的数据
    leftCount(state) {
      return state.todos.filter((it) => !it.done).length
    },
    isAllChecked(state) {
      return state.todos.every((it) => it.done)
    },
    hasCompleted(state) {
      return state.todos.some((it) => it.done)
    },
    visibleTodos(state) {
      switch (state.show) {
        case "未完成":
          return state.todos.filter((it) => !it.done)
        case "已完成":
          return state.todos.filter((it) => it.done)
        case "全部":
          return state.todos
      }
    },
  },
  mutations: {
    // 数据变更方法集合
    addTodo(state, text) {
      var todo = {
        text,
        done: false,
        id: state.lastId++,
      }
      state.todos.push(todo)
    },
    deleteTodo(state, id) {
      var idx = state.todos.findIndex((it) => it.id === id)
      state.todos.splice(idx, 1)
    },
    changeTodoText(state, { id, text }) {
      var todo = state.todos.find((it) => it.id == id)
      todo.text = text
    },
    toggleTodoStatus(state, id) {
      var todo = state.todos.find((it) => it.id === id)
      todo.done = !todo.done

      // var idx = state.todos.findIndex(it => it.id === id)
      // state.todos[idx].done = !state.todos[idx].done
    },
    toggleAllTodoStatus(state) {
      if (state.todos.every((it) => it.done)) {
        state.todos.forEach((it) => {
          it.done = false
        })
      } else {
        state.todos.forEach((it) => {
          it.done = true
        })
      }
    },
    clearCompletedTodo(state) {
      state.todos = state.todos.filter((it) => !it.done)
    },
    edit(state, idx) {
      state.editingIdx = idx
    },
    setVisible(state, type) {
      // 'active' / 'all' / 'completed'
      state.show = type
    },
  },
  actions: {
    // async deleteTodo({ commit, state, getters }, id) {
    //   commit('changeTodosStatus', id, 'deleteing...')
    //   $.delete('/todo/' + id, () => {
    //     commit('deleteTodo', todo.id)
    //   })
    //   return xxxx
    // }
    // async foo({ commit, dispatch, state, getters }) {
    //   await xxx()
    //   commit()
    //   await yyy()
    //   commit()
    //   await dispatch(twof)
    //   commit()
    // }
  },
  modules: {
    shopping: shoppingCartStore,
    yuangong: yuangongStore,
  },
})
