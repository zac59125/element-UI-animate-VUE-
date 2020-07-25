import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//创建VueX对象
const store = new Vuex.Store({
    state:{
        //存放的键值对就是所要管理的状态
        name:'',
        passWord:"",
        age:"",
        openTab:[],
        activeIndex:"/index"
    }
    ,mutations:{
    
        changeLogin(state,data){
         
            state.name=data.name;
            state.passWord=data.passWord;
            window.sessionStorage.setItem("name",data.name);
        },
        add_tabs (state, data) {
            console.log(data);
            if(data.name=="登录"){
              return false
            }else{
              this.state.openTab.push(data);
            }
    
            console.log(this.state.openTab)
          },
          // 删除tabs
        delete_tabs (state, route) {
            let index = 0;
            for (let option of state.openTab) {
              if (option.route === route) {
                break;
              }
              index++;
            }
            this.state.openTab.splice(index, 1);
          },
          // 设置当前激活的tab
          set_active_index (state, index) {
            if(index=="/index"||index=="/"){
              return false
            }else{
              console.log("active"+index)
              this.state.activeIndex = index; 
            }
       
          },
          delLogin(state,data){
            state.name = "";
            state.passWord = "";
            window.sessionStorage.removeItem("name")
          }

    },
    getters:{
        nameInfo(state){
            return "获得后的姓名"+state.name
        },
        namefull(state,getters){
            return getters.nameInfo+"年龄"+state.age
        }
    },
    actions:{
        aChangeName(context,data){
            setTimeout(() => {
                context.commit('changeName',data)
                console.log(this.state.age+this.state.name)
            }, 2000);
        }
    }
})

export default store