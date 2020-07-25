<template>
      <el-menu
        :default-active="$route.path"
        class="slider"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
        >
        <el-menu-item index="/tab1" >
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        
        <el-submenu v-for="(item,index) in menuList" :key="index" :index='item.id'>
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{item.title}}</span>
          </template>
          <el-menu-item-group >
            <el-menu-item v-for="child in item.children" :key="child.id" :index='child.index'>{{child.childtitle}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
</template>

<script>
  /* eslint-disable */
//import Icon from '../components/Icon';
//import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  name: 'bottom-nav',
  data() {
    return {
      blah: '/course',
      isCollapse:true,
      editableTabs:[],
        menuList:[
        {
          id:'1',
          title: '导航1',
          icon:'el-icon-location',
          children:[
            {
              index:'/tab2',
              childtitle:'导航1page1'
            },
            {
              index:'/tab3',
              childtitle:'导航1page2'
            },
          ]
        },
        {
          id:'2',
          title: '导航2',
          icon:'el-icon-location',
          children:[
            {
              index:'/tab3',
              childtitle:'导航2page3'
            },
            {
              index:'/tab3',
              childtitle:'导航2page4'
            },
          ]
         }
      ]
    };
  },
  components: {
    
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    // ...mapActions([
    //   'updateQrCodeIsShow',
    //   'saveUserLog',
    // ]),
    showFocus(){
        this.updateQrCodeIsShow(true);
    },
      addTab(targetName) {
        let newTabName = ++this.tabIndex + '';
        this.editableTabs.push({
          title: 'New Tab',
          name: newTabName,
          content: 'New Tab content'
        });
        this.editableTabsValue = newTabName;
      },
        handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      addNav(con){
     
          let flag = con;
          this.$emit('addNav',con);
          
      }
  },
};
  /* eslint-disable */
</script>

<style >

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 298px;
    height: 100%;
  }
.el-menu{
  width: 100%
}
</style>
