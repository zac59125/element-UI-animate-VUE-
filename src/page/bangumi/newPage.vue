<template>
  <div class="animateIndex">
    <div class="title"> {{this.title}}</div>   
    <div  v-loading.fullscreen.lock="fullscreenLoading">

    </div>
    <div class="pageBoder">
        <!-- 其他连接途径 -->
        <h2 class="tipTit">友情链接：</h2>
        <div v-for="item in siteMeta" class="buttonBorder">
            <el-button type="primary" ><a :href="addId(item.urlTemplate,id)">{{item.title}}</a></el-button>
        </div>

        <!-- 主要内容 -->
        <div style="clear:both;top:20px;position:relative">
    <div class="Mainborder">
        <ul>
            <li v-for="item in nowDate" @click="jumpDetail(item.sites)">
                <img :src="item.image" alt="">
<el-tooltip class="item" effect="dark" :content="item.title" placement="bottom">
  <h3>{{item.titleTranslate['zh-Hans']?item.titleTranslate['zh-Hans'][0] :item.title   }}</h3>
    </el-tooltip>
                
                <p>类型：{{item.type}}</p>
                <span>开始时间：{{dateType(item.begin)}}</span><br/>
                <span>结束时间：{{dateType(item.end)}}</span>
               
                <a :href=addId(siteMeta[child.site].urlTemplate,child.id) v-for="child in item.sites"> 
                    {{switchDat(child)}}
                    <!-- id: {{child.id}} -->
                </a>
            </li>
        </ul>
    </div>

    <el-pagination
      @current-change="showDate"
      background
      :page-size="pz"
      layout="prev, pager, next, jumper"
      :total="IndexDate.length">
    </el-pagination>
        </div>

    </div>   
 </div>
</template>

<script>
import api from "../../assets/js/api"
// import data1 from 'anime-sachedule-search-data'
export default {
    name: 'apiPage',
    data(){
        return{
            title:"调试接口页面",
            weekDate:api.calendar,
            IndexDate:api.items,
            siteMeta:api.siteMeta,
            otherUrl:[],
            pz:20,
            id:"",
            nowDate:[],
            fullscreenLoading:true        
            }
    },
    methods:{
    showDate(val){
               this.fullscreenLoading=true;
      setTimeout(()=>{this.fullscreenLoading=false},1200)
            var max=val*this.pz;
            var min=max-this.pz;
            this.nowDate=this.IndexDate.slice(min,max);
         
        },
        addId(font,id){
           return font.replace("{{id}}",id);
        },
    openFullScreen1(){
      this.fullscreenLoading=true;
      setTimeout(()=>{this.fullscreenLoading=false},2200)
    },
    dateType(time){
        if(time){
    let tim=time.split("-");
        tim[0]+="年";
        tim[1]+="月";
        tim=tim.join("");
        tim=tim.replace("T","日");
        tim=tim.split(".");
        
        return tim[0]
    }else{
        return "暂未定"
    }
    
    },
          detaile(ide) {
         
           this.$axios.get('https://cdn.jsdelivr.net/npm/anime-sachedule-search-data@0.1/dist/subject/'+ide+'.json').then(response => {
	          console.log(response.data)
              this.datae = response.data;
              this.imgObj=this.datae.images;
              console.log(this.datae)
              this.fullscreenLoading=false;
              
	        },
	        response => {
	          console.log('error')
	        })
        
        },
    switchDat(data){
        if(data){      
        let site=data.site;
        switch (site)
        {
            case "bangumi":
                site="番组计划"
            break;
            case "iqiyi":
                site="爱奇艺"
            break;
            case "nicovideo":
                site="Nico Nico"
            break;
            case "pptv":
                site="PPTV"
            break;
            case "bilibili":
                site="哔哩哔哩"
            break;
            case "qq":
                site="腾讯视频"
            break;
             case "letv":
                site="乐视TV"
            break;
              case "sohu":
                site="搜狐"
            break;
              case "mgtv":
                site="芒果TV"
            break;
               case "acfun":
                site="AcFun"
            break;
                 case "acfun":
                site="优酷"
            break;
        }
        return site;
        }
      },
      jumpDetail(arr){
         for(let item in arr){
               
             if(arr[item].site=="bangumi"){
                 var id= arr[item].id;
  
             }
         }

        
        this.$router.push({"path":"/demo/bangumiDetail",query:{"userId":id}})
      }
    },
    created:function(){
        //本周数据
        this.weekDate=api.data.calendar;
        //主页数据
        this.IndexDate=api.data.items;
        //其他地址
        this.siteMeta=api.data.siteMeta
        this.nowDate= this.IndexDate.slice(0,20);
        for(let i in this.siteMeta){
           this.otherUrl.push(this.siteMeta[i])
        }

        this.fullscreenLoading=false
    }
}
</script>

<style lang="scss" scoped>
    .animateIndex{
        width: 100%;
        height: 100%;
    }
    .title{
        font-size: 20px;
        margin-bottom: 10px;
        margin-top: 20px;
    }
    .tipTit{
        font-size: 18px;;
        text-align: left;
        margin-left: 10px;
    }
    .buttonBorder{
        float: left;
        margin: 5px 10px;
        a{
            color: #fff;
        }
    }
    .Mainborder{
        margin-bottom: 5px;
        ul{
            overflow: hidden;
            column-count: 6;
             column-gap: 20px;
             width: 100%;
             padding: 0 40px;
             box-sizing: border-box;
            li{
               background: #e3ffe9;
               border-radius: 5px;
        margin-bottom: 20px;
   -webkit-column-break-inside: auto;
      break-inside: avoid-column;
      counter-increment: item-counter;
        padding:  10px 20px;
                h3{
                    font-size: 18px;
                    white-space: nowrap;
                    width: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                img{
                    width: 50px;
                    margin: 0 auto;
                }
                a{
                    display: block;
                }
                span{
                    color: #999;
                    font-size: 13px;
                }
            }
        }
    }
</style>