<template>
  <div class="wrap">
     <Header/>
     <div class="main">
           <div class="banner"></div>
           <div class="main_content">
                 <div class="content">
                    
                    <h2>工具库</h2>
                    <div class="modules" >
                         <div class="slider">
                               <div class="submenu">
                                   <h3>开发工具</h3>
                                   <ul>
                                       <li :class="pathName=='/toollibrary/integration'?'active':''" @click="handleRouter('/toollibrary/integration')"><span>集成PiFlow</span></li>
                                       <li :class="pathName=='/toollibrary/cloudplatform'?'active':''" @click="handleRouter('/toollibrary/cloudplatform')"><span>云平台</span></li>
                                   </ul>
                               </div>
                               <div class="submenu">
                                     <h3>知识工具</h3>
                                   <ul> 
                                       <li :class="pathName=='/toollibrary/knowledge_search'?'active':''" @click="handleRouter('/toollibrary/knowledge_search')"><span>知识检索</span></li>
                                       <li :class="pathName=='/toollibrary/business_card'?'active':''" @click="handleRouter('/toollibrary/business_card')"><span>学术名片</span></li>
                                       <li :class="pathName=='/toollibrary/innova_commun'?'active':''" @click="handleRouter('/toollibrary/innova_commun')"><span>创新社区</span></li>
                                       <li :class="pathName=='/toollibrary/semantic_mining'?'active':''" @click="handleRouter('/toollibrary/semantic_mining')"><span>语义挖掘</span></li>
                                       <li :class="pathName=='/toollibrary/topic_selection'?'active':''" @click="handleRouter('/toollibrary/topic_selection')"><span>智能选题工具</span></li>
                                       <li :class="pathName=='/toollibrary/intelligent_eval'?'active':''" @click="handleRouter('/toollibrary/intelligent_eval')"><span>智能评估</span></li>
                                       <li :class="pathName=='/toollibrary/knowledge_push'?'active':''" @click="handleRouter('/toollibrary/knowledge_push')"><span>知识推送</span></li>
                                      
                                   </ul>
                               </div>
                         </div>
                         <div class="public_view">
                              <router-view></router-view>
                         </div>
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
 name:'toollibrary',
 components:{Header,Footer,},
 data(){
    return{
       content:{
           title:'',
           body:''
       },
        id:'',
       pathName:'',//当前访问路径
    }
 },


 methods:{
    handleRouter(path){
         this.pathName = path;
        this.$router.push(path);
    }
 },
 mounted(){
    
     //设置内容区域高度
      document.querySelector('.main').style.height = document.querySelector('.main_content').clientHeight + 'px';
      if(this.$route.query.id){
          this.id = this.$router.query.id;
      }
      this.pathName = window.location.pathname;
     
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
   // background: #ffffff;
    border-radius: 8px;
  //  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.09); 
    margin-bottom: 24px;
    display: flex;
    .slider{
         .submenu{
             width: 160px;
             h3{
                 height: 40px;
                 line-height: 40px;
                background: #0749ca;
                font-size: 14px;
                font-family: PingFangSC, PingFangSC-Medium;
                font-weight: 500;
                color: #fff;
                padding-left: 20px;
             }
             ul{
                 li{
                   
                    background: #83A4E4;
                    height: 40px;
                    line-height: 40px;
                    font-size: 14px;
                    font-family: PingFangSC, PingFangSC-Regular;
                    font-weight: 400;
                    text-align: left;
                    color: #ffffff;
                    span{
                         padding-left: 20px;
                         display: inline-block;
                         line-height: 40px;
                    }
                     &:hover{
                          background: #ffffff;
                         color: #232930;
                         cursor: pointer;
                     }
                 }
                 li.active{
                     background: #ffffff;
                     color: #232930;
                     span{
                         padding-left: 16px;
                     }
                     &::before{
                         content: '';
                         width:4px ;
                         height: 28px;
                         background: #03b6ae;
                        border-radius: 4px;
                        box-shadow: 0px 2px 4px 0px #dceeff; 
                        padding: 4px 0;
                        padding-left: 4px;
                     }
                 }
             }
         }
    }
    .public_view{
        flex-grow: 1;
        background-color: #fff;
        border-bottom-right-radius: 5px;
         border-top-right-radius: 5px;
        border-bottom-left-radius: 5px;
    }
     
    
    
    }

</style>