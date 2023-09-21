<script setup>
import { RouterView } from 'vue-router'
import PageHeader from '@/components/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue'

</script>

<template>
  <PageHeader />
  <RouterView />
  <PageFooter />
</template>

<style lang="scss" scoped>
header {
  margin-bottom: 50px;
  box-shadow: 0px 2px 15px 0px #64646F33;

}
.wrapper {
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  max-height: 50px;
  margin: 0 auto;
  font-size: 15px;
  font-weight: 400;
  line-height: 18.4px;
}
nav {
  display: flex;
  width: 144px;
  justify-content: space-between;
  padding: 15px;
  
  a {
    text-decoration: none;
  }
  .active{
    color:#00008B;
    box-shadow: 0px 1px #00008B;
  }
}
</style>
