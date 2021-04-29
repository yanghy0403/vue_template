<template>
   <div class="wrap">
         <Header/>
        <div class="main">
              <div class="banner"></div>
              <div class="main_content">
                 
                    <div class="content">
                    <h2>友情链接</h2>
                    <div class="links">
                        <div class="zky">
                            <h3>慧科研</h3>
                            <p>http://www.baidu.com</p>
                            <div class="fade_in">
                                  进入网页
                            </div>
                        </div>
                        <div>
                            <h3>重庆创新方法网</h3>
                            <p>http://www.baidu.com</p>
                             <div class="fade_in">
                                  进入网页
                            </div>
                             <div class="fade_in">
                                  进入网页
                            </div>
                        </div>
                        <div>
                            <h3>triz-journal</h3>
                            <p>http://www.baidu.com</p>
                             <div class="fade_in">
                                  进入网页
                            </div>
                        </div>
                        <div>
                            <h3>四川大学创新方法与创 新设计重点实验室网站</h3>
                            <p>http://www.baidu.com</p>
                             <div class="fade_in">
                                  进入网页
                            </div>
                        </div>
                        <div>
                            <h3>河北创新方法网</h3>
                            <p>http://www.baidu.com</p>
                             <div class="fade_in">
                                  进入网页
                            </div>
                        </div>
                        <div>
                            <h3>河南省创新方法网</h3>
                            <p>http://www.baidu.com</p>
                             <div class="fade_in">
                                  进入网页
                            </div>
                        </div>
                        <div>
                            <h3>陕西创新方法网</h3>
                            <p>http://www.baidu.com</p>
                             <div class="fade_in">
                                  进入网页
                            </div>
                        </div>
                        <div>
                            <h3>青海省创新方法网</h3>
                            <p>http://www.baidu.com</p>
                             <div class="fade_in">
                                  进入网页
                            </div>
                        </div>
                        <div>
                            <h3>湖北省创新方法 推广服务网</h3>
                            <p>http://www.baidu.com</p>
                             <div class="fade_in">
                                  进入网页
                            </div>
                        </div>
                    </div>
                    </div>
                
                   <Footer/>
                 
              </div>
             
         </div>
      
   </div>
</template>

<script>
import Header from "../components/Header";
import Footer from '../components/Footer'

export default {
 name:'links',
 components: { Header,Footer },
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
      height: 1008px;
      overflow: hidden;
       background: #f3f4f9;
       .banner{
           height: 320px;
           background: url(../assets/img/link_banner.png) no-repeat;
           background-size: cover;
       
       }
       .main_content{
           position: absolute;
           left: 0;
           top: 0;
           width: 100%;
           z-index: 0;
         
         
           .content{
               width: 68%;
               margin: 0 auto;
                 margin-bottom: 164px;
               h2{
                   font-size: 40px;
                    font-family: PingFangSC, PingFangSC-Semibold;
                    font-weight: 600;
                    text-align: left;
                    color: #ffffff;
                    line-height: 50px;
                    margin-top: 87px;
                    margin-bottom: 60px;
               }
               .links{
                   display: flex;
                   flex-wrap: wrap;
                   >div{
                       width: 252px;
                       height: 260px;
                       display: flex;
                       justify-content: center;
                       align-items: center;
                       flex-direction: column;
                       background: url(../assets/img/link2.png) no-repeat;
                       background-size: cover;
                       margin-right: 10px;
                       margin-bottom:20px ;
                       background-color: #fff;
                       border-radius: 8px;
                       box-shadow: 0px 10px 14px 0px rgba(181,189,202,0.20); 
                       position: relative;
                       h3{
                           font-size: 20px;
                            font-family: PingFangSC, PingFangSC-Medium;
                            font-weight: 500;
                            text-align: left;
                            color: #000000;
                            line-height: 27px;
                            width: 70%;
                            text-align: center;
                            margin-bottom: 20px;
                       }
                       p{
                           font-size: 12px;
                            font-family: PingFangSC, PingFangSC-Regular;
                            font-weight: 400;
                            text-align: center;
                            color: #a0a0a2;
                            line-height: 16px;
                       }
                       .fade_in{
                           position: absolute;
                           left: 0;
                           bottom: 0;
                           width: 100%;
                           height:60px ;
                           z-index: 10;
                         
                           background: #1261e5;
                           color: #fff;
                           font-size: 18px;
                            font-family: PingFangSC, PingFangSC-Regular;
                            font-weight: 400;
                            border-bottom-left-radius: 8px;
                            border-bottom-right-radius: 8px;
                            display: none;
                       }
                   }
                   >div:hover{
                       cursor: pointer;
                       .fade_in{
                           display: block;
                            display: flex;
                           justify-content: center;
                          align-items: center;
                       }
                   }
                   >div:nth-child(9){
                       margin-right: 0;
                       h3{
                           font-size: 20px;
                       }
                   }
                     >div:nth-child(4){
                       margin-right: 0;
                       h3{
                           font-size: 16px;
                       }
                   }
                   .zky{
                        background: url(../assets/img/link1.png) no-repeat;
                       background-size: cover;
                       width:514px ;
                       align-items: flex-start;
                       h3,p{
                           margin-left: 70px;
                           text-align: left;
                       }
                   }
               }
           }
       }
   }
}
</style>