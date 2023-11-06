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
      v-if="isLoaded" 
      class="button" 
      type="primary" 
      @click="changePage(page,limit)" 
    >
      Загрузить ещё
    </el-button>
    <el-button
      v-else
      class="button"
      type="primary" 
      loading
      @click="changePage(page,limit)"
      style="display: flex;"
    >
      <template #loading>
        <div class="custom-loading">
          <svg class="circular" viewBox="-10, -10, 50, 50">
            <path
              class="path"
              d="
            M 30 15
            L 28 17
            M 25.61 25.61
            A 15 15, 0, 0, 1, 15 30
            A 15 15, 0, 1, 1, 27.99 7.5
            L 15 15
          "
              style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"
            />
          </svg>
        </div>
      </template>
      Загрузка...
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

