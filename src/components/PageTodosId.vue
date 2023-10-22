<script setup>
import {usetodosMockStore} from '@/stores/todosMockStore'
import { storeToRefs } from 'pinia'
import { RouterLink } from 'vue-router'
defineProps(['id'])
const mock = usetodosMockStore()
const {todos} = storeToRefs(mock)
</script>

<template>
  <div class="todoId-wrapper">
    <ul class="todoId-item">
      <li>
        <el-input v-model="todos[id-1].title">
          {{ todos[id-1].title }}
        </el-input>
      </li>
      <li class="todoId-property">
        <el-checkbox v-model="todos[id-1].isFavorite" label="Избранное" />
      </li>
      <li class="todoId-propertys">
        <el-checkbox v-model="todos[id-1].isDone" label="Выполнено" />
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
