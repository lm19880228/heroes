// 程序入口文件 作用:导包
// 导入Vue框架
import Vue from "vue";
// 导入App组件文件
import App from "./App.vue";
//导入路由 自己的模块通过路径导入
import router from "./router/router.js";
import axios from 'axios'
//各组件url基础路径(简化代码)
axios.defaults.baseURL = 'http://localhost:3000/'
//给 构造函数Vue的原型中 添加axios属性 以方便其他组件使用this.axios(简化代码)
Vue.prototype.axios = axios
//引入所需要的样式文件
// 新语法 import 样式直接用 可以没有接受者
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/index.css'
var vm = new Vue({
  el: "#app",
  //挂载路由
  router,
  // render:渲染 使用组件文件
  // 把app组件里面的页面标签和当前Vue实例所管理的视图内容区域进行替换
  render: h => h(App)
});


// ES6关于模块的使用 提供新API
// 导入
// import App from './App.vue'  -> require('')
// 导出
// export default{}  导出对象 module.exports