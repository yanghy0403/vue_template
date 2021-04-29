<template>
  <div class="wrap">
     <Header/>
     <div class="main">
           <div class="banner"></div>
           <div class="main_content">
                 <div class="content">
                    <h2>系统介绍</h2>
                    <div class="modules">
                          <h3>网站由中国科学院计算机网络信息中心研发，中国科学院文献情报中心、北京航空航天大学协同开发及提供相应智力支持</h3>
                           <div class="step">
                                <div class="step_item step_item1" @click="handleRouter('/teamintro')">
                                    <div class="info">
                                    <p>团队介绍</p>
                                    <p><Icon type="ios-arrow-down" /></p>
                                    </div>
                                </div>
                                <div class="step_item step_item2" @click="handleRouter('/projectintro')">
                                    <div class="info">
                                    <p>项目介绍</p>
                                    <p><Icon type="ios-arrow-down" /></p>
                                    </div>
                                </div>
                                <div class="step_item step_item3" @click="handleRouter('/systemframework')">
                                    <div class="info">
                                    <p>系统框架</p>
                                    <p><Icon type="ios-arrow-down" /></p>
                                    </div>
                                </div>
                                <!-- <div class="step_item step_item4">
                                    <div class="info">
                                    <p>智科研</p>
                                    <p><Icon type="ios-arrow-down" /></p>
                                    </div>
                                </div> -->
                            </div>
                    </div>
                 </div>
                   <Footer/>
           </div>
     </div>
   
  </div>
</template>

<script>
import Header from "../../components/Header";
import Footer from '../../components/Footer'
export default {
 name:'systemintro',
 components:{Header,Footer},
 methods:{
    handleRouter(path){
        this.$router.push(path);
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
                 .modules{
                    width: 1300px;
                    height: 603px;
                    opacity: 1;
                    background: #ffffff;
                    border-radius: 8px;
                    box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.09); 
                    >h3{
                        font-size: 20px;
                        font-family: PingFangSC, PingFangSC-Semibold;
                        font-weight: 600;
                        text-align: left;
                        color: #17172a;
                        line-height: 28px;
                        padding-top: 30px;
                        margin-bottom: 80px;
                        &::before{
                            content: "";
                            width: 10px;
                            height: 24px;
                            background-color:#0749ca ;
                            padding-left: 5px;
                            margin-right: 16px;
                        }
                    }
                      .step {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            .step_item {
                                width: 318px;
                                height: 384px;
                                position: relative;
                                margin-right: 64px;
                                cursor: pointer;
                                .info {
                                position: absolute;
                                left: 0;
                                bottom: 12px;
                                width: 318px;
                                > P {
                                    text-align: center;
                                    color: #fff;
                                    font-size: 36px;
                                    font-family: Helvetica, Helvetica-Regular;
                                    font-weight: 400;
                                    i {
                                    color: #fff;
                                    font-size: 36px;
                                    }
                                }
                                }
                            }
                            .step_item1 {
                                background: url(../../assets/img/step1.png) no-repeat;
                                background-size: cover;
                            }
                            .step_item2 {
                                background: url(../../assets/img/step2.png) no-repeat;
                                background-size: cover;
                            }
                            .step_item3 {
                                background: url(../../assets/img/step3.png) no-repeat;
                                background-size: cover;
                            }
                            .step_item4 {
                                background: url(../../assets/img/step4.png) no-repeat;
                                background-size: cover;
                            }
                            }
                 }

             }
         }
     }
 }
</style>