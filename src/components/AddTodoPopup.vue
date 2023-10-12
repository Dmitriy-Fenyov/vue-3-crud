<script setup>
import { reactive, ref } from 'vue'
const dialogFormVisible = ref(false)
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})
</script>

<template>
  <el-button 
    type="primary" 
    style="margin-right: 0px;"  
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
    <el-form :model="form">
      <el-form-item>
        <el-input
          v-model="form.name"
          placeholder="Название задачи"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item label="Добавить в избранное">
        <el-checkbox />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="dialogFormVisible = false">
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
</style>
