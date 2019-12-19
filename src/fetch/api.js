import axios from 'axios'
import qs from 'qs'

//import * as _ from '../util/tool'

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'http://localhost:8099/';

//POST传参序列化
axios.interceptors.request.use((config) => {
    if(config.method  === 'post'){
        config.data = qs.stringify(config.data);
    }
    console.log("---A--")
    console.log(config)
    return config;
},(error) =>{
    // _.toast("错误的传参", 'fail');
    return Promise.reject(error);
});

//返回状态判断
axios.interceptors.response.use((res) =>{
    //if(!res.code == 200){
        // _.toast(res.data.msg);
        //return Promise.reject(res);
    //}
    return res;
}, (error) => {
   // _.toast("网络异常", 'fail');
    return Promise.reject(error);
});

export function fetch(url, params) {
    return new Promise((resolve, reject) => {
        console.log("---[1]---")
        axios.post(url, params)
            .then(response => {
                resolve(response.data);
                console.log("--[2]---")
            }, err => {
                //resolve(response.data);
                reject(err);
                console.log(err)
                console.log("---[2.5]---")
            })
            .catch((error) => {
               reject(error)
            })
    })
}

export default {
    /**
     * 用户登录
     */
    Login(params) {
        console.log("-----[login]-----")
        return fetch('/login', params)
    },
    
    /**
     * 用户注册
     */
    Regist(params) {
        return fetch('/users/api/userRegist', params)
    },

    /**
     * 发送注册验证码
     */
     RegistVerifiCode(tellphone) {
         return fetch('/users/api/registVerifiCode', {tellphone: tellphone})
     },
     /**
      * 存钱
      */
     SaveMoney(params){
         return fetch('/money/save',params)
     },
     /**
      * 
      */
     GetUserList(params) {
         return fetch('/users/list',params)
     }
}
