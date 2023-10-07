<template>
  <div class="todos">
    <h1 class="todos-title">CRUD задачи {{ todos.title }}</h1>
    <PageTodos />
    <DeleteTodoPopup v-if="2>1" />
  </div>
</template>

<script setup>
import PageTodos from '@/components/PageTodos.vue'
import DeleteTodoPopup from '@/components/DeleteTodoPopup.vue'
import {usetodosMockStore} from '@/stores/todosMockStore'
const todos = usetodosMockStore()
</script>

<style lang="scss" scoped>
.todos {
  width: 1000px;
  margin: 0 auto;
}
.todos-title {
font-size: 32px;
font-weight: 700;
line-height: 36px;
letter-spacing: 0em;
margin: 0;
}
</style>
