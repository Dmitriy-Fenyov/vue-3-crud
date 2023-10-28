<template>
  <div class="todos">
    <h1 class="todos-title">CRUD задачи</h1>
    <div class="wrapper-todos">
      <div class="wrapper-todos-btn">
        <div class="checkbox">
          <el-checkbox
            v-for="option in filterOptions"
            :key="option.key"
            :label="option.label"
            v-model="option.isApply"
            class="button"
            border
          />
        </div>
        <AddTodoPopup> 
          Добавить задачу
        </AddTodoPopup>
      </div>
      <div class="wrapper">
        <div  
          class="todosList"
          v-for="todo in filteredTodos"
          :key="todo.id"
          :class="[{ active: todo.isDone}, todosList]"
        >
          <div class="wrapper-flexbox">
            <div class="todosList-title"><strong>{{ todo.title }}</strong></div>
            <el-button 
              v-if="!todo.isFavorite"
              @click="mock.favorite(todo.id)"
              v-model="todo.isFavorite"
              type="warning" 
              :icon="Star"
              plain 
              circle 
              class="mrgn-left" 
            />
            <el-button
              v-else
              @click="mock.favorite(todo.id)"
              v-model="todo.isFavorite" 
              type="warning" 
              :icon="StarFilled"
              plain 
              circle 
              class="mrgn-left"
            />
          </div>  
          <div class="wrapper-flexbox">   
            <RouterLink 
              class="todosList-item" 
              :to="'/todos/' + todo.id"
              :id="todo.id"
              :title="todo.title"
            >
              Редактировать
            </RouterLink>
            <DeleteTodoPopup 
              :title="todo.title" 
              :id="todo.id"
            />
          </div>    
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Star, StarFilled } from '@element-plus/icons-vue'
import DeleteTodoPopup from '@/components/DeleteTodoPopup.vue'
import AddTodoPopup from '@/components/AddTodoPopup.vue'
import {usetodosMockStore} from '@/stores/todosMockStore'
import { storeToRefs } from 'pinia'
const mock = usetodosMockStore()
const {filteredTodos, filterOptions } = storeToRefs(mock)
</script>

<style lang="scss" scoped>
.todos {
  width: 1000px;
  margin: 0 auto;
}
.todos-title {
font-size: 32px;
font-weight: 700;
line-height: 36px;
letter-spacing: 0em;
margin: 0;
}
.wrapper-todos {
  width: 500px;
  vertical-align: center;
  margin: 20px auto 0;
}
.wrapper-todos-btn {
  display: flex;
  justify-content: space-between;
  vertical-align: middle;
  align-items: center;
}
.checkbox{
  display: flex;
}
.button {
  display: block;
  margin: 20px 20px 0;
  padding-top: 10px;
  width: 125px;
  height: 40px;
  margin-left: 0px;
  
}
.wrapper {
  width: 500px;
  margin-top: 30px;
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 20px;  
  grid-row-gap: 20px;
  .todosList:hover {
    color: black;
    border: 2px solid black;
    box-shadow: 0px 2px 8px 0px #63636333;
  }
}
.todosList {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  box-sizing: border-box;
  width: 500px;
  height: 116px;
  border: 2px solid #AAAAAA;
  padding: 15px;
  color: black;
}
.wrapper-flexbox {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.todosList-title {
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;

}
.todosList-item {
  text-decoration: none;
  color: black;
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  }
.mrgn-left {
  width: 38px;
  height: 38px;
}

.active {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  box-sizing: border-box;
  width: 500px;
  height: 116px;
  padding: 15px;
  color: #90EE90;
  border: 2px solid #90EE90;
  }
  .el-checkbox__input {
    background-color: aqua;
  }
</style>
