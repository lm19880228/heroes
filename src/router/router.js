// 模块： 配置路由
// 脚手架生成的工程就是模块化工程
// 1. 导入模块 模块化的工程中 路由的用法
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 2. 导入要渲染的组件 import(导入) xxx from(从) 'url'
import List from '../components/list/list.vue'
import Bar from '../components/bar/bar.vue'
import Foo from '../components/foo/foo.vue'
import add from '../components/list/add.vue'
import edit from '../components/list/edit.vue'
// 3. 路由配置
var routes = [{name: 'heroes',path: '/heroes',component:List},
              {name: 'bar',path: '/bar',component:Bar},
              {name: 'foo', path: '/foo',component:Foo},
              {name: 'add', path: '/add',component:add},
              // 不同的标识对应同一个组件 动态路由参数:id
              {name: 'edit', path: '/edit/:id',component:edit},
            ]
// 4. 实例化路由
var router = new VueRouter({
  // 通过路由选项 全局设置所有激活的routerlink的类名(routerlink被点击时触发)
    linkExactActiveClass:'active',
    routes
})
// 5. 导出模块
export default router

