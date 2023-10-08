<script setup>
import {usetodosMockStore} from '@/stores/todosMockStore'
const mock = usetodosMockStore()
const {todos} = mock
</script>

<template>
  <div class="popup">
    <p>Удалить задачу {{ todos[1].title }} </p>
  </div>
</template>

<style lang="scss" scoped>

  .popup {
    width: 588px;
    height: 146px;
    margin: 0 auto;
    position: absolute;
    bottom: 50%;
    right: 50%;
  }
</style>
