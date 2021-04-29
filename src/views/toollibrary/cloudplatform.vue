<template>
    <div class="integration">
         <h1>云平台</h1>
         <div class="integration_box">
                <div class="integration_left">
                     <p class="desc">
                        云平台管理服务组件与底层基础资源采用高可用、可扩展的架构，管 理服务基于横向可扩展实现多活部署，保障云平台业务的高可用；计 算资源采用可扩展Cell的架构模式，支持横向与纵向扩展，单cell支持 200+物理服务器部署能力，同时支持横向10+cell扩展能力；存储资源 可实现按需横向扩展，支持EB级别的存储扩容；网络采用spine-leaf 架构模式，为计算存储资源的大规模横向扩展提供网络保障，任意两节 点之间可实现网络无阻塞，物理链路实现百分百利用率。
                     </p>
                     <p>云平台资源基于虚拟化资源池，可提供高可用、弹性可伸缩的计算资源、存储资源、网络资源以及安全资源，包括虚机、裸金属、GPU、块存储、文件存储、对象存储、 虚拟交换机、虚拟路由器、虚拟DHCP、安全组、虚拟防火墙等资源。支持虚机运行中资源弹性伸缩调整与热迁移；支持Vlan/VxLAN网络虚拟化；支持nat地址转换、浮动IP等功能；支持IDS、防火墙、DPI等安全功能虚拟化。</p>
                     <p>功能强大：提供100+的数据处理组件，包括Hadoop、Spark、MLlib、Hive、Solr、Redis、MemCache、ElasticSearch、JDBC、mongoDB、HTTP、XML、CSV、JSON等，同时集成了微生物领域的相关算法。</p>
                     <p> 扩展性强：支持自定义开发数据处理组件</p>
                     <p>性能优越：基于分布式计算引擎Spark开发</p>
                     <div class="oper">
                           <span>立即使用</span>
                     </div>
                </div>
                <div class="integration_right">
                      <img src="../../assets/img/云平台.png" alt="">
                </div>
         </div>
    </div>
</template>

<script>
export default {
 name:'cloudplatform',
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
                  margin-top: 8px;
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
                  width: 358px;
                  height: 451px;
              }
          }
      }
  }
</style>