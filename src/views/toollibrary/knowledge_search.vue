<template>
    <div class="integration">
         <h1>知识检索</h1>
         <div class="integration_box">
                <div class="integration_left">
                     <p class="desc">
                        基于科技创新知识库，提供“论文、资讯、标准、报告、学者、期刊、 专利、机构、项目及会议”10类知识类型共4亿知识实体、百亿知识关 系的集成检索，深度揭示每一条知识的关联知识，并提供基于深度学 习的检索结果智能综述，快速掌握知识要点；基于知识计算，实时、 智能分析一个研究主题的年度高价值科技热点、年度热点主题、总体 发展趋势、该主题高影响力人员、以及相关的其他主题。
                     </p>
                    
                     <div class="oper">
                           <span>立即使用</span>
                     </div>
                </div>
                <div class="integration_right">
                      <img src="../../assets/img/ks.png" alt="">
                </div>
         </div>
    </div>
</template>

<script>
export default {
 name:'knowledge_search',
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
                  width: 490px;
                  height:302px;
                 
              }
          }
      }
  }
</style>