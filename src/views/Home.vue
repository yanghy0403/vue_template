<template>
  <div class="wrap">
    <Header />
    <div class="banner">
      <div class="banner_content">
        <div class="title">
          <h3>启用创造性的解决方案</h3>
          <h3>创新方法新系统研究与应用探索</h3>
        </div>

        <div class="more">
          <p>
            查看详情
            <Icon type="ios-arrow-forward" style="padding-left: 5px" />
          </p>
        </div>
        <div class="imgs">
          <div class="imgs_box">
            <img src="../assets/img/T.png" alt="" class="t" />
            <img src="../assets/img/y.png" alt="" class="y" />
            <img src="../assets/img/g.png" alt="" class="g" />
            <div class="intro1">
              <p>
                卡伦·加得（Karen
                Gadd）的著作《工程师的TRIZ：实现创造性的问题解决》由Wiley
                Blackwell出版
              </p>
              <h4>书籍简介</h4>
            </div>
            <div class="intro2">
              <p>
                卡伦·加得（Karen
                Gadd）的著作《工程师的TRIZ：实现创造性的问题解决》由Wiley
                Blackwell出版
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="about_us">
      <div class="about_us_box">
        <h2>关于我们</h2>
        <p>
          网站由中国科学院计算机网络信息中心研发，中国科学院文献情报中心、北京航空航天大学协同开发及提供相应智力支持
        </p>
        <div class="sponsor">
          <img src="../assets/img/about1.png" alt="" />
          <img src="../assets/img/about2.png" alt="" />
          <img src="../assets/img/about3.png" alt="" />
        </div>
        <div class="step">
          <div class="step_item step_item1">
            <div class="info">
              <p>团队介绍</p>
              <p><Icon type="ios-arrow-down" /></p>
            </div>
          </div>
          <div class="step_item step_item2">
            <div class="info">
              <p>项目介绍</p>
              <p><Icon type="ios-arrow-down" /></p>
            </div>
          </div>
          <div class="step_item step_item3">
            <div class="info">
              <p>系统框架</p>
              <p><Icon type="ios-arrow-down" /></p>
            </div>
          </div>
          <div class="step_item step_item4">
            <div class="info">
              <p>智科研</p>
              <p><Icon type="ios-arrow-down" /></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="case_show">
      <h2>创新案例展示</h2>
      <div class="case_content">
        <div class="case_item" v-for="(item, key) in caseList" :key="key">
          <img src="../assets/img/case.png" alt="" />
          <div class="info">
            <h3>{{item.title}}</h3>
            <p class="desc">{{ item.desc }}</p>
            <div class="more">
              查看详情
              <Icon type="ios-arrow-forward" style="padding-left: 5px" />
            </div>
          </div>
        </div>
      </div>
      <div class="view_all">
            <span>查看全部</span>
      </div>
    </div>
    <Footer/>
    <BackTop></BackTop>
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from '../components/Footer'
export default {
  name: "home",
  components: { Header,Footer },
  data() {
    return {
      menu: [
        {
          title: "首页",
          path: "/",
        },
        {
          title: "系统介绍",
          path: "/1",
        },
        {
          title: "学习中心",
          path: "/2",
        },
        {
          title: "案例库",
          path: "/3",
        },
        {
          title: "工具库",
          path: "/4",
        },
      ],
      content: "",
      caseList: [
        {
          title: "消除立式上胶机顶辊结露现象",
          desc:
            "解决了困扰当前运营的棘手技术问题，并开发了下一代制造工艺，以帮助实现收入增长和盈利能力。",
        },
        {
          title: "消除立式上胶机顶辊结露现象",
          desc:
            "解决了困扰当前运营的棘手技术问题，并开发了下一代制造工艺，以帮助实现收入增长和盈利能力。",
        },
        {
          title: "消除立式上胶机顶辊结露现象",
          desc:
            "解决了困扰当前运营的棘手技术问题，并开发了下一代制造工艺，以帮助实现收入增长和盈利能力。",
        },
        {
          title: "消除立式上胶机顶辊结露现象",
          desc:
            "解决了困扰当前运营的棘手技术问题，并开发了下一代制造工艺，以帮助实现收入增长和盈利能力。",
        },
        {
          title: "消除立式上胶机顶辊结露现象",
          desc:
            "解决了困扰当前运营的棘手技术问题，并开发了下一代制造工艺，以帮助实现收入增长和盈利能力。",
        },
        {
          title: "消除立式上胶机顶辊结露现象",
          desc:
            "解决了困扰当前运营的棘手技术问题，并开发了下一代制造工艺，以帮助实现收入增长和盈利能力。",
        },
        {
          title: "消除立式上胶机顶辊结露现象",
          desc:
            "解决了困扰当前运营的棘手技术问题，并开发了下一代制造工艺，以帮助实现收入增长和盈利能力。",
        },
        {
          title: "消除立式上胶机顶辊结露现象",
          desc:
            "解决了困扰当前运营的棘手技术问题，并开发了下一代制造工艺，以帮助实现收入增长和盈利能力。",
        },
      ],
    };
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.wrap {
  background: #f3f4f9;
}
.banner {
  //  height: 650px;
  background: url(../assets/img/banner.png) no-repeat;
  background-size: cover;
  .banner_content {
    width: 68%;
    height: 650px;
    margin: 0 auto;
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .title {
      margin-bottom: 160px;
      h3 {
        font-size: 40px;
        font-family: PingFangSC, PingFangSC-Medium;
        font-weight: 500;
        color: #ffffff;
        line-height: 56px;
      }
    }
    .more {
      position: absolute;
      bottom: 150px;
      left: 0;
      i {
        color: #fff;
        font-size: 16px;
      }
      p {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 160px;
        height: 40px;
        opacity: 1;
        background: #03b6ae;
        border-radius: 4px;
        color: #fff;
        font-size: 14px;
        font-family: PingFangSC, PingFangSC-Regular;
        font-weight: 400;
      }
    }
    .imgs {
      position: absolute;
      right: 30px;
      top: 55px;
      .imgs_box {
        position: relative;
        width: 500px;
        height: 545px;
        .t {
          position: absolute;
          left: 0;
          top: 0;
          width: 270px;
          height: 379px;
        }
        .y {
          position: absolute;
          left: 280px;
          top: 25px;
           width:89px;
          height: 89px;
        }
        .intro1 {
          position: absolute;
          left: 280px;
          top: 125px;
          width: 220px;
          height: 220px;
          padding: 27px;
          background: #356fe8;
          > p {
            font-size: 12px;
            font-family: PingFangSC, PingFangSC-Medium;
            font-weight: 500;
            text-align: justify;
            color: #ffffff;
            line-height: 20px;
          }
          h4 {
            font-size: 12px;
            font-family: PingFangSC, PingFangSC-Medium;
            font-weight: 500;
            text-align: justify;
            color: #ffffff;
            line-height: 17px;
            margin-top: 20px;
          }
        }
        .g {
          position: absolute;
          left: 280px;
          top: 355px;
           width:46px;
          height: 46px;
        }
        .intro2 {
          position: absolute;
          left: 116px;
          top: 389px;
          width: 154px;
        //   height: 154px;
          padding: 31px 28px 21px 20px;
          background: #356fe8;
         >p{
              font-size: 12px;
            font-family: PingFangSC, PingFangSC-Medium;
            font-weight: 500;
            text-align: justify;
            color: #ffffff;
             line-height: 20px;
         }
        }
      }
    }
  }
}
.about_us {
  background: #fff;
  .about_us_box {
    width: 68%;
    height: 580px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > h2 {
      font-size: 40px;
      font-family: PingFangSC, PingFangSC-Semibold;
      font-weight: 600;
      color: #0749ca;
      line-height: 56px;
      letter-spacing: 6px;
      text-align: center;
      margin-bottom: 40px;
    }
    > p {
      font-size: 16px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      text-align: center;
      color: #17172a;
      line-height: 22px;
      margin-bottom: 40px;
    }
    .sponsor {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 32px;
      > img {
        display: block;
        width: 56px;
        height: 56px;
        margin-right: 20px;
        border-radius: 50%;
        box-shadow: 0px 5px 9px 0px rgba(176,183,229,0.50); 
      }
    }
    .step {
      display: flex;
      justify-content: center;
      align-items: center;
      .step_item {
        width: 159px;
        height: 192px;
        position: relative;
        margin-right: 32px;
        cursor: pointer;
        .info {
          position: absolute;
          left: 0;
          bottom: 12px;
          width: 159px;
          > P {
            text-align: center;
            color: #fff;
            font-size: 20px;
            font-family: Helvetica, Helvetica-Regular;
            font-weight: 400;
            i {
              color: #fff;
              font-size: 20px;
            }
          }
        }
      }
      .step_item1 {
        background: url(../assets/img/step1.png) no-repeat;
        background-size: cover;
      }
      .step_item2 {
        background: url(../assets/img/step2.png) no-repeat;
        background-size: cover;
      }
      .step_item3 {
        background: url(../assets/img/step3.png) no-repeat;
        background-size: cover;
      }
      .step_item4 {
        background: url(../assets/img/step4.png) no-repeat;
        background-size: cover;
      }
    }
  }
}
.case_show {
  width: 68%;
  margin: 0 auto;
  h2 {
    font-size: 40px;
    font-family: PingFangSC, PingFangSC-Semibold;
    font-weight: 600;
    text-align: center;
    color: #0749ca;
    line-height: 56px;
    letter-spacing: 6px;
    margin-top: 80px;
    margin-bottom: 40px;
  }
  .case_content {
    display: flex;
    flex-wrap: wrap;
    .case_item {
      width: 304px;
    //   height: 428px;
      margin-right: 28px;
        margin-bottom: 28px;
      background: #fff;
      border-radius: 8px;
      box-shadow: 0px 10px 14px 0px rgba(181,189,202,0.25); 
      >img{
          height: 195px;
          width: 304px;
          display: block;
      }
      .info{
          padding: 28px;
          h3{
              font-size: 24px;
                font-family: PingFangSC, PingFangSC-Semibold;
                font-weight: 600;
                text-align: left;
                color: #17172a;
                line-height: 33px;
                letter-spacing: 2px;
                text-shadow: 0px 10px 14px 0px rgba(181,189,202,0.25); 
                margin-bottom: 10px;
          }
          .desc{
              font-size: 14px;
                font-family: PingFangSC, PingFangSC-Semibold;
                font-weight: 600;
                text-align: left;
                color: #a0a0a2;
                line-height: 24px;
               text-shadow: 0px 10px 14px 0px rgba(181,189,202,0.25); 
          }
          .more{
              font-size: 12px;
                font-family: Helvetica, Helvetica-Regular;
                font-weight: 400;
                text-align: left;
                color: #356fe8;
                line-height: 14px;
                letter-spacing: 1px;
                text-shadow: 0px 10px 14px 0px rgba(181,189,202,0.25);
                margin-top: 34px;
                i{
                     color: #356fe8;
                     font-size: 14px;
                }
          }
      }
    }
     .case_item:hover{
         cursor: pointer;
     }
    .case_item:nth-child(4n){
        margin-right: 0;
    }
  }
   .view_all{
       display: flex;
       justify-content: center;
       align-items: center;
       margin-top: 40px;
       margin-bottom:100px;
       span{
           width: 160px;
            height: 40px;
            opacity: 1;
            background: #03b6ae;
            border-radius: 4px;
            display: flex;
            justify-content: center;
            align-items: center;
           font-size: 14px;
            font-family: PingFangSC, PingFangSC-Regular;
            font-weight: 400;
            color: #ffffff;
            line-height: 18px;
       }
   }
}




@media (max-width:1366px) {
    .banner{
        .banner_content{
            .imgs{
                .imgs_box{
                    .intro2{
                        width: 190px;
                        left: 80px;
                    }
                }
            }
        }
    }
}
</style>