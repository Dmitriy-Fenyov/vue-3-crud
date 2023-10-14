<script setup>
import { RouterView } from 'vue-router'
import PageHeader from '@/components/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue'
</script>

<template>
  <div class="page">
    <PageHeader />
    <main>
      <RouterView />
    </main>
    <PageFooter />
  </div>
</template>

<style lang="scss" scoped>

.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main {
  flex-grow: 1;
}

</style>
