import { defineStore } from 'pinia'
import { storeToRefs } from 'pinia'
export const usetodosMockStore = defineStore('todosMockStore', {
  state: () => ({
    todos: [
      {  
      id: 1,
      title: 'Проснуться',
      isDone: true,
      isFavorite: false,
    },
    {
      id: 2,
      title: 'Почистить зубы',
      isDone: true,
      isFavorite: false,
    },
      {
        id: 3,
        title: 'Сделать кофе',
        isDone: true,
        isFavorite: true,
      },
      {
        id: 4,
        title: 'Проверить почту',
        isDone: false,
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
        id: this.todos.length+1,
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
    const mock = usetodosMockStore()
    this.todos = storeToRefs(mock.todos)
    this.todos = todos.filter(function (todo) {    
      return todo.isDone === true
    })
  },
  SortTodosisFavorite(todos) {
    const mock = usetodosMockStore()
    this.todos = storeToRefs(mock.todos)
    this.todos = todos.filter(function (todo) {    
      return todo.isFavorite === true
    })
  },
  }
})
