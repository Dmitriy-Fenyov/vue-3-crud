import { createRouter, createWebHistory } from 'vue-router'
import PostList from '@/views/PostsList.vue'
import TodosList from '@/views/TodosList.vue'
import PostId from '@/views/PostId.vue'
import TodoId from '@/views/TodoId.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'posts',
      component: PostList,
    },
    {
      path: '/todos',
      name: 'todos',
      component: TodosList
    },
    {
      path: '/posts/:id',
      name: 'postId',
      component: PostId
    },
    {
      path: '/todos/:id',
      name: 'todoId',
      component: TodoId
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ]
})

export default router
