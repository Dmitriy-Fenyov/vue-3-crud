<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <div class="wrapper">
      <p>Vue 3 CRUD app</p>
      <nav>
        <RouterLink to="/">Посты</RouterLink>
        <RouterLink to="/about">задачи</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style  scoped>
header {
  margin-bottom: 50px;
  box-shadow: 0px 2px 15px 0px #64646F33;

}
.wrapper {
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
}
</style>
