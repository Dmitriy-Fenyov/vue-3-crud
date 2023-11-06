<script setup>
import {usetodosMockStore} from '@/stores/todosMockStore'
import { storeToRefs } from 'pinia'
import { ref, onBeforeMount } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const todoStore = usetodosMockStore()
const {todos} = storeToRefs(todoStore)
const route = useRoute()
const router = useRouter()
const todo = ref({})
const handleSave = () => {
  todoStore.editTodo(todo.value)
  router.push({name:'todos'})
}

onBeforeMount(() => {
  const item = todos.value.find((el) => el.id == route.params.id)
  todo.value = { ...item }
})
</script>

<template>
  <h2 class="item"> Детальная страница задачи № {{ $route.params.id }}</h2>
  <div class="todoId-wrapper">
    <ul class="todoId-item">
      <li>
        <el-input v-model="todo.title">
          {{ todo.title }}
        </el-input>
      </li>
      <li class="todoId-property">
        <el-checkbox v-model="todo.isFavorite" label="Избранное" />
      </li>
      <li class="todoId-property">
        <el-checkbox v-model="todo.isDone" label="Выполнено" />
      </li>
    </ul>
    <el-button type="primary" @click="handleSave">
      Сохранить
    </el-button>
  </div>
</template>

<style lang="scss" scoped>
.item {
  width: 1000px;
  margin: 0 auto;
}
.todoId-wrapper {
  width: 1000px;
  margin: 0 auto;
}
.todoId-item {
  list-style: none;
  padding: 0;
}
.todoId-property {
  height: 32px;
  margin-top: 10px;
  padding-left: 10px;
  border: 1px solid #dedfe0;
  border-radius: 5px;
  vertical-align: middle;
  size: 14px;
  line-height: 30px;
}
</style>
