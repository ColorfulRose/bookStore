import axios from "axios";
export  function request(config) {
  const instance = axios.create({
    baseURL:'https://api.shop.eduwork.cn',
    timeout: 5000
  })
  //  请求拦截
  instance.interceptors.request.use(config=>{
    //  如果有些接口需要认证才能访问 统一设置

    return config
  },err=>{})


  //  响应拦截
  instance.interceptors.response.use(res=>{
    return res.data?res.data:res
  },err=>{
  //  如果需要授权的接口统一去login
  //  如果有错误 显示错误信息

  })
  return  instance(config)
}