import { defineStore, storeToRefs } from 'pinia'
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
      if(title) {
      const newTodo = {
        id: Date.now(),
        title: title,
        isDone: false,
        isFavorite: isFavorite,
      }
      this.todos.unshift(newTodo)
      this.dialogFormVisible = false
    } else console.log('Не создал задачу')
  },
  favorite(id) {
    const todo = this.todos.find((el) => el.id === id)
    if(todo.isFavorite) {
      todo.isFavorite=false
      console.log(todo.isFavorite)
    }
    else 
    todo.isFavorite=true
    console.log(todo.isFavorite)

},

  SortTodosIsDone(todos) {
    const mock = usetodosMockStore()
    this.todos = storeToRefs(mock.todos)
    const copyq = JSON.parse(JSON.stringify(todos))
    this.todos = copyq.filter(function (todo) {    
      return todo.isDone === true
    })
  },
  SortTodosisFavorite(todos) {
    const mock = usetodosMockStore()
    this.todos = storeToRefs(mock.todos)
    const copyw = JSON.parse(JSON.stringify(todos))
    this.todos = copyw.filter(function (todo) {    
      return todo.isFavorite === true
    })
  },
  }
})
