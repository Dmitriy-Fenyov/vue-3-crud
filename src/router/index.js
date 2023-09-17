import { createRouter, createWebHistory } from 'vue-router'
import PostList from '../views/PostsList.vue'
import TodosList from '../views/TodosList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/posts',
      name: 'posts',
      component: PostList
    },
    {
      path: '/todos',
      name: 'todos',
      component: TodosList
    },
  ]
})

export default router
