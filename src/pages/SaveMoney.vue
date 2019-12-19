<template>
  <div class="saveMoney">
        
    <Poptip trigger="hover" title="金额" content="金额输入">
        <Input-number :max="999999" :min="1" :value.sync="num"></Input-number>
    </Poptip>
      <i-button @click="save">存钱</i-button>
  </div>
</template>

<script>
import api from '../fetch/api'
export default {
  name: 'SaveMonsy',
  mounted(){
      
  },
  components:{
  },
  methods:{
      save(){
          let data = {
              num : this.num
          }
            api.SaveMoney(data)
                .then(res =>{
                    console.log(res)
                        if(res.code == 200){
                            this.$Message.success(res.msg)
                        }else{
                            this.$Message.error(res.msg)
                        }
                    }).catch(e=>{
                                this.$Message.error(e);
                            })
      }
  },
  data () {
    return {
        num: '1'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
