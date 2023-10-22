<template>
  <h2 class="item"> Детальная страница задачи № {{ $route.params.id }}</h2>
  <PageTodosId 
    :id="$route.params.id"
  />
</template>

<script setup>
import PageTodosId from '@/components/PageTodosId.vue'
</script>

<style lang="scss" scoped>
.item {
  width: 1000px;
  margin: 0 auto;
}
</style>
