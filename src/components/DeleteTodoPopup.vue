<script setup>
import { ref } from 'vue'
defineProps(['title'])


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
    <span> Удалить задачу "{{ title }}"?</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button 
          type="dander" 
          @click="dialogVisible = false, $emit('deleteTodo', todo)"
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
