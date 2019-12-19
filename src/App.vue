<template>
  <div id="app">
      <PageBack><router-view/></PageBack>
  </div>
</template>

<script>
import PageBack from "./pages/PageBack"
export default {
  name: 'App',
  methods: {

  },
  data(){
      return {
          path : ''
      }
  },
  mounted(){
      console.log("path == "+this.$router.path)
      this.path = this.$router.path
  },
  watch:{
        $route(to,from){
        this.path = to.path
        }
    },
  components:{
      PageBack
  }
}
</script>

<style>
#app{
  height: 100%;
  width: 100%;
}
*{
  margin:0;
  padding:0
}
.layout-footer-center{
    text-align: center;
}
html,body{
    height:100%;
    width:100%;
    border:hidden;
    overflow:hidden;
}
</style>
