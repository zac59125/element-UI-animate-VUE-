<template>
    <div>
    <div  v-loading.fullscreen.lock="fullscreenLoading">

    </div>
        <ul class=""> 
            <!-- <li><img :src="this.imgObj.common" alt=""></li>    
            <li><img :src="this.imgObj.grid" alt=""></li>  -->
            <li><el-image
      style="width:600px"
      :src="this.imgObj.large"
      fit="contain"></el-image></li> 
            <!-- <li><img :src="this.imgObj.medium" alt=""></li>  -->
        </ul>  
        <div class="content">
            <h3 class="">{{this.datae.name}}</h3>
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
    h3{
        font-size: 20px;
    }
}
</style>