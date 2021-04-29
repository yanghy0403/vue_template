<template>
  <div class="wrap">
     <Header/>
     <div class="main">
           <div class="banner"></div>
           <div class="main_content">
                 <div class="content">
                      <p class="location">
                        <label @click="handleReturn('/puttedforward')"> 案例库</label> <Icon type="ios-arrow-forward" /> 案例搜索 <Icon type="ios-arrow-forward" />案例详情
                     </p>
                    <h2>{{content.title}}</h2>
                    <div class="modules" v-html="content.body">
                         {{content.body}}
                    </div>
                     
                   
                 </div>
                   <Footer/>
           </div>
     </div>
    <BackTop></BackTop>
  </div>
</template>

<script>
import Header from "../../components/Header";
import Footer from '../../components/Footer';

export default {
 name:'putted_detail',
 components:{Header,Footer,},
 data(){
    return{
       content:{
           title:'',
           body:''
       },
        id:'',
       
    }
 },


 methods:{
    handleRouter(path){
        this.$router.push(path);
    }
 },
 mounted(){
    
     //设置内容区域高度
      document.querySelector('.main').style.height = document.querySelector('.main_content').clientHeight + 'px';
      if(this.$route.query.id){
          this.id = this.$router.query.id;
      }
 }
}
</script>

<style lang="scss" scoped>
 .wrap{
     background: #f3f4f9;
     .main{
         position: relative;
         background: #f3f4f9;
         .banner{
             height: 320px;
             background: url(../../assets/img/learn_center.png) no-repeat;
             background-size: cover;
         }
         .main_content{
             position: absolute;
             left: 0;
             top: 0;
             width: 100%;
             .content{
                 width: 68%;
                 margin: 0 auto;
                 margin-bottom: 100px;
                >h2{
                      font-size: 40px;
                        font-family: PingFangSC, PingFangSC-Semibold;
                        font-weight: 600;
                        text-align: left;
                        color: #ffffff;
                        line-height: 50px;
                        margin-top: 87px;
                        margin-bottom: 60px;
                 }
               

             }
         }
     }
 }
.modules{
    width: 100%;
  
    opacity: 1;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.09); 
    margin-bottom: 24px;
        >h3{
            font-size: 20px;
            font-family: PingFangSC, PingFangSC-Semibold;
            font-weight: 600;
            text-align: left;
            color: #17172a;
            line-height: 28px;
            padding-top: 30px;
            // margin-bottom: 80px;
            &::before{
                content: "";
                width: 10px;
                height: 24px;
                background-color:#0749ca ;
                padding-left: 5px;
                margin-right: 16px;
            }
        }
      img{
          display: block;
          margin: 0 auto;
      }
     
    
    
    }

</style>