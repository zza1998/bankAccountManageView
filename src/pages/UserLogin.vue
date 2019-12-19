<template>
<div class="userLogin">
    <div class="text">
        <p>银行账户管理系统登录</p>
    </div>
    <Form class="loginForm" ref="formInline" :model="formInline" :rules="ruleInline" inline>
        <FormItem prop="user">
            <i-input type="text" v-model="formInline.user" placeholder="Username">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </i-input>
        </FormItem>
        <FormItem prop="password">
            <i-input type="password" v-model="formInline.password" placeholder="Password">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </i-input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
        </FormItem>
    </Form>
    
</div>
</template>
<script>
import api from '../fetch/api'
import {LOGIN} from '../fetch/req.js'
import { mapMutations } from 'vuex'
    export default {
        data () {
            return {
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: 'Please fill in the user name', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            ...mapMutations(['changeLogin']),
            async handleSubmit(name) {  
                let _this = this;
                this.$refs[name].validate((valid) => {
                    let data = {
                        userName: this.formInline.user,
                        password: this.formInline.password
                    } 
                    if (valid) {
                        LOGIN(data).then(res=>{
                            console.log("return data");
                            console.log(res.data.token);
                            _this.$store.commit('changeLogin',{
                                token: res.data.token
                            })
                            this.$Message.success('登录成功');
                            _this.$router.push({path:'/'})
                        }).catch(error=>{
                            console.log(error)
                            this.$Message.info('登录失败');
                        })
                
                    } else {
                        this.$Message.error('用户名密码不能为空!');
                    }
                })
            }
        }
    }
</script>
<style>
    .text {
        margin: 150px auto -15%;
        padding: 0 auto;
        text-align: center;
        font-size: 25px;
    }
    .loginForm {
        width: 550px;
        height: 34px;
        padding: auto;
        margin: 20% auto;
        z-index: 10;
    }
    .img {
        position: fixed;
        top: 20%;
        left:25% ;
        margin: 0 auto;
    }

</style>
