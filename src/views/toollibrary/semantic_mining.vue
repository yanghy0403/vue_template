<template>
    <div class="integration">
         <h1>语义挖掘</h1>
         <div class="integration_box">
                <div class="integration_left">
                     <p class="desc">
                     语义挖掘工具是基于海量科技文献大数据，使用语言预训练模型BERT 深度学习算法，研发的智能算法模型，提供“自动学科分类”、“人物、 地点、事件、活动、组织、机构等通用命名实体识别”、“中医药实体 识别”、“关键词自动标注”、“知识元智能识别”四类工具，目前“知识 元智能识别”已涵盖等离激元、新冠病毒、新型显示技术领域共64575 个知识元，帮助学者快速发现细粒度知识实体，促进技术创新。
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
 name:'semantic_mining',
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