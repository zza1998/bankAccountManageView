import axios from 'axios'

//创建axios的一个实例 
var instance = axios.create({
    baseURL:"http://localhost:8099/",
    timeout: 6000
})


//------------------- 一、请求拦截器 忽略
instance.interceptors.request.use(function (config) {
    console.log("request")
    console.log(config)
    if (localStorage.getItem('Authorization')) {
        config.headers.Authorization = localStorage.getItem('Authorization');
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

//----------------- 二、响应拦截器 忽略
instance.interceptors.response.use(function (response) {
    console.log("response ");
    console.log(response);
    if(response.data.code == 400){
        localStorage.removeItem('Authorization');
        this.$router.push('/login');
    }
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});


export default function (method, url, data = null) {
    method = method.toLowerCase();
    if (method == 'post') {
        return instance.post(url, data)
    } else if (method == 'get') {
        return instance.get(url, { params: data })
    } else if (method == 'delete') {
        return instance.delete(url, { params: data })
    }else if(method == 'put'){
        return instance.put(url,data)
    }else{
        console.error('未知的method'+method)
        return false
    }
}