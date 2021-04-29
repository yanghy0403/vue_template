<template>
  <div class="wrap">
     <Header/>
     <div class="main">
           <div class="banner"></div>
           <div class="main_content">
                 <div class="content">
                     <p class="location">
                        <label @click="handleReturn('/systemintro')"> 系统介绍</label> <Icon type="ios-arrow-forward" /> 团队介绍
                     </p>
                    <h2>团队介绍</h2>
                    <div class="modules module1">
                          <h3>中国科学院计算机网络信息中心</h3>
                           <div class="intro">
                                 <p>项目牵头申报单位中国科学院计算机网络信息中心中心是中国互联网的诞生地，是国家发改委大数据分析与计算技术国家地方联合工程实验室、大数据应用服务技术北京市工程实验室依托单位，单位拥有万兆级国际出口带宽的先进科研服务网络（中国科技网）、超过30P聚合计算能力的超级计算环境和52PB以上分布式云环境等基础设施。运行和管理我国最早的互联网骨干网之一的中国科技网（CSTNET），是国际学术网络的重要成员，与国内各互联网骨干网和欧美主要学术网络高速互联，承担着国家下一代互联网示范工程任务。近五年承担的相关项目包括国家发改委促进大数据重大工程项目“科学大数据公共服务平台与创新应用示范”、国家自然科学基金委重点项目“面向领域大数据的知识图谱构建”、科技部国家重点研发计划项目“科学大数据管理系统”、工信部工业互联网创新发展工程项目“工业互联网标识解析公共服务支撑平台项目”、中科院“十三五”信息化专项“科学大数据工程”和“智慧中科院工程”、行业专项“气象水文大数据分析系统”、中国烟草总公司“烟草科研大数据”等。</p>
                                <div class="person_intro">
                                      <dl>
                                          <dt>
                                              <img src="../../assets/img/zyc.png" alt="">
                                          </dt>
                                          <dd>
                                                <h4>周园春</h4>
                                                <p>博士，研究员，博士生导师，现任中国科学院计算机网络信息中心副主任、学位评定委员会主席，大数据技术与应用发展部主任</p>
                                          </dd>
                                      </dl>
                                      <dl>
                                          <dt>
                                               <img src="../../assets/img/dy.png" alt="">
                                          </dt>
                                          <dd>
                                               <h4>杜一</h4>
                                               <p>博士，副研究员，硕士生导师，任中国科学院计算机网络信息中心大数据知识工程实验室主任，中国科学院青年促进会会员，CCF高级会员，北京市科技新星</p>
                                          </dd>
                                      </dl>
                                </div>
                                <div class="bg"></div>
                            </div>
                    </div>
                     <div class="modules module2">
                          <h3>中国科学院文献情报中心</h3>
                           <div class="intro">
                                 <p>中国科学院文献情报中心，隶属于中国科学院，为相关科研单位和团体提供文献情报服务的专业机构。主要面向科研项目和科研团队提供文献信息服务；面向科研战略与规划、科研计划与管理、科研机构管理开展管理与政策的文献情报服务。面向区域发展、产业发展的战略情报需求，开展情报服务；利用中科院的优势资源带动地方科学院的科技创新能力的提升，提高地方科学院的文献情报服务水平；同时，整合中科院内外的各种优势资源，探索面向市场需求的文献情报服务模式和产品体系，围绕产业技术研发活动，为企业和科研机构提供文献情报服务，提供支撑企业战略的文献情报服务。建立了以18家省科院、中科院6家成果转移转化中心、以及高新技术园区和部分地方科技情报机构等为节点的区域信息服务网络。通过服务实践，逐步形成面向省科院、政府园区、产业企业以及投融资的服务嵌入机制、责任馆员机制、联盟分会机制、年度调研机制、平台共享机制等保障机制；通过用户培训、宣传推广、文献服务、情报调研、产业情报、行业监测等服务实践，满足不同用户的多样化、多层次的需求，逐步形成面向省科院、政府园区、产业企业以及投融资等的区域创新发展的文献情报服务体系。</p>
                                <div class="person_intro">
                                      <dl>
                                          <dt>
                                              <img src="../../assets/img/ql.png" alt="">
                                          </dt>
                                          <dd>
                                                <h4>钱力</h4>
                                                <p>副研究馆员，硕士生导师，现任中国科学院文献情报中心信息系统部主任，中科院青促会会员</p>
                                          </dd>
                                      </dl>
                                      <dl>
                                          <dt>
                                               <img src="../../assets/img/hzy.png" alt="">
                                          </dt>
                                          <dd>
                                               <h4>胡正银</h4>
                                               <p>中国科学院成都文献情报中心副研究员、成都文献情报中心科学数据与知识管理实验室执行主任、中国科学院大学情报学硕士研究生导师</p>
                                          </dd>
                                      </dl>
                                </div>
                                 <div class="bg"></div>
                            </div>
                          
                    </div>
                     <div class="modules module3">
                          <h3>北京航空航天大学</h3>
                           <div class="intro">
                                 <p>课题组成员及其团队一直以来专注于数据挖掘、大规模数据处理、知识图谱、网络安全态势感知等相关领域的理论与研究工作，通过积极承担国家自然科学基金重点项目（基于移动群智感知的物联网大数据挖掘与应用）、国家863计划（面向社交网络的信息传播规律及用户行为演化）、国家信息安全专项、省部级及企事业等项目几十项，取得了一系列具有国际水平的研究成果，在数据挖掘、人工智能等领域国际顶级期刊、专业书籍及学术会议上发表论著数百篇。依据理论研究成果，申报单位积极推动社会化和产业会实践，掌握了一批具有自主知识产权的可转化技术成果，申请及获批国家发明专利百余项、软件著作权数十项，获得电子学会技术发明一等奖1项。北航团队研发了社交网络用户人物画像系统、事件计算系统、观点挖掘系统、事件传播预测与干预决策系统、舆情图谱系统、地区选举预测系统等，上述平台及系统在国家及省部级单位、行业协会和大型企业获得了成功应用和推广，多项技术及系统成果、分析报告在国家计算机网络安全管理中心等多家单位获得相关领导的肯定和赞扬，团队还被服务单位提出书面表扬和感谢。</p>
                                <div class="person_intro">
                                      <dl>
                                          <dt>
                                              <img src="../../assets/img/wjj.png" alt="">
                                          </dt>
                                          <dd>
                                                <h4>吴俊杰</h4>
                                                <p>管理学博士，研究员。任北航“数据智能研究中心”主任，“城市运行应急保障模拟技术”北京市重点实验室副主任</p>
                                          </dd>
                                      </dl>
                                      <dl>
                                          <dt>
                                               <img src="../../assets/img/lgn.png" alt="">
                                          </dt>
                                          <dd>
                                               <h4>刘冠男</h4>
                                               <p>北京航空航天大学经济管理学院副教授，北航“数据智能研究中心”副主任</p>
                                          </dd>
                                      </dl>
                                </div>
                                 <div class="bg"></div>
                            </div>
                          
                    </div>
                    <div class="modules module4">
                          <h3>中国科学院信息工程研究所</h3>
                           <div class="intro">
                                 <p>中国科学院信息工程研究所是我国信息安全与保密研究领域的“总体所、龙头所、核心所”，是国家网络信息安全基础设施主要系统研制单位及关键技术的主要提供方。面向国家战略需求，在信息安全科技领域，开展基础理论与前沿技术研究，开发应用性技术与系统，为国家信息化进程提供核心关键技术支撑与系统解决方案。信工所主要研究方向包括：密码理论与安全协议、信息智能处理、数据安全、通信与电磁安全、网络与系统技术、信息系统测试评估技术等。目前拥有信息安全国家重点实验室、信息内容安全技术国家工程实验室、信息安全共性技术国家工程研究中心和中国科学院数据与通信保护研究教育中心等一批国家级和院部级的科研创新平台。面向国际信息技术发展前沿与国家信息化重大需求，信工所承担了“面向感知中国的新一代信息技术”先导专项、核高基等国家重大科技计划、重大工程70余项，已经成为中科院和国家有关部门在信息工程领域重大任务的牵头组织和总体单位。</p>
                                <div class="person_intro">
                                      <dl>
                                          <dt>
                                              <img src="../../assets/img/ld.png" alt="">
                                          </dt>
                                          <dd>
                                                <h4>李佟</h4>
                                                <p>博士，中国科学院信息工程研究所第五研究室高级工程师，计算机软件与理论硕士生导师</p>
                                          </dd>
                                      </dl>
                                      <!-- <dl>
                                          <dt>
                                               <img src="../../assets/img/lgn.png" alt="">
                                          </dt>
                                          <dd>
                                               <h4>刘冠男</h4>
                                               <p>北京航空航天大学经济管理学院副教授，北航“数据智能研究中心”副主任</p>
                                          </dd>
                                      </dl> -->
                                </div>
                                 <div class="bg"></div>
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
 name:'teamintro',
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
                        height: 424px;
                        position: relative;
                        >p{
                            font-size: 14px;
                            font-family: PingFangSC, PingFangSC-Regular;
                            font-weight: 400;
                            text-align: justify;
                            color: rgba(23,23,42,0.72);
                            line-height: 24px;
                            margin-bottom: 56px;
                        }
                        .person_intro{
                            display: flex;
                             justify-content: center;
                            align-items: center;
                        //    padding-bottom: 56px;
                            width: 100%;
                            position: absolute;
                            left: 0;
                            bottom:56px;
                            z-index: 2;
                             margin-top: 56px;
                            dl{
                                width: 491px;
                                height: 192px;
                                background: #ffffff;
                                border-radius: 8px;
                                box-shadow: 0px 10px 24px 0px rgba(181,189,202,0.24);
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                padding: 24px;
                                margin-right: 56px;
                                dt{
                                    margin-right: 30px;
                                    img{
                                        width: 99px;
                                        height: 99px;
                                        display: block;
                                    }
                                }
                                dd{
                                    h4{
                                        font-size: 16px;
                                        font-family: PingFangSC, PingFangSC-Semibold;
                                        font-weight: 600;
                                        text-align: left;
                                        color: #17172a;
                                        line-height: 40px;
                                    }
                                    p{
                                        font-size: 14px;
                                        font-family: PingFangSC, PingFangSC-Regular;
                                        font-weight: 400;
                                        text-align: left;
                                        color: #17172a;
                                        line-height: 24px;
                                    }
                                }
                            }
                        }
                    .bg{
                       background: url(../../assets/img/zky_logo1.png) no-repeat;
                        background-size: cover;
                        width: 480px;
                        height: 347px;
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        z-index: 0;
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
</style>