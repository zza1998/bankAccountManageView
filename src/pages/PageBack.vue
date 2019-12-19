<template>
  <div class="pageBack">
       <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo">
                      <!-- <img src="" width="100px" height="30px"/> -->
                    </div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <Icon type="ios-navigate"></Icon>
                            <router-link to="/login">登录</router-link>
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="ios-keypad"></Icon>
                            <router-link to="/register">注册</router-link>
                        </MenuItem>
                        <MenuItem name="3">
                            <Icon type="ios-analytics"></Icon>
                            我的
                        </MenuItem>
                        <MenuItem name="4">
                            <Icon type="ios-paper"></Icon>
                            消息
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Layout>
                <Sider hide-trigger :style="{background: '#fff'}">
                    <Menu active-name="balance" theme="light" width="auto" :open-names="['1']"  @on-select="v=>{setBread(v)}" @on-open-change="v=>{setBread2(v)}">
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                银行管理
                            </template>
                            <MenuItem name="账目查询" to="/">账目查询</MenuItem>
                            <MenuItem name="账单查询" to="/balance">账单查询</MenuItem>
                            <MenuItem name="理财账户查询">理财账户查询</MenuItem>
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                账户操作
                            </template>
                            <MenuItem name="存款 " to="/saveMoney">存款</MenuItem>
                            <MenuItem name="取款" to="/getMoney">取款</MenuItem>
                            
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                账户管理
                            </template>
                            <MenuItem name="账户管理">账户管理</MenuItem>
                        </Submenu>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px '}">
                    <Breadcrumb :style="{margin: '24px 0'}">
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <!-- <BreadcrumbItem>{{this.routeIndex2[0]}}</BreadcrumbItem> -->
                        <BreadcrumbItem>{{this.routeIndex[0]}}</BreadcrumbItem>
                    </Breadcrumb>
                    <Content :style="{padding: '24px', margin: '0px', minHeight: '280px', background: '#fff'}">
                       <slot></slot>
                    </Content>
                </Layout>
            </Layout>
             <Footer class="layout-footer-center">2019-2020 &copy; BankManagement</Footer>
        </Layout>
  </div>
</template>

<script>
export default {
  name: 'pageBack',
  methods: {
      link(url){
          alert(url)
          this.$router.push(url)
      },
      setBread(e){
        this.routeIndex = []
        this.routeIndex.push(e)
      },
      setBread2(e){
        this.routeIndex2 = []
        this.routeIndex2.push(e)
      }
  },
  data(){
      return {
         routeIndex:[
             
         ],
         routeIndex2:[

         ]
      }
  }
}
</script>

<style>
.ivu-layout{
  height: 100%;
}
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    height: 100%;
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
.pageBack{
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
