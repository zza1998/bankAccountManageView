<template>
  <div class="hello">
      <Table stripe :columns="columns1" :data="data1"></Table>
  </div>
</template>

<script>
import api from '../fetch/api'
import {USER_LIST} from '../fetch/req.js'
export default {
  name: 'HelloWorld',
  mounted(){
      this.getUserList(this.setData)
  },
  methods:{
      getUserList(callback){
        USER_LIST(null)
         .then(res => {
                    console.log("---[3]---")
                    console.log(res)
                    callback(res.content)
                })
                .catch(error => {
                    console.log(error)
                })
      },
      setData(data){
          this.data1 = data
        //   console.log(this.data1)
      }
  },
  data () {
    return {
      columns1: [
                    {
                        title: '用户名',
                        key: 'userName'
                    },
                    {
                        title: '邮箱',
                        key: 'email'
                    },
                    {
                        title: '身份证',
                        key: 'idCard'
                    },
                    {
                        title: '密码',
                        key: 'password'
                    }
                ],
        data1: []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
</style>
