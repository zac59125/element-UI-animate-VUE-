<template>
  <div id="app">
  <!-- 头部 -->
  <el-row>
    <div class="pageHead">
      <div class="head"> 头部</div>
      <div class="frB">
<el-button type="danger" class="mp" @click="unLogin()" >退出登录</el-button>
      </div>
      
    </div>
  </el-row>
 <el-row class="mainContent">

  <div class="grid-content fl bg-purple">
   
    <bNav v-on:addNav="addTab"></bNav>
  </div>
    <div class="grid-content bg-purple-light"> 
         <div class="pan">
<div>
  <!-- <el-button
    size="small"
    @click="addTab(editableTabsValue)"
  >
    add tab
  </el-button> -->
</div>
 <el-tabs
             type="border-card"
                closable
                v-if="opTab.length"
                 @tab-click='tabClick'
                  @tab-remove='tabRemove'
                     v-model="activeIndex"
                >
                <el-tab-pane
                  :key="item.name"
                  v-for="(item, index) in opTab"
                  :label="item.name"
                  :name="item.route"
                 >
                </el-tab-pane>
              </el-tabs>
         </div>
          <div class="content-wrap">
          
              <router-view/>
         </div>
     </div>

</el-row>
  </div>
</template>

<script>
import nav from '../components/side'
export default {
  name: 'Index',
  data(){
    return{
      editableTabsValue: '1',
        editableTabs: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }, ],
        tabIndex: 1,
        opTab:[{name: "tab1",
        route: "/tab1"}],
        activeIndex:'/tab1'
      }
    },
  components:{
    'bNav':nav
  },
  created:function(){
    console.log(this.$store.state.name)
    let sessionName=window.sessionStorage.getItem("name");
    if(!sessionName){
      this.$router.push({path:"/"})
    }else{
        this.$router.push({path:"/tab1"})
    }
  },
  mounted:function(){
    
    //  this.$router.push({path:"tab1"});
     this.opTab=this.$store.state.openTab;
      this.activeIndex=this.$store.state.activeIndex;
    console.log(this.$store.state.name)
    let sessionName=window.sessionStorage.getItem("name");
    if(!sessionName){
      this.$router.push({path:"/"})
    }else{
        this.$router.push({path:"/tab1"})
    }
  },
   watch:{
    '$route'(to,from,next){
 
        //判断路由是否已经打开
        //已经打开的 ，将其置为active
        //未打开的，将其放入队列里
      
     
        let flag = false;
        for(let item of this.opTab){
      

          if(item.name === to.name){
            
            this.$store.commit('set_active_index',to.path)
           

            flag = true;
            break;
            
          }
        }
        console.log(this.opTab)
    
        this.activeIndex=to.path;
        if(!flag){    
            this.$store.commit('add_tabs', {route: to.path, name: to.name});
            this.$store.commit('set_active_index', to.path);
        }

    }   
      
  },
  methods:{
     tabClick(tab){
      this.$router.push({path: this.activeIndex});
    },
    unLogin(){


    this.$store.commit("delLogin");
     this.$store.state.openTab = [];
      this.$router.push({path:"/"})
    },
    //移除tab标签
    tabRemove(targetName){
     
      //首页不删
      if(targetName == '/'){
        return
      }
      this.$store.commit('delete_tabs', targetName);
      if (this.activeIndex === targetName) {
        // 设置当前激活的路由
        if (this.openTab && this.openTab.length >= 1) {
          console.log('=============',this.openTab[this.openTab.length-1].route)
          this.$store.commit('set_active_index', this.openTab[this.openTab.length-1].route);
          this.$router.push({path: this.activeIndex});
        } else {
          this.$router.push({path: '/'});
        }
      }
    },
    jump(params) {
      this.$router.push({path:"index"})
    },
     addTab(targetName) {
       console.log(this.$route.name)
        let newTabName = ++this.tabIndex + '';
        this.editableTabs.push({
          title: 'New Tab',
          name: newTabName,
          content: 'New Tab content'
        });
           this.$router.push({path:"tab2"})
        this.editableTabsValue = newTabName;
      },
      removeTab(targetName) {
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
        
        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
      }
    
  }
}
</script>

<style  lang="scss">
html,body{
  height: 100%;
}
.frB{
  float:right;
  margin-right: 20px;
}
.pan{
  width: 100%;
  height: 90px;
  background: #fff
}
.mp{
  margin-top: 10px;
}
.mainContent{
  height: calc(100% - 60px);
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  .fl{
    float: left;
    z-index: 99;
    height: calc(100%);
    max-width: 300px;;
    position: relative;
    background: #545c64;
  }
  .pageHead{
    width: 100%;
    height: 60px;
   background: #545c64;
    .head{
      float: left;
      color: #fff;
      line-height: 60px;
      padding:0 60px ;
    }
  }
  h2{
  font-size: 18px;
  }
}
.el-tabs--border-card>.el-tabs__content{
  padding: 0
}
</style>
