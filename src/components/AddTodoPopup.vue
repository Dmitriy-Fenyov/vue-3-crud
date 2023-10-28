<script setup>
import { ref } from 'vue'
import {usetodosMockStore} from '@/stores/todosMockStore'
const create = usetodosMockStore()
const dialogFormVisible = ref(false)
const isFavorite = ref(false)
const isFormValid = ref(true)
const title = ref('')
const validateForm = () => {
  isFormValid.value = title.value.length > 0
}
const addItem = () => {
  validateForm()
  if (isFormValid.value === true) {
    create.createTodo(title.value, isFavorite.value)
    title.value = ''
    isFavorite.value = false
    dialogFormVisible.value = false
  }
}
</script>

<template>
  <el-button 
    type="primary"
    style="height: 40px; margin-top: 20px;" 
    @click="dialogFormVisible= true"
  >
    Добавить задачу
  </el-button>

  <el-dialog
    v-model="dialogFormVisible"
    style="width: 600px;"
    title="Создать задачу"
  >
    <el-form
      :model="validateForm"
    >
      <el-form-item
        prop="title"
      >
        <p v-show="!isFormValid" style="margin: 0; color: red;">
          Пожалуйста, введите название!
        </p>
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
        <el-button type="primary" @click="() => {addItem()}">
          Создать
        </el-button>
        <el-button @click="dialogFormVisible = false">Отмена</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped>
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

</style>
