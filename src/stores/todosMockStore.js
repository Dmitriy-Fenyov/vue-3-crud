import { defineStore, storeToRefs } from 'pinia'
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
      if(title) {
      const newTodo = {
        id: this.todos.length+1,
        title: title,
        isDone: false,
        isFavorite: isFavorite,
      }
      this.todos.unshift(newTodo)
      this.dialogFormVisible = false
    } else console.log('jib,rf')
  },
  favorite(id) {
    if(this.todos[id-1].isFavorite) {
      this.todos[id-1].isFavorite=false
      console.log(this.todos[id-1].isFavorite)
    }
    else this.todos[id-1].isFavorite=true
      console.log(this.todos[id-1].isFavorite)

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
