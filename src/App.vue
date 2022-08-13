<template>
<the-nav></the-nav>
 <router-view></router-view>
</template>


<script>
import TheNav from './components/TheNav.vue'
export default {
  components: {
    TheNav
  },
  data(){
    return {

    }
  }
}
</script>
<style>
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 30px;
}
body {
  height: 2000px;
}
</style>