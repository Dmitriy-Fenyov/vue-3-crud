<template>
  <div class="postId-wrapper">
    <h2 class="postId-title"> Детальная страница поста № {{ $route.params.id }}</h2>
    <el-skeleton v-if="isLoaded===false" />
    <div class="postId-postTitle"><strong>{{ post.title }}</strong></div> 
    <div class="postId-postBody">{{ post.body }}</div>
    <div class="positionId">post id:{{ post.id }}</div>
  </div>
</template>

<script>
import { usePost } from "../hooks/usePost"
import { useRoute } from 'vue-router'

export default {
  setup() {
    const route = useRoute()
    const {post, isLoaded} = usePost(route.params.id)
    return {
      post, isLoaded
    }
  }
}
</script>

<style lang="scss" scoped>
.postId-wrapper {
  width: 1000px;
  margin: 0 auto;
}
.postId-title {
  font-size: 32px;
  font-weight: 700;
  line-height: 36px;
}
.postId-postTitle{
  font-size: 21px;
  font-weight: 700;
  line-height: 26px;
}
.postId-postBody{
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
</style>

