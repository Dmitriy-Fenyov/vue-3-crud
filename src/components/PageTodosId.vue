<script setup>
import {usetodosMockStore} from '@/stores/todosMockStore'
import { storeToRefs } from 'pinia'
import { RouterLink } from 'vue-router'
defineProps(['id'])
const mock = usetodosMockStore()
const {todos} = storeToRefs(mock)
</script>

<template>
  <div class="item">
    <ul class="todo">
      <li>
        <el-input v-model="todos[id-1].title">
          {{ todos[id-1].title }}
        </el-input>
      </li>
      <li class="todoProperties">
        <el-checkbox v-model="todos[id-1].isFavorite" label="Избранное" />
      </li>
      <li class="todoProperties">
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
.item {
  width: 1000px;
  margin: 0 auto;
}
.todo {
  list-style: none;
  padding: 0;
}
.todoProperties {
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
