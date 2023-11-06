import { defineStore } from 'pinia'
export const usetodosMockStore = defineStore('todosMockStore', {
  state: () => ({
    todos: [
      {
        id: 4,
        title: 'Проверить почту',
        isDone: false,
        isFavorite: false,
      },
      {
        id: 3,
        title: 'Сделать кофе',
        isDone: true,
        isFavorite: true,
      },
      {
        id: 2,
        title: 'Почистить зубы',
        isDone: true,
        isFavorite: false,
      },
      {
        id: 1,
        title: 'Проснуться',
        isDone: true,
        isFavorite: false,
      },
    ],
    filterOptions: [
      {
        key: 'isFavorite',
        label: 'Избранное',
        isApply: false,
      },
      {
        key: 'isDone',
        label: 'Выполнено',
        isApply: false,
      }
    ],
  }),
  actions: {
    deleteTodo(id) {
        this.todos = this.todos.filter(t => t.id !==id)
    },
    createTodo(title,isFavorite) {
      if(title) {
      const newTodo = {
        id: Date.now(),
        title: title,
        isDone: false,
        isFavorite: isFavorite,
      }
      this.todos.unshift(newTodo)
      this.isdialogFormVisible = false
    }
  },
  favorite(id) {
    const todo = this.todos.find((el) => el.id === id)
    if(todo.isFavorite) {
      todo.isFavorite=false
    }
    else 
    todo.isFavorite=true
},
editTodo(updatedTodo) {
  console.log(updatedTodo.id) 
  const index = this.todos.findIndex(el => el.id === updatedTodo.id)
  this.todos[index] = updatedTodo
},
  },
  getters: {
		filteredTodos: (state) => {
      const filterBy = state.filterOptions.filter(el => el.isApply === true)
      const result = state.todos.filter(todo => {
        for (let i = 0; i < filterBy.length; i++) {
          const key = filterBy[i].key
          const isMatched = todo[key] === true
          if (!isMatched) {
            return false
          }
        }
        return true
      })
      return result
    }
	},
})
