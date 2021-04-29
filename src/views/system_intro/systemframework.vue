<template>
  <div class="wrap">
     <Header/>
     <div class="main">
           <div class="banner"></div>
           <div class="main_content">
                 <div class="content">
                     <p class="location">
                         <label @click="handleReturn('/systemintro')">系统介绍</label><Icon type="ios-arrow-forward" /> 系统框架
                     </p>
                    <h2>系统框架</h2>
                    <div class="modules ">
                         <img src="../../assets/img/系统框架图.png" alt="">
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
import Footer from '../../components/Footer'
export default {
 name:'systemframework',
 components:{Header,Footer},
 methods:{
      //返回系统介绍上一页
    handleReturn(path){
          this.$router.push(path)
    }
 },
 mounted(){
    
     //设置内容区域高度
      document.querySelector('.main').style.height = document.querySelector('.main_content').clientHeight + 'px';
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
             background: url(../../assets/img/sy_banner.png) no-repeat;
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
                 .location{
                     font-size: 12px;
                        font-family: PingFangSC, PingFangSC-Regular;
                        font-weight: 400;
                        text-align: left;
                        color: #ffffff;
                        line-height: 17px;
                        letter-spacing: 1px;
                        margin-top: 40px;
                        span{
                            padding: 0 10px;
                        }
                  }
                 h2{
                      font-size: 40px;
                        font-family: PingFangSC, PingFangSC-Semibold;
                        font-weight: 600;
                        text-align: left;
                        color: #ffffff;
                        line-height: 50px;
                        margin-top: 30px;
                        margin-bottom: 60px;
                 }
                 .modules{
                    width: 100%;
                    // height: 603px;
                    opacity: 1;
                    background: #ffffff;
                    border-radius: 8px;
                    box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.09); 
                    margin-bottom: 24px;
                   display: flex;
                   justify-content: center;
                   align-content: center;
                 }
                

             }
         }
     }
 }
</style>