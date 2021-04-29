<template>
    <div class="integration">
         <h1>智能评估</h1>
         <div class="integration_box">
                <div class="integration_left">
                     <p class="desc">
                   从申报人研究基础和申报项目内容两个方面，其中智能评估报告分为 整体评估、研究基础评估和项目内容评估，研究基础评估包括：总体 研究成果、研究兴趣变化与相关研究成果；项目内容评价包括：投入 与产出、前沿性、影响力、创新性与可行性，帮助专家基于大数据计 算客观、精准遴选创新项目。
                     </p>
                    
                     <div class="oper">
                           <span>立即使用</span>
                     </div>
                </div>
                <div class="integration_right">
                      <img src="../../assets/img/语义挖掘.png" alt="">
                </div>
         </div>
    </div>
</template>

<script>
export default {
 name:'intelligent_eval',
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