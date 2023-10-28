<script setup>
import {usetodosMockStore} from '@/stores/todosMockStore'
import { storeToRefs } from 'pinia'
import { RouterLink } from 'vue-router'
import { ref, onBeforeMount } from 'vue'
const mock = usetodosMockStore()
const {todos} = storeToRefs(mock)
import { useRoute } from 'vue-router'
const route = useRoute()

const todo = ref({})

onBeforeMount(() => {
  console.log(route.params.id)
  console.log(todos.value)
  const item = todos.value.find((el) => el.id == route.params.id)
  console.log(item)
  todo.value = { ...item }
  console.log(todo.value.title)
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
    <RouterLink
      :to="'/todos'"
    >
      <el-button type="primary">
        Сохранить
      </el-button>
    </RouterLink>
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
