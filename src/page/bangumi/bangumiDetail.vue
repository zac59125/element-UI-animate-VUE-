<template>
    <div>
    <div  v-loading.fullscreen.lock="fullscreenLoading"> </div>
        <ul class=""> 
            <!-- <li><img :src="this.imgObj.common" alt=""></li>    
            <li><img :src="this.imgObj.grid" alt=""></li>  -->
            <li><el-image
      style="width:600px;height:800px"
      :src="this.imgObj.large"
      fit="contain"></el-image></li> 
            <!-- <li><img :src="this.imgObj.medium" alt=""></li>  -->
        </ul>  
        <div class="content">
            <h3 class=""><a :href="this.datae.url">{{this.datae.name}}(译:{{this.datae.name_cn}})</a></h3>
            
            <p class="jj">简介：{{this.datae.summary}}</p>
            <h2 class="staff">主要人物</h2>
            <div  v-for="item in this.datae.crt" class="normalList2 normalList">
                <div class="mainCenter">
                    <div class="cenCon">
                <span class="left2"><el-image style="width:50px;height:50px" :src="item.images.small"></el-image></span>
                <span><a :href="item.url">{{item.name}}(译){{item.name_cn}}</a></span>      
                </div>
                </div>
                <div class="cvBorder">
               <div  v-for="item  in item.actors" class="cv">
                     <div class="cenCon">
                <span>声优：</span>
                
               <span class="m10"><el-image fit="contain" style="width:50px;height:50px" :src="item.images.small"></el-image></span>

              <span><a :href="item.url">{{item.name}}</a></span>
                     </div>
                     </div>
               </div> 
            </div>
   
            <h2 class="staff">Stafff表</h2>
            <div class="normalList" v-for="item in this.datae.staff">
                <h2 class="name">{{item.name}}(译:{{item.name_cn}})</h2>
                <p class="cont">负责内容: <span v-for="item in item.jobs">
                    {{item}}
                </span></p>
              
            </div>
        </div>
    </div>
</template>

<script>

export default {

    name:"bgmDet",
    data(){
        return{
           id : 70326,
           data : "",
           imgObj:{
               common:"",
               grid:"",
               large:"",
               medium:"",
           },
           datae:{},
           fullscreenLoading:true
        }
    },
   created:function(){
       let id=this.$route.query.userId;
     this.detaile(id);
  
    },

    methods:{
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
    },
  
}
</script>

<style lang="scss">
.content{
    width: 100%;
    box-sizing: border-box;
    padding: 10px 15px;
    border:1px solid #ddd;
    background: #eee;
    .m10{
        margin-right: 10px;
    }
    h3{
        font-size: 20px;
        text-align: center;
    }
    .jj{
        width: 100%;
        padding: 0 20px;
        box-sizing: border-box;
        margin: 10px 0;
    }
    h2{
        font-size: 18px;
        text-align: left;
        padding-left: 20px;
        box-sizing: border-box;
    }
    p{
        text-align: left;
    }
    .mainCenter{
        margin-right: 30px;
 width: 20%;
           text-align: left;
    }
    .cenCon{
        margin-bottom: 5px;
        display: flex;
        justify-content: left;
        align-items: center;
    }
    .cvBorder{
        width: calc(80% - 30px);
        text-align: left;
    }
    .cv{

    }
    .staff{
        text-align: center;
        margin-bottom: 20px;

    }
    .name{
        float: left;
        text-align: center;
    }
    .con{
        float: left;
    }
    .normalList2{
        text-align: center;
        display: flex;
        justify-content: left;
        align-items: center;
        img{
            margin-right: 20px;
        }
        .left2{
            margin:10px 20px;
        }
    }
    .normalList{
        clear: both;
        margin-bottom: 10px;
        margin-top: 10px;
        border-bottom: 1px dashed #ddd;
        overflow: hidden;
        padding-bottom:10px ;
        width: 100%;
        box-sizing: border-box;
        padding: 0 20px;
        padding-bottom: 10px;
        h2{
            font-size: 16px;
            width: 20%;
        }
    
        p{
            font-size: 16px;
            width: 80%;
            float: left;
        
            text-align: left;
            padding-left: 30px;
            box-sizing: border-box;
        }
    }
}
</style>