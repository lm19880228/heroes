<template>
  <div>
    <h2 class="sub-header">编辑英雄</h2>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">英雄名称</label>
        <input v-model="formdata.name" class="form-control" id="exampleInputEmail1">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">英雄性别</label>
        <input v-model="formdata.gender" class="form-control" id="exampleInputPassword1">
      </div>
      <button type="submit" class="btn btn-success"
      @click.prevent="hadnleEdit()"
      >确认编辑</button>
    </form>
  </div>
</template>
<script>
// import axios from 'axios'

export default {
    data(){
      return{
          formdata:{

          }
      }
    },
    mounted(){
      this.getHeroById()
      console.log(this.formdata)
      console.log(this)
    },
    methods:{
        // 编辑 - 表单提交
        hadnleEdit(){
          // 改哪个数据  this.formdata == {id: 2, name: "关羽", gender: "男"}
          // this.$route.params.id 获取当前url动态参数id的值
          // 参数1:url 参数2:修改数据(对象)
          this.axios.put(`heroes/`+this.$route.params.id,this.formdata)
          .then((res)=>{
             // 回到列表组件
             this.$router.push({name : 'heroes'})
          })
        },

        getHeroById(){
            // console.log(this.$route)
            // this.$router 获取路由对象
            // this.$route 获取路由配置对象
            // 根据参数查询数据
           this.axios.get(`heroes/`+ this.$route.params.id)
           .then((res)=>{
            //   console.log(res.data)
              this.formdata = res.data
           })
        }
    }
};
</script>

<style>
</style>
// input v-model = "数据"
// 数据 axios.get(url+ID)
// ID 来源于list.vue编辑按钮
// js中获取路由配置对象(this.$route.param) 
// this.$route.params.id -->获取上一个组件(list.vue编辑按钮)传过来的ID值
