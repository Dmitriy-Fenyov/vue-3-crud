<script setup>
defineProps(['title'])
</script>

<template>
  <div class="popup">
    <p>Удалить задачу {{ title }} </p>
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
