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
        <el-skeleton class="post" />
        <el-skeleton class="post" />
        <el-skeleton class="post" />
        <el-skeleton class="post" />
      </template>
    </div>
    <el-button 
      class="button" 
      type="primary" 
      @click="changePage(page,limit)"
    >
      <span 
        class="loading"
        v-loading="!isLoaded"
        element-loading-text="Загрузка..."
        :element-loading-spinner="svg"
        element-loading-background="rgba(0, 0, 0, 0.8)"
      />

      Загрузить ещё
    </el-button>
  </div>
</template>

<script>
import axios from "axios"
import { usePosts } from "../hooks/usePosts"

export default {
  data() {
    return {
      page: 1,
      limit:4,
    }
  },
  setup() {
    const {posts, isLoaded} = usePosts(4)
    return {
      posts, isLoaded
    }
  },
  methods: {
    
    async changePage() {
      try {
        this.isLoaded = false
        this.page +=1
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        })
        this.posts = [...this.posts, ...response.data]
        this.isLoaded = true
      } 
      catch (e) {
          alert('ошибка')
      } 
    }
  },
}
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
.element-loading-background {
background-color: white;
color: azure;
fill: azure;
}
.element-loading-spinner {
  background-color: white;
  color: azure;
  fill: azure;
}
</style>

