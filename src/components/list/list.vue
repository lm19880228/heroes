<template>
  <div>
    <h2 class="sub-header">Hero List</h2>
    <a class="btn btn-success aaa" @click.prevent="showAddHero()">添加英雄</a>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>名字</th>
            <th>性别</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(v,i) in list " :key="i">
            <td>{{v.id}}</td>
            <td>{{v.name}}</td>
            <td>{{v.gender}}</td>
            <td>
              <a class="aaa" @click.prevent="showEditHero(v.id)">编辑</a> &nbsp;&nbsp;
              <a class="aaa" @click.prevent="deleteHero(v.id)">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
//导入axios模块
// import axios from "axios";
//组件默认导出
export default {
  data() {
    return {
      list: []
    };
  },
  mounted() {
    // 页面加载完自动调用mounted内部方法
    // 相当于window.onload
    this.getData();
  },
  methods: {
    //编辑英雄 - 显示编辑edit.vue组件
    showEditHero(ID) {
      // console.log(ID)
      // 获取动态路由参数 $route.params.id
      // 参数1: 路由配置名,参数2:该名字对应的路由配置中的ID值
      // roter-link to="/ball/football" -> 路由配置{path:'/ball/:id'}
      
      this.$router.push({
        name: "edit",
        // 赋值
        params: { id: ID }
      });
    },
    //添加英雄 - 显示添加add.vue组件
    showAddHero() {
      this.$router.push({ name: "add" });
    },
    //删除英雄
    deleteHero(ID) {
      if (confirm("您确认删除吗")) {
        // 删除英雄的ID
        // 1.data 选项有没有id
        // 2.方法能不能传参数
        this.axios.delete("heroes/" + ID).then(res => {
          //删除成功 更新视图
          this.getData();
        });
      }
    },
    getData() {
      //获取英雄列表数据
      this.axios
        .get("heroes")
        //获取成功
        .then(res => {
          //console.log(res){data: Array(5), status: 200, statusText: "OK", headers: {…}, config: {…}, …}
          const { status, data } = res;
          if (status === 200) {
            this.list = data;
          }
        });
    }
  }
};
</script>

<style>
.aaa {
  /* 光标 小手 */
  cursor: pointer;
}
</style>

// A组件有数据ID
// edit btn ->(ID) -> js代码位置
// 【通过变成是导航给动态路由传值 --> 这个值在路由对象中】
// this.$router.push({params:{id:ID}})
   
// 想在B组建中使用数据ID
// ID
// this.$route

// 视图内使用{{$route.params.id}}
// js中使用 this.$route.params.id

A组件 this.$router.push({params:{id:ID}}) 加入参数
B组件 this.$route.params.id 使用参数