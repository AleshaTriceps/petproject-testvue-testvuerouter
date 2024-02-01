<template>
  <div class="app">
    <header-navbar></header-navbar>
    <router-view></router-view>
  </div>
</template>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}
</style>
<script>
import HeaderNavbar from './components/HeaderNavbar.vue'
export default {
  components: {
    HeaderNavbar
  }
}
</script>
