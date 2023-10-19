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
    ]
  }),
  actions: {
    deleteTodo(id) {
        this.todos = this.todos.filter(t => t.id !==id)
    },
    createTodo(title,isFavorite) {

      const newTodo = {
        id: Date.now(),
        title: title,
        isDone: false,
        isFavorite: isFavorite,
      }
      this.todos.push(newTodo)
  },
  favorite(isFavorite) {
    if(isFavorite) {
      this.todo.isFavorite=false
      console.log(isFavorite)
    }
    else this.todo.isFavorite=true
    console.log(isFavorite)

},
  SortTodosIsDone(todos) {
    this.todos = todos.filter(function (todo) {    
      return todo.isDone === true
    })
  },
  SortTodosisFavorite(todos) {
    this.todos = todos.filter(function (todo) {    
      return todo.isFavorite === true
    })
  },
  }
})
