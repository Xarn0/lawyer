<template>
  <div id="app">
    <main-header/>
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <router-view/>
    <main-footer/>
  </div>
</template>
<script>
import mainHeader from "@/components/mainComponets/header.vue"
import mainFooter from '@/components/mainComponets/footer.vue';
export default{
  components:{
    mainHeader,
    mainFooter
  }
}

</script>
<style lang="scss">

</style>
