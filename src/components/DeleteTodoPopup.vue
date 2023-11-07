<script setup>
import { ref } from 'vue'
import {usetodosMockStore} from '@/stores/todosMockStore'

const title = ref('')
const id = ref(0)
const remove = usetodosMockStore()
const isdialogVisible = ref(false)
const openPopup = (todoTitle, todoId) => {
  title.value= todoTitle
  id.value= todoId
  isdialogVisible.value = true
}
defineExpose({
  openPopup,
})

const deleteTodo = () => {
  isdialogVisible.value = false
  remove.deleteTodo(id.value)
}
</script>

<template>
  <el-dialog
    v-model="isdialogVisible"
    width="30%"
    draggable
  >
    <span> Удалить задачу "{{ title }}"?</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button 
          type="dander" 
          @click.stop="deleteTodo"
          style="background-color: #f56c6c; color: aliceblue;"
        >
          Удалить
        </el-button>
        <el-button @click.stop="isdialogVisible = false">Отмена</el-button>
      </span>
    </template>
  </el-dialog>
</template>

