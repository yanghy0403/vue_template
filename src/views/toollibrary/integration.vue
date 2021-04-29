<template>
    <div class="integration">
         <h1>集成PiFlow</h1>
         <div class="integration_box">
                <div class="integration_left">
                     <p class="desc">
                         PiFlow是一个基于分布式计算框架Spark开发的大数据流水线系统。 该系统将数据的采集、清洗、计算、存储等各个环节封装成组件， 以所见即所得方式进行流水线配置。简单易用，功能强大。它具有 如下特性：
                     </p>
                     <p>简单易用：可视化配置流水线，实时监控流水线运行状态，查看日志</p>
                     <p>功能强大：提供100+的数据处理组件，包括Hadoop、Spark、MLlib、Hive、Solr、Redis、MemCache、ElasticSearch、JDBC、mongoDB、HTTP、XML、CSV、JSON等，同时集成了微生物领域的相关算法。</p>
                     <p> 扩展性强：支持自定义开发数据处理组件</p>
                     <p>性能优越：基于分布式计算引擎Spark开发</p>
                     <div class="oper">
                           <span>立即使用</span>
                     </div>
                </div>
                <div class="integration_right">
                      <img src="../../assets/img/Piflow.png" alt="">
                </div>
         </div>
    </div>
</template>

<script>
export default {
 name:'integration',
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
                  margin-top: 145px;
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
                  width: 489px;
                    height: 317px;
              }
          }
      }
  }
</style>