<template>
  <div class="wrap">
     <Header/>
     <div class="main">
           <div class="banner"></div>
           <div class="main_content">
                 <div class="content">
                     <p class="location">
                        <label @click="handleReturn('/systemintro')"> 系统介绍</label> <Icon type="ios-arrow-forward" /> 项目介绍
                     </p>
                    <h2>项目介绍</h2>
                    <div class="modules module1">
                          <h3>项目背景</h3>
                           <div class="intro">
                                 <p>网站依托科技部创新方法专项“基于群智理论的创新方法新系统研究与应用示范”建立，由三个子课题组成。</p>
                                <div class="person_intro">
                                    <div class="intro_box">
                                             <div class="apply">
                                           <h3>应用规范</h3>
                                           <p>基于微服务与领域知识图谱的创新方法新系统设计与构建</p>
                                     </div>
                                     <div class="theory">
                                           <h3>理论研究</h3>
                                           <p>基于群体智能的创新方法新系统理论体系研究</p>
                                     </div>
                                     <div class="case">
                                           <h3>案例建设</h3>
                                           <p>开放网络环境下的创新方法知识库建设</p>
                                     </div>
                                     <div class="theory_line">
                                           <div class="line_box">
                                                 <span>理论支撑</span>
                                                 <img src="../../assets/img/left_line.png" alt="">
                                           </div>
                                     </div>
                                     <div class="theory_line1">
                                           <div class="line_box">
                                                 <span>理论支撑</span>
                                                 <img src="../../assets/img/right_line.png" alt="">
                                           </div>
                                     </div>
                                     <div class="case_line">
                                           <div class="line_box">
                                                 <span>案例支撑</span>
                                                 <img src="../../assets/img/bottom_line.png" alt="">
                                           </div>
                                     </div>
                                    </div>
                                </div>
                               
                            </div>
                    </div>
                     <div class="modules module2">
                          <h3>项目主要研究内容</h3>
                           <div class="intro">
                                 <p style="text-indent: 2em;">为推进创新方法的持续创新，本项目面向创新方法的新系统展开研究，研究基于群体智能的创新方法新系统理论体系，将群体智能、大数据分析方法与可拓创新进行融合研究，包括群智感知驱动的知识发现、基于可拓创新理论的创新知识图谱构建以及基于创新知识图谱的智能化创新方法，形成基于群体智能的创新方法新系统理论体系；构建创新方法数据库与案例库，将开放网络环境下数据与特定领域数据进行融合研究……</p>
                               
                            </div>
                          
                    </div>
                     <div class="modules module3">
                          <h3>创新点</h3>
                           <div class="intro">
                                <div class="person_intro">
                                      <dl>
                                          <dt>
                                              <img src="../../assets/img/lilun.png" alt="">
                                                <h4>理论基础研究</h4>
                                          </dt>
                                          <dd>
                                               <p>在理论基础研究上，将群体智能、大数据分析方法与可拓创新进行融合研究。在可拓创新已有的完备理论基础上，进一步发挥群体智能与大数据分析方法的能力，形成基于群体智能的创新方法新系统理论体系，并指导相关应用系统的研发与推广应用。</p>
                                          </dd>
                                      </dl>
                                      <dl>
                                          <dt>
                                               <img src="../../assets/img/zs.png" alt="">
                                               <h4>理论基础研究</h4>
                                          </dt>
                                          <dd>
                                              
                                               <p>在知识库建设上，将开放网络环境下数据与特定领域数据进行融合研究。在构建创新方法知识库的过程中，一方面对特定领域数据进行梳理与研究，另一方面合理引入开放网络环境数据，形成高质量数据库与案例库，并对新系统进行指导与支撑。</p>
                                          </dd>
                                      </dl>
                                       <dl>
                                          <dt>
                                               <img src="../../assets/img/xt.png" alt="">
                                               <h4>理论基础研究</h4>
                                          </dt>
                                          <dd>
                                              
                                               <p>在系统设计与实现上，将领域知识图谱技术与微服务技术进行融合实现。在创新方法新系统应用开发与实现中，引入领域知识图谱技术，充分将理论基础与知识库进行整合，持续增强应用系统的能力；同时借鉴主流微服务开发技术，以提高系统的可扩展能力与灵活性。</p>
                                          </dd>
                                      </dl>
                                </div>
                               
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
import Footer from '../../components/Footer'
export default {
 name:'projectintro',
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
                    >h3{
                        font-size: 20px;
                        font-family: PingFangSC, PingFangSC-Semibold;
                        font-weight: 600;
                        text-align: left;
                        color: #17172a;
                        line-height: 28px;
                        padding-top: 30px;
                        margin-bottom: 24px;
                        &::before{
                            content: "";
                            width: 10px;
                            height: 24px;
                            background-color:#0749ca ;
                            padding-left: 5px;
                            margin-right: 16px;
                        }
                    }
                    .intro{
                        padding:0 20px;
                         padding-bottom: 30px;
                       // height: 424px;
                       // position: relative;
                        >p{
                            font-size: 14px;
                            font-family: PingFangSC, PingFangSC-Regular;
                            font-weight: 400;
                            text-align: justify;
                            color: rgba(23,23,42,0.72);
                            line-height: 24px;
                            // margin-bottom: 56px;
                        }
                      
                   
                    }
                 }
                  .module1{
                     .intro{
                        .bg{
                              background: url(../../assets/img/zky_logo1.png) no-repeat;
                              background-size: cover;
                        }
                     }
                 }
                  .module2{
                    .intro{
                       .bg{
                          background: url(../../assets/img/wx1.png) no-repeat;
                          background-size: cover;
                           width:488px;
                        height: 399px;
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        z-index: 0;
                       }
                    }
                 }
                 .module3{
                    .intro{
                       .bg{
                          background: url(../../assets/img/bh1.png) no-repeat;
                          background-size: cover;
                            width: 368px;
                        height:381px;
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        z-index: 0;
                       }
                    }
                 }
                 .module4{
                    .intro{
                       .bg{
                          background: url(../../assets/img/xx1.png) no-repeat;
                          background-size: cover;
                             width: 347px;
                        height:342px;
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        z-index: 0;
                       }
                    }
                 }

             }
         }
     }
 }
   .person_intro{
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    // padding-bottom: 30px;
    .intro_box{
        width: 534px;
        height: 210px;
        position: relative;
        .apply{
            width: 192px;
            height: 90px;
            opacity: 1;
            background: #eff5ff;
            border-radius: 8px;
            position: absolute;
            left: 0;
            bottom:0 ;
            padding: 10px 14px 15px;
            h3{
                font-size: 18px;
                font-family: Helvetica, Helvetica-Regular;
                font-weight: 400;
                text-align: center;
                color: #0749ca;
                line-height: 27px;
            }
            p{
                font-size: 12px;
                font-family: PingFangSC, PingFangSC-Medium;
                font-weight: 500;
                text-align: left;
                color: #457fef;
                line-height: 20px;
            }
        }
        .case{
            width: 192px;
            height: 90px;
            opacity: 1;
            background: #eff5ff;
            border-radius: 8px;
            position: absolute;
            right: 0;
            bottom:0 ;
            padding: 10px 14px 15px;
            h3{
                font-size: 18px;
                font-family: Helvetica, Helvetica-Regular;
                font-weight: 400;
                text-align: center;
                color: #0749ca;
                line-height: 27px;
            }
            p{
                font-size: 12px;
                font-family: PingFangSC, PingFangSC-Medium;
                font-weight: 500;
                text-align: left;
                color: #457fef;
                line-height: 20px;
            }
        }
            .theory{
            width: 192px;
            height: 90px;
            opacity: 1;
            background: #eff5ff;
            border-radius: 8px;
            position: absolute;
            left: 50%;
            top:0 ;
            margin-left: -96px;
            padding: 10px 14px 15px;
            h3{
                font-size: 18px;
                font-family: Helvetica, Helvetica-Regular;
                font-weight: 400;
                text-align: center;
                color: #0749ca;
                line-height: 27px;
            }
            p{
                font-size: 12px;
                font-family: PingFangSC, PingFangSC-Medium;
                font-weight: 500;
                text-align: left;
                color: #457fef;
                line-height: 20px;
            }
        }
        .theory_line{
            position: absolute;
            left:45px ;
            bottom:97px ;
            width: 103px;
            height: 56px;
            .line_box{
                position:relative ;
                img{
                    display: block;
                    width: 55px;
                    height: 56px;
                    position: absolute;
                    top: 0;
                    right: 0;
                }
                span{
                    font-size: 12px;
                    font-family: PingFangSC, PingFangSC-Semibold;
                    font-weight: 600;
                    text-align: left;
                    color: #ffffff;
                    line-height: 18px;
                    padding:2px 4px;
                    background: #03b6ae;
                    border-radius: 2px;
                    position: absolute;
                    left: 0;
                    top: 4px;
                }
            }
        }
        .theory_line1{
            position: absolute;
            right:45px ;
            bottom:97px ;
            width: 103px;
            height: 56px;
            .line_box{
                position:relative ;
                img{
                    display: block;
                    width: 55px;
                    height: 56px;
                    position: absolute;
                    top: 0;
                    left: 0;
                }
                span{
                    font-size: 12px;
                    font-family: PingFangSC, PingFangSC-Semibold;
                    font-weight: 600;
                    text-align: left;
                    color: #ffffff;
                    line-height: 18px;
                    padding:2px 4px;
                        border-radius: 2px;
                    background: #03b6ae;
                    position: absolute;
                    right: 0;
                    top: 4px;
                }
            }
        }
        .case_line{
            position: absolute;
            left:203px ;
            bottom:0 ;
            width: 126px;
            height: 56px;
            .line_box{
                position:relative ;
                height: 50px;
                img{
                    display: block;
                    width: 126px;
                    height: 9px;
                    position: absolute;
                    bottom:30px;
                    left: 0;
                }
                span{
                    font-size: 12px;
                    font-family: PingFangSC, PingFangSC-Semibold;
                    font-weight: 600;
                    text-align: left;
                    color: #ffffff;
                    line-height: 18px;
                    padding:2px 4px;
                        border-radius: 2px;
                    background: #03b6ae;
                    position: absolute;
                    left: 35px;
                    bottom: 0;
                }
            }
        }
    }
    dl{ 
        width: 232px;
        margin-right: 120px;
        dt{
            display: flex;
            flex-direction: column;
            align-items: center;
            img{
                display: block;
                width: 60px;
                height: 60px;
            }
            h4{
                font-size: 16px;
                font-family: PingFangSC, PingFangSC-Semibold;
                font-weight: 600;
                text-align: center;
                color: #0749ca;
                line-height: 27px;
            }
        }
        dd{
            margin-top: 23px;
            border-bottom: 4px solid #0749ca ;
            p{
                font-size: 14px;
                font-family: PingFangSC, PingFangSC-Regular;
                font-weight: 400;
                text-align: justify;
                color: #17172a;
                line-height: 24px;
                padding-bottom: 30px;
            }
          
        }
    }
    dl:last-child{
         margin-right: 0px;
    }
}
 @media (max-width:1366px){
 
  .person_intro{
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    .intro_box{
         width: 654px;
        height: 210px;
        position: relative;
        .apply{
            width: 252px;
            height: 90px;
            opacity: 1;
            background: #eff5ff;
            border-radius: 8px;
            position: absolute;
            left: 0;
            bottom:0 ;
            padding: 10px 14px 15px;
            h3{
                font-size: 18px;
                font-family: Helvetica, Helvetica-Regular;
                font-weight: 400;
                text-align: center;
                color: #0749ca;
                line-height: 27px;
            }
            p{
                font-size: 12px;
                font-family: PingFangSC, PingFangSC-Medium;
                font-weight: 500;
                text-align: left;
                color: #457fef;
                line-height: 20px;
            }
        }
        .case{
            width: 252px;
            height: 90px;
            opacity: 1;
            background: #eff5ff;
            border-radius: 8px;
            position: absolute;
            right: 0;
            bottom:0 ;
            padding: 10px 14px 15px;
            h3{
                font-size: 18px;
                font-family: Helvetica, Helvetica-Regular;
                font-weight: 400;
                text-align: center;
                color: #0749ca;
                line-height: 27px;
            }
            p{
                font-size: 12px;
                font-family: PingFangSC, PingFangSC-Medium;
                font-weight: 500;
                text-align: left;
                color: #457fef;
                line-height: 20px;
            }
        }
       .theory{
            width: 252px;
            height: 90px;
            opacity: 1;
            background: #eff5ff;
            border-radius: 8px;
            position: absolute;
            left: 50%;
            top:0 ;
            margin-left: -126px;
            padding: 10px 14px 15px;
            h3{
                font-size: 18px;
                font-family: Helvetica, Helvetica-Regular;
                font-weight: 400;
                text-align: center;
                color: #0749ca;
                line-height: 27px;
            }
            p{
                font-size: 12px;
                font-family: PingFangSC, PingFangSC-Medium;
                font-weight: 500;
                text-align: left;
                color: #457fef;
                line-height: 20px;
            }
        }
         
    .theory_line{
        position: absolute;
        left:76px;
        bottom:97px ;
        width: 103px;
        height: 56px;
        .line_box{
            position:relative ;
            img{
                display: block;
                width: 55px;
                height: 56px;
                position: absolute;
                top: 0;
                right: 0;
            }
            span{
                font-size: 12px;
                font-family: PingFangSC, PingFangSC-Semibold;
                font-weight: 600;
                text-align: left;
                color: #ffffff;
                line-height: 18px;
                padding:2px 4px;
                background: #03b6ae;
                border-radius: 2px;
                position: absolute;
                left: -15px;
                top: 4px;
            }
        }
    }
    .theory_line1{
        position: absolute;
        right:76px ;
        bottom:97px ;
        width: 103px;
        height: 56px;
        .line_box{
            position:relative ;
            img{
                display: block;
                width: 55px;
                height: 56px;
                position: absolute;
                top: 0;
                left: 0;
            }
            span{
                font-size: 12px;
                font-family: PingFangSC, PingFangSC-Semibold;
                font-weight: 600;
                text-align: left;
                color: #ffffff;
                line-height: 18px;
                padding:2px 4px;
                border-radius: 2px;
                background: #03b6ae;
                position: absolute;
                right: -15px;
                top: 4px;
            }
        }
    }
    .case_line{
        position: absolute;
        left:263px ;
        bottom:0 ;
        width: 126px;
        height: 56px;
        .line_box{
            position:relative ;
            height: 50px;
            img{
                display: block;
                width: 126px;
                height: 9px;
                position: absolute;
                bottom:30px;
                left: 0;
            }
            span{
                font-size: 12px;
                font-family: PingFangSC, PingFangSC-Semibold;
                font-weight: 600;
                text-align: left;
                color: #ffffff;
                line-height: 18px;
                padding:2px 4px;
                border-radius: 2px;
                background: #03b6ae;
                position: absolute;
                left: 30px;
                bottom: 0;
            }
        }
    }
    }     
 }
 }
</style>