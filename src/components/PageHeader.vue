<script setup>
import { RouterLink} from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper-header">
      <p>Vue 3 CRUD app</p>
      <nav>
        <RouterLink active-class="active" to="/">Посты</RouterLink>  
        <RouterLink active-class="active" to="/todos">Задачи</RouterLink> 
      </nav>
    </div>
  </header>
</template>

<style lang="scss"  scoped>
header {
  margin-bottom: 50px;
  box-shadow: 0px 2px 15px 0px #64646F33;
}
.wrapper-header {
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  max-height: 50px;
  margin: 0 auto;
  font-size: 15px;
  font-weight: 400;
  line-height: 18.4px;
}
nav {
  display: flex;
  width: 144px;
  justify-content: space-between;
  padding: 15px;
  a {
    text-decoration: none;
    color: black;
  }
  .active{
    color:#00008B;
    box-shadow: 0px 1px #00008B;
  }
}
</style>
