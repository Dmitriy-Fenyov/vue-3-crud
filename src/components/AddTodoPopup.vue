<script setup>
import { reactive, ref } from 'vue'
import {usetodosMockStore} from '@/stores/todosMockStore'
const create = usetodosMockStore()
const dialogFormVisible = ref(false)
const isFavorite = ref('')
const ValidateForm = reactive({
  title: '',
})
const formRef = ref()
const rules = reactive({
  title: [
    { required: true, message: 'Название не должно быть пустым', trigger: 'blur' },
  ]})
const submitForm = async (formEl) => {
  if (!formEl) return
  await formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
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
      :rules="rules" 
      ref="formRef"
      :model="ValidateForm"
    >
      <el-form-item
        prop="title"
      >
        <el-input
          v-model="ValidateForm.title"
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
        <el-button type="primary" @click="() => {dialogFormVisible = false; submitForm(formRef); create.createTodo(ValidateForm.title,isFavorite); ValidateForm.title=''; isFavorite=''}">
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
