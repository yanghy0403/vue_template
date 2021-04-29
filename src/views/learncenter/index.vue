<template>
  <div class="wrap">
     <Header/>
     <div class="main">
           <div class="banner"></div>
           <div class="main_content">
                 <div class="content">
                    <h2>学习中心</h2>
                    <div class="modules">
                          <h3>理论介绍</h3>
                          <div class="module">
                                <div class="module_item" @click="handleRouter('/triz')">
                                      TRIZ基本理论
                                </div>
                                <div class="module_item">群智基本理论</div>
                                <div class="module_item">知识图谱基本理论</div>
                          </div>
                    </div>
                     <div class="modules">
                          <h3>研究前沿</h3>
                          <div class="module_content">
                                <ul v-for="(item,i) in forefront" :key="i">
                                    <li>{{item.title}}</li>
                                    <li>{{item.url}}</li>
                                </ul>
                          </div>
                    </div>
                     <div class="modules">
                          <h3>交流研讨</h3>
                          <div class="commun">
                               <img src="../../assets/img/交流研讨配图.png" alt="">
                               <ul>
                                     <li v-for="(item,i) in News" :key="i">
                                           <h3>{{item.title}}</h3>
                                           <p>{{item.desc}}</p>
                                     </li>
                               </ul>
                          </div>
                    </div>
                     <div class="modules">
                          <h3>图书推荐</h3>
                          <div class=" book_box">
                              <div class="book">
                                    <h2>Science China Life Sciences</h2>
                                    <p>中国科学:生命科学(英文版)</p>
                                    <div class="book_details">
                                          <ul>
                                              <li>主办单位：中国科学院 </li>
                                              <li>出版周期：月刊 </li>
                                              <li>ISSN：1674-7305</li>
                                              <li>CN：11-5841/Q</li>
                                          </ul>
                                          <ul>
                                              <li>该刊被以下数据库收录：</li>
                                              <li>CA 化学文摘(美)(2020)</li>
                                              <li>SCI 科学引文索引(美)(2020)</li>
                                              <li>JST 日本科学技术振兴机构数据库(日)(2018)</li>
                                              <li>Pж(AJ) 文摘杂志(俄)(2020)</li>
                                              <li>CSCD 中国科学引文数据库来源期刊(2019-2020年度)</li>
                                          </ul>
                                    </div>
                              </div>
                              <Swiper/>
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
import Swiper from '../../components/swiper';
export default {
 name:'learncenter',
 components:{Header,Footer,Swiper},
 data(){
    return{
       forefront:[
           {
               title:'前沿丨2020年，知识图谱都有哪些研究风向？',
               url:'https://www.sohu.com/a/408915363_505819'
           },
            {
               title:'前沿丨知识图谱前沿跟进',
               url:'https://baijiahao.baidu.com/s?id=1661307413976805121&wfr...'
           },
            {
               title:'论文丨科技大数据知识图谱构建方法及应用研究综述',
               url:'详见PDF附件'
           },
            {
               title:'论文丨SKS：一种科技领域大数据知识图谱平台',
               url:'详见PDF附件'
           },
            {
               title:'前沿丨北京大学潘锋教授课题组在构建材料知识图谱研究取得进展',
               url:'https://new.qq.com/omn/20210406/20210406A024Z200.html'
           },
            {
               title:'前沿丨北京大学面向知识图谱应用的高效图数据库系统gStore',
               url:'http://kjkfb.pku.edu.cn/info/1061/2425.htm'
           },
            {
               title:'前沿丨清华大学团队研发新冠肺炎诊疗知识图谱',
               url:'http://www.riit.tsinghua.edu.cn/info/1043/4933.htm'
           },
            {
               title:'前沿丨AI助力顶尖人才竞争：全球首款基于知识图谱的智能人才服务产品发布',
               url:'https://www.aminer.cn/research_report/5f9fb4f6e8a87f775…'
           }
       ],
       News:[
           {
               title:'动态丨IEEE P2807标准《知识图谱架构》第三次面对面会议在北京成功召开',
               desc:'2021年3月30-31日，IEEE P2807标准《知识图谱架构》（Framework of Knowledge Graphs）第三次面对面会议以线上线下结合的形式在北京成功召开。会议由IEEE知识图谱标准化工作组（IEEE/C/…'
           },
            {
               title:'动态丨《知识图谱选型与实施指南》编制启动会成功召开',
               desc:'2021年3月31日下午，《知识图谱选型与实施指南》(以下简称“指南”)白皮书编制启动会在北京以线上线下相结合的形式成功召开。本次会议由中国电子技术标准化研究院及知识图谱产业推进方阵（筹）…'
           },
            {
               title:'动态丨建立知识图谱领域标准体系！张钹院士、李涓子教授等人共论知识图…',
               desc:'2021 年 1 月 8 日，由中国电子技术标准化研究院主办的 “第一届知识图谱产业发展论坛” 在北京成功召开。会上发布了首批知识图谱产品认证证书、知识驱动先锋企业榜单、优秀案例集等相关成果。'
           },
            {
               title:'动态丨2020年中国面向人工智能“新基建”的知识图谱行业白皮书',
               desc:'新型基础设施建设是为加快国家规划建设推出的重大工程和基础设施建设项目，面向新产业、新业态和新模式，同时助力传统基础设施的智能化改造。新基建三大规划领域中，两大领域都直接提及人工…'
           },
            {
               title:'观点丨知识图谱构建的研究已走入下半场，但大规模落地应用仍需时间',
               desc:'知识图谱是近年来人工智能技术蓬勃发展的核心驱动力之一，已广泛应用在金融、电商、医疗、政务等众多领域，经过短短几年的发展，热度依旧不减，未来，知识图谱又将解决哪些其他技术无法解…'
           }
       ],
     
       
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
       .module{
           display: flex;
           justify-content: center;
           align-items: center;
           .module_item{
               width: 220px;
                height: 108px;
                opacity: 1;
                background: #366bd6;
                border-radius: 8px;
                box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.09); 
                margin-right: 80px;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                font-size: 16px;
                font-family: PingFangSC, PingFangSC-Semibold;
                font-weight: 600;
                text-align: left;
                color: #ffffff;
                line-height: 22px;
                padding-right: 24px;
                margin-top: 50px;
                margin-bottom: 50px;
           }
           .module_item:nth-child(1){
               background-image: url(../../assets/img/triz.png);
               background-repeat: no-repeat;
           }
           .module_item:nth-child(2){
               background-image: url(../../assets/img/qz.png);
                background-repeat: no-repeat;
           }
            .module_item:nth-child(3){
               background-image: url(../../assets/img/zh.png);
                background-repeat: no-repeat;
                margin-right: 0;
           }
           
       }
       .module_content{
             padding:24px 20px;
            //  padding: 24px 0;
           ul{
              background: #fff;
                border-radius: 8px;
                display: flex;
                li{
                    line-height: 49px;
                    height: 49px;
                    flex: 1;
                    padding-left: 30px;
                    font-size: 16px;
                    font-family: PingFangSC, PingFangSC-Regular;
                    font-weight: 400;
                    text-align: left;
                    color: #333333;
                }
                li:last-child{
                    font-size: 16px;
                    font-family: PingFangSC, PingFangSC-Regular;
                    font-weight: 400;
                    text-decoration: underline;
                    text-align: left;
                    color: #395ab6;
                }
           }
            ul:nth-child(2n+1){
                background: #f3f4f9;
            }
       }
       .commun{
           display: flex;
           padding: 24px 20px;
           >img{
               width: 665px;
               height: 390px;
           }
           ul{
              margin-left: 24px; 
              li{
                  margin-bottom: 25px;
                 h3{
                     font-size: 16px;
                    font-family: PingFangSC, PingFangSC-Medium;
                    font-weight: 500;
                    text-align: left;
                    color: #222222;
                 }
                 p{
                     font-size: 12px;
                    font-family: PingFangSC, PingFangSC-Regular;
                    font-weight: 400;
                    text-align: left;
                    color: #999999;
                 }
              }
              li:last-child{
                  margin-bottom: 0;
              }
           }
       }
       .book{
           padding: 24px 20px;
           position: relative;
           padding-bottom: 80px;
           h2{
                font-size: 24px;
                font-family: PingFangSC, PingFangSC-Semibold;
                font-weight: 600;
                text-align: left;
                color: #333333;
                line-height: 33px;
                padding-left: 89px;
           }
           p{
               font-size: 14px;
                font-family: PingFangSC, PingFangSC-Regular;
                font-weight: 400;
                text-align: left;
                color: #999999;
                line-height: 20px;
                padding-left: 89px;
           }
           .book_details{
               padding: 18px 0;
               padding-left: 80px;
               margin-top: 19px;
                // height: 190px;
                opacity: 1;
                background: #f3f4f9;
                border-radius: 8px;
                display: flex;
                flex-direction: column;
                width: 50%;
                ul{
                    margin-bottom: 20px;
                    li{
                        font-size: 12px;
                        font-family: PingFangSC, PingFangSC-Regular;
                        font-weight: 400;
                        text-align: left;
                        color: #666666;
                        line-height: 20px;
                    }
                }
           }
          
       }
    }
 .book_box{
   position: relative;
    .swiper_box{
        width: 600px;
        height: 365px;
        position: absolute;
        right: 135px;
        bottom: 60px;
        z-index: 10;
    }
 }
//  @import './style.css'
</style>