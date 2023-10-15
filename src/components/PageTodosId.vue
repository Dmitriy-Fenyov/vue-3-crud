<script setup>
import {usetodosMockStore} from '@/stores/todosMockStore'
import { storeToRefs } from 'pinia'
const mock = usetodosMockStore()
const {todos} = storeToRefs(mock)
const input = todos
</script>

<template>
  <div class="item">
    <ul class="todo">
      <li>
        <el-input v-model="input">
          {{ todos[1].title }}
        </el-input>
      </li>
      <li class="todoProperties">
        <el-checkbox v-model="isFavorite" label="Избранное" />
      </li>
      <li class="todoProperties">
        <el-checkbox v-model="isDone" label="Выполнено" />
      </li>
    </ul>
    <el-button type="primary">
      Сохранить
    </el-button>
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
