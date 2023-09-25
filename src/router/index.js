import { createRouter, createWebHistory } from 'vue-router'
import PostList from '@/views/PostsList.vue'
import TodosList from '@/views/TodosList.vue'
import PostPageId from '@/views/PostPageId.vue'
import TodosIdList from '@/views/TodosIdList.vue'

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
    {
      path: '/posts/:id',
      name: 'postId',
      component: PostPageId
    },
    {
      path: '/todos/:id',
      name: 'todosId',
      component: TodosIdList
    },
  ]
})

export default router
