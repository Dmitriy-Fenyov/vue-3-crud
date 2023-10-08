<script setup>
import {usetodosMockStore} from '@/stores/todosMockStore'
const mock = usetodosMockStore()
const {todos} = mock
import { ref } from 'vue'

const dialogVisible = ref(false)
</script>

<template>
  <el-button 
    type="danger"  
    @click="dialogVisible = true"
  >
    Удалить
  </el-button>

  <el-dialog
    v-model="dialogVisible"
    width="30%"
    draggable
  >
    <span> Удалить задачу "{{ todos[1].title }}"?</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button 
          type="dander" 
          @click="dialogVisible = false" 
          style="background-color: #f56c6c; color: aliceblue;"
        >
          Удалить
        </el-button>
        <el-button @click="dialogVisible = false">Отмена</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped>
</style>
