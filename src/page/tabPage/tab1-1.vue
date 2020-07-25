<template>
<div class="firstBorder" @click="confirm"> 
<h4 >子标题</h4>  
  <el-tabs v-model="activeName" :stretch="tur" @tab-click="handleClick">
    <el-tab-pane label="按钮" name="first" @click="confirm">
      <bDemo></bDemo>
    </el-tab-pane>
    <el-tab-pane label="日期选择" name="second" @click="confirm">
      <dModal></dModal>
    </el-tab-pane>
    <el-tab-pane label="表格" name="third">
      <table1></table1>

    </el-tab-pane>
    <el-tab-pane label="用户管理4" name="fourth">用户管理</el-tab-pane>
  </el-tabs>

</div>   
</template>
<script>
import buttonDemo from "../../components/buttonGroup"
import dateDemo from "../../components/dateModal"
import nav1 from '../../components/bottomBar'
import table1 from '../../components/tableVue'
  export default {
    name:'tab1',
    data() {
      return {
           tur:true,
           activeName: 'second'
      };
    },
    mounted(){
            //  this.$store.commit("changeName",{name:"你爸爸",age:"18"})
            
    },
    methods: {
      handleClick(tab, event) {
    
      },
      confirm(){
        
        //  this.$store.commit("changeName",{name:"你爸爸",age:"18"})
        // this.$store.dispatch("aChangeName",{name:"你爸爸2号",age:"23"})
      }
    }, 
    components:{
    'bDemo':buttonDemo,
    'dModal':dateDemo,
    'bNav':nav1,
    'table1':table1
    }
 
  };
</script>
<style scoped lang="scss">
  .button{
         margin-bottom:14px;
       }
    .firstBorder{
       padding:5px;
       h4{
         color:#f10000;
         font-size: 15px;
       }

    }
</style>   