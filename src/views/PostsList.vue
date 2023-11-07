<template>
  <div class="item">
    <h2>Получение списка всех постов</h2>
    <div class="wrapper">
      <RouterLink 
        :to="'/posts/' + post.id"
        class="post" 
        v-for="post in posts" 
        :key="post.id"
        :posts="posts"
      >
        <div><strong>{{ post.title }}</strong></div> 
        <div>{{ post.body }}</div>
        <div class="positionId">post id:{{ post.id }}</div>
      </RouterLink>
      <template v-if="isLoaded === false">
        <el-skeleton
          v-for="n in POSTS_PER_PAGE"
          :key="n"
          class="post"
        />
      </template>
    </div>
    <el-button
      class="button" 
      type="primary"
      :loading="!isLoaded"
      @click="loadPage(currentPage + 1)" 
    >
      {{ isLoaded ? 'Загрузить ещё' : 'Загрузка...' }}
    </el-button>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import { loadPosts } from "../api/loadPosts"

const POSTS_PER_PAGE = 4

const posts =  ref([])
const isLoaded =  ref(true)
let currentPage = 0

const loadPage = async (page) =>  {
  try {
    isLoaded.value = false
    const newPosts = await loadPosts(page, POSTS_PER_PAGE)
    posts.value = [...posts.value, ...newPosts]
    currentPage = page
    isLoaded.value = true
  } 
  catch (e) {
    alert('ошибка')
  } 
}

onBeforeMount(() => {
  loadPage(currentPage + 1)
})
</script>

<style lang="scss" scoped>
.item {
  width: 1000px;
  margin: 0 auto;
}
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;  
  grid-row-gap: 20px;
  .post:hover {
    color: black;
    border: 2px solid black;
    box-shadow: 0px 2px 8px 0px #63636333;
  }
}
.post {
  position: relative;
  box-sizing: border-box;
  width: 490px;
  height: 186px;
  border: 2px solid #AAAAAA;
  padding: 17px;
  color: black;
}
.positionId {
  position: absolute;
  bottom: 17px;
  right: 20px;
}
.button {
  display: block;
  margin: 20px auto 0;
  width: 171px;
  height: 40px;
}
.el-button .custom-loading .circular {
  margin-right: 6px;
  width: 18px;
  height: 18px;
  animation: loading-rotate 2s linear infinite;
}
.el-button .custom-loading .circular .path {
  animation: loading-dash 1.5s ease-in-out infinite;
  stroke-dasharray: 90, 150;
  stroke-dashoffset: 0;
  stroke-width: 2;
  stroke: var(--el-button-text-color);
  stroke-linecap: round;
}
</style>

