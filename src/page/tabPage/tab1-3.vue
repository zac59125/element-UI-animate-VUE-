<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
   <el-button
    type="primary"
    @click="openFullScreen1"
    v-loading.fullscreen.lock="fullscreenLoading">
    指令方式
  </el-button>
  <el-button class="animaJump" @click="aniJump()">
      动画番组页面
  </el-button>

  <el-upload class=""
    class="avatar-uploader"
  action="https://jsonplaceholder.typicode.com/posts/"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
  </el-upload>
  <div class="bottomTit">文件上传</div>

  <div>
    <span>颜色选择器</span>
    <el-rate  v-model="value1"
      :colors="colors"
    ></el-rate>
  </div>

  <div class="treeBorder">
    <h2> 树组件</h2>
    <el-tree :data="datad" :props="defaultPor"   @node-click="handleNodeClick"></el-tree>
  </div>
  </div>
</template>

<script>
export default {
  name: 'tab3',
  data () {
    return {
      msg: 'tabç¬¬ä¸‰é¡µ',
      fullscreenLoading:false,
      imageUrl:"",
      value1:"",
      colors:["#999","#f66","#FF9900"],
      defaultPor: {
          children: 'children',
          label: 'label'
        },
      datad:[{
        label:"一级",
        children:[{
          label:"二级",
          children:[{
            label:"三级"
          }]
        }]
      }]
    }
  },
  methods:{
    handleNodeClick(data){
      console.log(data);
    },
    aniJump(){
      this.$router.push({"path":"/demo/bangumi"})
    },
    openFullScreen1(){
      this.fullscreenLoading=true;
      setTimeout(()=>{this.fullscreenLoading=false},2200)
    },
          handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
  }
  ,mounted(){
    var x=[1,2,3,4,5,6];
    var xd=new Promise(function(resolve,reject){
        resolve(x);
    })
    xd.then(function(res){
      console.log(res);
    })

    function getJson(url){
      var promise = new Promise(function(resolve,reject){
           function aa() {
             if(this.readyState!==4){
               return 
             }

             if(this.status == 200){
               resolve(this.response)
             }else{
               reject(new Error(this.statusText))
             }
             
          }
            var client=new XMLHttpRequest();
            client.open("POST",url);
            client.onreadystatechange=aa();
            client.setRequestHeader("Accept","application/json");
            client.responseType="json";
            client.send();
      

        })

      return promise; 
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1, h2 {
  font-weight: normal;
  font-size:24px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .el-upload{
  border: 4px solid  #ccc;
}
</style>
