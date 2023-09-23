<template>
  <div class="item">
    <h2>Получение списка всех постов</h2>
    <div class="wrapper">
      <el-skeleton class="post" />
      <el-skeleton class="post" />
      <el-skeleton class="post" />
      <el-skeleton class="post" />
    </div>
    <div class="wrapper">
      <div class="post" v-for="post in posts">
        <div><strong>{{ post.title }}</strong></div>
        <div>{{ post.body }}</div>
        <div class="positionId">post id:{{ post.id }}</div>
      </div>
    </div>
    <el-button 
      class="button" 
      type="primary" 
      @click="changePage(page)"
    >
      Загрузить страницу {{ page +1 }}
    </el-button>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      posts: [],
      page: 1,
      limit: 4,
    }
  },
  methods: {
    changePage(page) {
      this.page = page+1
      this.fetchPosts()
    },
    async fetchPosts() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        } )
        this.posts = response.data
      } catch (e) {
        alert('Erorr')
      } 
    }
  },
  mounted() {
    this.fetchPosts()
  }
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


</style>
