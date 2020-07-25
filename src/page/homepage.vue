<template>
  <div id="app">
    <div class="bg animated fadeIn"></div>
    <div class="loginCont animated fadeIn">
      <h3></h3>
     <el-input clearable placeholder="请输入内容"  read  v-model="lgn1" value=""  @keyup.enter.native="jump()">
    <template slot="prepend">账号</template>
  </el-input>
  <div>
    <el-input clearable show-password     v-model="psw"  value=""  @keyup.enter.native="jump()">
       <template slot="prepend">密码</template>
    </el-input>
    </div>
      <el-button type="primary"  @click="jump()"  class="login" > 登录</el-button>
    </div> 
  </div>
</template>

<script>

export default {
  name: 'homePage',
 data() {
      return {
        lgn1: '',
        psw:""
      }
    },
    created:function(){
   let sessionName=window.sessionStorage.getItem("name");
    if(sessionName){
      this.$router.push({path:"index"})
    }
    },
  components:{

  },
  methods:{
    jump(params) {
      if(this.lgn1==""||this.psw==""){
        this.$message({
          message: '请您检查用户名和密码',
          type: 'warning'
        });
      }else{
        this.$store.commit("changeLogin",{name:this.lgn1,passWord:this.psw});
        this.$router.push({path:"index"})
      }

    },
    
    throlle(func,wait) {
      let timeO=null;
      let ret=null;
      let prov=0;
      return function(...args){
        let neDa=new Date(),
            context=this;
      let retunTime= wait - (neDa - prov);
      if(retunTime<=0){
        clearTimeout(timeOut);
        prov = neDa;
        result = func.apply(context,...args);
      } else if(!timeO){
        let timeout  = setTimeout(() => {
          prov = new Date();
          timeout = null;
          result = func.apply(context,...args);
        }, remaining);
      }
      return result
   }
 },  
    useName(){

    },
    passWord(){
    
    }
  }
}
</script>

<style scoped lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  background: #f1f1f1;
  h2{
  font-size: 18px;
  }
  .bg{
    width: 100% ;
    height: 100%;
    position: fixed;
    background: #eee url("../assets/image/bg.jpg") center no-repeat;
    background-size: 1200px 800px;
  }
}
.wd50{
  width: 50%;
  float: right;
}
.loginCont{
  width: 40%;
  float: right;
  margin-right: 20px;
  position: fixed;
  top: 35%;
  right: 50%;
  transform: translateX(50%);
  background: #fff;
  padding: 40px 30px;
  border-radius: 10px;
}
.login{
  width: 90%;
  margin-top: 30px;
}
</style>
