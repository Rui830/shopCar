<template>
  <div class="app">
    <MyHeader title="购物车案例" background="gold" color="black"/>
    <MyGoods />
    <MyFooter />
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue'
import MyGoods from '@/components/MyGoods.vue'
import MyFooter from '@/components/MyFooter.vue'

export default {
  components: {
    MyHeader,
    MyGoods,
    MyFooter
  }
}
</script>

<style scoped>
.app {
  box-sizing: border-box;
  padding: 50px 0;
  max-height: 100vh;
  overflow: auto;
}
</style>
