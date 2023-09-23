<template>
  <div class="item">
    <h2> Детальная страница поста № {{ $route.params.id }}</h2>
    <div><strong>{{ post.title }}</strong></div> 
    <div>{{ post.body }}</div>
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
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1', {
          params: {
            _id: this.post.id,
          }
        } )
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
  text-align: end;
  margin-right: 15px;
}
.button {
  display: block;
  margin: 20px auto 0;
  width: 171px;
  height: 40px;
}
</style>
