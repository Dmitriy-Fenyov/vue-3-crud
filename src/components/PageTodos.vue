<template>
  <div class="wrapper-todos">
    <div class="wrapper-todos-btn">
      <el-button 
        class="button" 
        type="default" 
        style="margin-left: 0px;"
      >
        Выполнено
      </el-button>
      <el-button 
        class="button" 
        type="default"
        style="margin-left: 0px; margin-right: 100px;"
      >
        Избранное
      </el-button>
      <el-button 
        class="button" 
        type="primary" 
        style="margin-right: 0px;"
      >
        Добавить задачу
      </el-button>
    </div>
    <div class="wrapper">
      <div 
        class="todoList" 
        v-for="todo in todos" 
        :key="todo.id"
        :todo="todo"
      >
        <div class="wrapper-flexbox">
          <div class="todoList-title"><strong>{{ todo.title }}</strong></div>
          <el-button 
            type="warning" 
            :icon="Star"
            plain 
            circle 
            class="mrgn-left"
          />
        </div>  
        <div class="wrapper-flexbox">   
          <RouterLink class="as" :to="'/todos/' + todo.id">
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
</template>

<script setup>
import { Star } from '@element-plus/icons-vue'
import DeleteTodoPopup from '@/components/DeleteTodoPopup.vue'
import {usetodosMockStore} from '@/stores/todosMockStore'
import { storeToRefs } from 'pinia'

const mock = usetodosMockStore()
const {todos} = storeToRefs(mock)
</script>


<style lang="scss" scoped>
.wrapper-todos {
  width: 500px;
  vertical-align: center;
  margin: 20px auto 0;
}
.wrapper-todos-btn {
  display: flex;
}
.button {
  display: block;
  margin: 20px auto 0;
  width: 125px;
  height: 40px;
}
.wrapper {
  width: 500px;
  margin-top: 30px;
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 20px;  
  grid-row-gap: 20px;
  .todoList:hover {
    color: black;
    border: 2px solid black;
    box-shadow: 0px 2px 8px 0px #63636333;
  }
}
.todoList {
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
.todoList-title {
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;

}
.as {
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

</style>
