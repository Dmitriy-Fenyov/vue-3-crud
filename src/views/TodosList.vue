<template>
  <div class="todos">
    <h1>CRUD задачи {{ todos.title }}</h1>
    <PageTodos />
  </div>
</template>

<script setup>
import PageTodos from '@/components/PageTodos.vue'
import {usetodosMockStore} from '@/stores/todosMockStore'
const todos = usetodosMockStore()
</script>

<style lang="scss" scoped>
.todos {
  width: 1000px;
  margin: 0 auto;
}
</style>
