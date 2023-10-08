<template>
  <div class="item">
    <h2 class="postPageId-title"> Детальная страница поста № {{ $route.params.id }}</h2>
    <el-skeleton v-if="load===false" />
    <div class="postPageId-postTitle"><strong>{{ post.title }}</strong></div> 
    <div class="postPageId-postBody">{{ post.body }}</div>
    <div class="positionId">post id:{{ post.id }}</div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      post: [],
      load: false
    }
  },
  methods: {
    async fetchPosts() {
      try {
        this.load= false
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/` +  this.$route.params.id  )
        this.post = response.data
        this.load= true
        
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
.postPageId-title {
  font-size: 32px;
  font-weight: 700;
  line-height: 36px;
}
.postPageId-postTitle{
  font-size: 21px;
  font-weight: 700;
  line-height: 26px;
}
.postPageId-postBody{
  margin-top: 15px;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
}
.positionId {
  text-align: end;
  margin-right: 15px;
  margin-top: 15px;
  font-family: Arial;
  font-size: 16px;
  line-height: 18px;

}
.button {
  display: block;
  margin: 20px auto 0;
  width: 171px;
  height: 40px;
}
</style>
