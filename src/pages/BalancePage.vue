<template>
  <div class="balance">
      <p>balance</p>
      <Page/>
  </div>
</template>

<script>
import Page from '../components/page'
import api from '../fetch/api'
export default {
  name: 'BalancePage',
  mounted(){
      
  },
  components:{
      Page
  },
  methods:{
   
  },
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
