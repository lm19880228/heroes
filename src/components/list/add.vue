<template>
  <div>
    <h2 class="sub-header">添加英雄</h2>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">英雄名称</label>
        <!-- 原版 -->
        <!-- <input type="text" v-model="name" class="form-control" id="exampleInputEmail1" placeholder="请输入英雄名称"> -->
        <!-- 对象替代版 -->
        <input type="text" v-model="formdata.name" class="form-control" id="exampleInputEmail1" placeholder="请输入英雄名称">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">英雄性别</label>
        <!-- 原版 -->
        <!-- <input type="text" v-model="gender" class="form-control" id="exampleInputPassword1" placeholder="请输入英雄性别"> -->
        <!-- 对象替代版 -->
        <input type="text" v-model="formdata.gender" class="form-control" id="exampleInputPassword1" placeholder="请输入英雄性别">
      </div>

      <button type="submit" class="btn btn-success" @click.prevent="handleAddHero()">确认添加</button>
    </form>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  // 原版
  // data() {
  //   return {
  //     name: "",
  //     gender: ""
  //   };
  // },
  // 对象替代版
  data(){
      return{
       formdata:{
          name:'',
          gender:''
       }
      }
   },
  methods: {
    // 添加 - 处理表单提交
    handleAddHero() {
      //1. 获取表单数据

      //2. axios.post(参数1:url,参数2:对象) 原版
      // axios
      //   .post(`http://localhost:3000/heroes`, {
      //     name: this.name,
      //     gender: this.gender
      //   }).then(res => {
      //     //3. 回到list组件 -> 更改当前url地址栏  编程式导航
      //     this.$router.push({ name: "heroes" });
      //   });
      // 对象替代版
       this.axios.post(`heroes/`,this.formdata).then((res)=>{
      //3. 回到list组件
        this.$router.push({name:'heroes'})
      })
    }
  }
};
</script>

<style>
</style>
