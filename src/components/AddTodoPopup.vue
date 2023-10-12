<script setup>
import { ref } from 'vue'
import {usetodosMockStore} from '@/stores/todosMockStore'
const create = usetodosMockStore()
const dialogFormVisible = ref(false)
const title = ref('')
const isFavorite = ref('')
</script>

<template>
  <el-button 
    type="primary" 
    style="margin-right: 0px;"
    class="button"  
    text 
    @click="dialogFormVisible= true"
  >
    Добавить задачу
  </el-button>

  <el-dialog
    v-model="dialogFormVisible"
    style="width: 600px;"
    title="Создать задачу"
  >
    <el-form>
      <el-form-item>
        <el-input
          v-model="title"
          placeholder="Название задачи"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item label="Добавить в избранное">
        <el-checkbox v-model="isFavorite" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="() => { dialogFormVisible = false; create.createTodo(title,isFavorite)}">
          Создать
        </el-button>
        <el-button @click="dialogFormVisible = false">Отмена</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped>
.el-button--text {
  margin-right: 15px;
}
.el-select {
  width: 300px;
}
.el-input {
  width: 560px;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}
.button {
  display: block;
  margin: 20px auto 0;
  width: 125px;
  height: 40px;
  border: 1px solid #dedfe0;
}
</style>
