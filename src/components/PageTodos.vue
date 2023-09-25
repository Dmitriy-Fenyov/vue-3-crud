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
      >
        <div><strong>{{ todo.title }}</strong></div>
        <ElCheckbox /> 
        <RouterLink class="as" :to="'/todos/' + todo.id">
          Редактировать
        </RouterLink>
        <el-button type="danger">Удалить</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos:[
      {
        id: 4,
        title: 'Проверить почту',
        isDone: false,
        isFavorite: false,
      },
      {
        id: 3,
        title: 'Сделать кофе',
        isDone: true,
        isFavorite: true,
      },
      {
        id: 2,
        title: 'Почистить зубы',
        isDone: true,
        isFavorite: false,
      },
      {
        id: 1,
        title: 'Проснуться',
        isDone: true,
        isFavorite: false,
      },
    ]
    }
  }
}
</script>


<style lang="scss" scoped>
.wrapper-todos {
  width: 500px;
  text-align: center;
  display: block;
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  box-sizing: border-box;
  width: 490px;
  height: 186px;
  border: 2px solid #AAAAAA;
  padding: 17px;
  color: black;
  
}
.as {
    text-decoration: none;
    color: black;
  }


</style>
