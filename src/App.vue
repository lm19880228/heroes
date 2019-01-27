//根组件 显示其他组件 router-view
<template>
  <div id="app">
    <!-- 头部 appnav -->
     <!-- 3. 通过组件名 使用组件 appNav -->
     <!-- 组件名驼峰命名 第二个单词大写字母前用 "-" 隔开 -->
     <app-nav></app-nav>
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-3 col-md-2 sidebar">
              <!-- 侧边栏 appsidebar -->
                 <app-slider></app-slider>
            </div>
            <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
              <!-- list组件 --><!-- <list></list> --><!-- <bar></bar> --><!-- <foo></foo> -->
            <router-view></router-view>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
//要在App.vue中使用 appnav组件
//1. 导入appnav组件
import appNav from './components/common/appnav.vue'
import appSlider from './components/common/appslider.vue'
import list from './components/list/list.vue'
export default {
  name: 'app',
  //2.通过选项注册组件
  components:{
      //  'appNav':appNav
         appNav,appSlider,list
         
    
  },
  data () {
    return {
    
    }
  }
}
</script>

<style>
</style>
// .vue 是组件文件 App.vue 相当于是整个项目的根组件
   // 所有其他的.vue组件最终都要展示在App.vue中 
   // App.vue中的所有代码将来会和div的内容进行替换
// .vue代码 template script style 
// SPA项目是由各种不同的.vue文件组成的
// App.vue作用: 展示不同组件的
