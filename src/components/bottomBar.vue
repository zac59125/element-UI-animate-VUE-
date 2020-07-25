<template lang="html">
  <nav>
    <ul class="has-subcribe">
      <li>
        <router-link :to="{ name: 'tab1'  }" class="nav" active-class="active">
          <i class="iconfont icon-home"></i>
          <!-- <i class="iconfont icon-home "></i> -->
          <p>首页</p>
        </router-link>
      </li>
      <li >
        <router-link :to="{ name: 'tab2'  }" class="nav" active-class="active">

          <i class="iconfont icon-viewgallery"></i>
          <!-- <i class="iconfont icon-icon_dates_selected"></i> -->
          <p>然后页</p>
        </router-link>
      </li>
      <li @click="click">
        <router-link :to="{ name: 'tab3'  }" class="nav" active-class="active">
          <i class="iconfont icon-gerenzhongxin"></i>
          <!-- <i class="iconfont icon-icon_my_selected"></i> -->
          <p>然后然后页</p>
        </router-link>
      </li>
    </ul>
  </nav>
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
    click(){
      console.log("到个人页");
      let params={
        pageUrl:"/profile",
        operatetype:"3",
        node:""
      }
      //this.saveUserLog(params);
    }
  },
};
  /* eslint-disable */
</script>

<style >

nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: white;
  text-align: center;
  z-index: 998;
  box-shadow: 0 0px 4px rgba(0 ,0,0,.2);
}
.active{
    background:#ddd;
    color:#333;
}
ul {
  overflow: hidden;
  list-style: none;
}
li {
    float: left;
    width: 50%;  }
ul.has-subcribe {
  overflow: hidden;

}
li {
  float: left;
  width: 33.333%;

}
  p {
    font-size: 10px;
  }
a.nav {
  display: flex;
  height: 13.066vw;
  flex-direction: column;
  justify-content: center;
  transition: color .3s ease;

  }
  .iconfont {
    font-size: 10px;
    margin-bottom: 0px;
  }


</style>
