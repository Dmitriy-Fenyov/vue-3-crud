<script setup>
import { ref } from 'vue'
import {usetodosMockStore} from '@/stores/todosMockStore'
defineProps(['title', 'id'])
const remove = usetodosMockStore()
const isdialogVisible = ref(false)
</script>

<template>
  <el-button 
    type="danger"  
    @click="isdialogVisible = true"
  >
    Удалить
  </el-button>

  <el-dialog
    v-model="isdialogVisible"
    width="30%"
    draggable
  >
    <span> Удалить задачу {{ id }} "{{ title }}"?</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button 
          type="dander" 
          @click="() => { isdialogVisible = false; remove.deleteTodo(id)}"
          style="background-color: #f56c6c; color: aliceblue;"
        >
          Удалить
        </el-button>
        <el-button @click="isdialogVisible = false">Отмена</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped>
</style>
