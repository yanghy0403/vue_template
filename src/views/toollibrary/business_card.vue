<template>
    <div class="integration">
         <h1>学术名片</h1>
         <div class="integration_box">
                <div class="integration_left">
                     <p class="desc">
                       基于科技创新知识库，利用用户画像与AI计算技术，自动创建学术名 片，方便科研人员自动化管理科研成果的同时，为人才引进及人才评 估提供了数据与平台基础。
                     </p>
                    
                     <div class="oper">
                           <span>立即使用</span>
                     </div>
                </div>
                <div class="integration_right">
                      <img src="../../assets/img/学术名片.png" alt="">
                </div>
         </div>
    </div>
</template>

<script>
export default {
 name:'business_card',
 data(){
    return{

    }
 }
}
</script>

<style lang="scss" scoped>
  .integration{
      padding: 40px;
      h1{
          font-size: 40px;
        font-family: PingFangSC, PingFangSC-Regular;
        font-weight: 400;
        text-align: left;
        color: #232930;
        margin-bottom: 22px;
      }
      .integration_box{
          display: flex;
          .integration_left{
              width: 49%;
              padding-right: 50px;
              border-right:1px solid #979797; 
              .desc{
                  font-size: 16px;
                    font-family: PingFangSC, PingFangSC-Regular;
                    font-weight: 400;
                    text-align: left;
                    color: #232930;
                    line-height: 24px;
                    margin-bottom: 10px;
                    padding-top: 20px;
              }
              p{
                  font-size: 12px;
                    font-family: PingFangSC, PingFangSC-Regular;
                    font-weight: 400;
                    text-align: left;
                    color: #a0a0a2;
                    line-height: 20px;
              }
              .oper{
                  margin-top: 179px;
                  width: 160px;
                    height: 38px;
                    opacity: 1;
                    background: #03b6ae;
                    border-radius: 4px;
                   font-size: 14px;
                    font-family: PingFangSC, PingFangSC-Regular;
                    font-weight: 400;
                    text-align: left;
                    color: #ffffff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
              }
          }
          .integration_right{
              display: flex;
              justify-content: center;
              align-items: center;
              img{
                  display: block;
                  margin-left:40px ;
                  width: 491px;
                  height:327px;
                 margin-top: 20px;
              }
          }
      }
  }
</style>