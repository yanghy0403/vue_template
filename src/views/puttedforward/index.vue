<template>
  <div class="wrap">
     <Header/>
     <div class="main">
           <div class="banner"></div>
           <div class="main_content">
                 <div class="content">
                      <div class="serach">
                              <Input placeholder="搜索关键词" style="width: 100%" clearable>
                                    <Icon type="ios-search" slot="prefix" />
                                </Input>
                                <span>搜索</span>
                      </div>
                      <div class="column">
                            <div class="column_left">
                                <h2>热门标签</h2>
                                <ul>
                                    <li v-for="(item,i) in tags" :key="i">
                                          <label for="">{{item.title}}</label>
                                          <span>({{item.num}})</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="column_center">
                                  <h2>所有案例</h2>
                                  <div class="conditi">
                                        <p>浏览量图表 ({{total}})</p>
                                        <div class="sort">
                                              <label for="">排序方式：</label>
                                              <ul>
                                                  <li :class="defaultSort =='date'?'active':''">发表时间</li>
                                                  <li :class="defaultSort =='views'?'active':''">浏览量</li>
                                                  <li :class="defaultSort =='collect'?'active':''">收藏量</li>
                                              </ul>
                                        </div>
                                  </div>
                                <div class="table">
                                      
                                        <Table :columns="columns" :data="TableData">
                                            <template slot="title" slot-scope="{row}">
                                               <div class="slot">
                                                    <p @click="handleRouter(row)">{{row.title}}</p>
                                                    <tag v-for="(item,i) in row.tags" :key="i">{{item}}</tag>
                                               </div>
                                            </template>
                                        </Table>
                                        <div class="page">
                                                <Page :total="total" @on-change="handlePage"/>
                                        </div>
                                </div>
                                   
                            </div>
                            <div class="column_right">
                                 <h2>
                                     <label for="">文章推荐</label>
                                     <span>更多</span>
                                 </h2>
                                 <ul>
                                     <li v-for="(item,i) in remend" :key="i">
                                           <h2>{{item.title}}</h2>
                                           <p>{{item.source}}</p>
                                           <p>{{item.date}}</p>
                                     </li>
                                 </ul>
                            </div>
                      </div>
                     <div class="cloud">
                            <h2>热门词</h2>
                           <div class="graph">
                                 <cloud :data="{}"/>
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
import cloud from "../../components/cloud"

export default {
 name:'puttedforward',
 components:{Header,Footer,cloud},
 data(){
    return{
        tags:[
            {
                title:'标签1',
                num:12
            },
             {
                title:'标签1',
                num:12
            },
             {
                title:'标签1',
                num:12
            },
             {
                title:'标签1',
                num:12
            },
             {
                title:'标签1',
                num:12
            },
             {
                title:'标签1',
                num:12
            },
             {
                title:'标签1',
                num:12
            },
             {
                title:'标签1',
                num:12
            }
        ],
        remend:[
            {
                title:'衡量创新投资回报率–排名第一',
                source:'中国知网',
                date:'2020年9月4日'
            },
             {
                title:'衡量创新投资回报率–排名第一',
                source:'中国知网',
                date:'2020年9月4日'
            },
             {
                title:'衡量创新投资回报率–排名第一',
                source:'中国知网',
                date:'2020年9月4日'
            },
             {
                title:'衡量创新投资回报率–排名第一',
                source:'中国知网',
                date:'2020年9月4日'
            },
             {
                title:'衡量创新投资回报率–排名第一',
                source:'中国知网',
                date:'2020年9月4日'
            }
        ],
        TableData:[
            {
                title:'消除立式上胶机顶辊结露现象',
                source:'中国知网',
                date:'2020年9月4日',
                tags:['标签1','标签2']
            },
             {
                title:'消除立式上胶机顶辊结露现象',
                source:'中国知网',
                date:'2020年9月4日',
                tags:['标签1','标签2']
            },
            {
                title:'消除立式上胶机顶辊结露现象',
                source:'中国知网',
                date:'2020年9月4日',
                tags:['标签1','标签2']
            },
             {
                title:'消除立式上胶机顶辊结露现象',
                source:'中国知网',
                date:'2020年9月4日',
                tags:['标签1','标签2']
            },
            {
                title:'消除立式上胶机顶辊结露现象',
                source:'中国知网',
                date:'2020年9月4日',
                tags:['标签1','标签2']
            },
             {
                title:'消除立式上胶机顶辊结露现象',
                source:'中国知网',
                date:'2020年9月4日',
                tags:['标签1','标签2']
            },
            {
                title:'消除立式上胶机顶辊结露现象',
                source:'中国知网',
                date:'2020年9月4日',
                tags:['标签1','标签2']
            },
             {
                title:'消除立式上胶机顶辊结露现象',
                source:'中国知网',
                date:'2020年9月4日',
                tags:['标签1','标签2']
            },
        ],
        total:100,
        page:1,
        pageSize:8,
        columns:[
            {
              title:'案例名',
              slot:'title'
            },
            {
              title:'来源',
              key:'source',
              align:'center'
            },
             {
              title:'日期',
              key:'date',
              align:'center'
            }
        ],
        defaultSort:'date'
    }
 },


 methods:{
    handleRouter(row){
        this.$router.push({
              path:'/putted_detail',
              query:{
                  id:row.id
              }
        });
    },
    //分页
    handlePage(page){
        this.page = page;
        this.getList();
    },
    getList(){
        let data={
            page:this.page,
            size:this.pageSize
        }
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
             background: url(../../assets/img/案例库标题背景图.png) no-repeat;
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
                        margin-top: 30px;
                        margin-bottom: 60px;
                 }
               

             }
         }
     }
 }
.serach{
    margin-top: 84px;
    margin-bottom: 56px;
    display: flex;
    >span{
        width: 184px;
        height: 60px;
        background: #03b6ae;
        border-radius: 0px;
        box-shadow: 0px 4px 7px 0px rgba(12,38,100,0.50);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        font-family: PingFangSC, PingFangSC-Medium;
        font-weight: 500;
        color: #ffffff;
    }
    /deep/ .ivu-input-icon{
        height: 60px;
        line-height: 60px;
        font-size: 24px;
        width: 40px;
    }
    /deep/ .ivu-input{
        height: 60px;
        line-height: 60px;
         font-size: 18px;
        &::placeholder{
            font-size: 18px;
        }
    }
    /deep/ .ivu-input-with-prefix {
        padding-left: 40px;

    }
    /deep/ .ivu-input-prefix{
       width: 40px;
       i{
           line-height: 60px;
           font-size: 24px;
       }
    }
}
.column{
    display: flex;
    .column_left{
        width: 17%;
        margin-right: 2%;
        border-top:5px solid #0749ca;
        padding: 26px;
        background-color: #fff;
        border-radius: 3px;
        box-shadow: 0px 10px 14px 0px rgba(181,189,202,0.25); 
        >h2{
            font-size: 20px;
            font-family: Helvetica, Helvetica-Regular;
            font-weight: 400;
            text-align: left;
            color: #000000;
            line-height: 24px;
            letter-spacing: 1px;
            margin-bottom: 15px;
        }
        ul{
            li{
                font-size: 14px;
                font-family: PingFangSC, PingFangSC-Medium;
                font-weight: 500;
                text-align: left;
                color: #222222;
                line-height: 30px;
            }
        }
    }
     .column_center{
        width: 62%;
         margin-right: 2%;
         border-top:5px solid #0749ca;
         border-radius: 3px;
         padding: 26px;
          background-color: #fff;
          box-shadow: 0px 10px 14px 0px rgba(181,189,202,0.25); 
          >h2{
            font-size: 20px;
            font-family: Helvetica, Helvetica-Regular;
            font-weight: 400;
            text-align: left;
            color: #000000;
            line-height: 24px;
            letter-spacing: 1px;
            margin-bottom: 15px;
        }
        .conditi{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            >p{
                 font-size: 14px;
                font-family: PingFangSC, PingFangSC-Semibold;
                font-weight: 600;
                text-align: center;
                color: #000000;
                line-height: 18px;
            }
            .sort{
                display: flex;
                label{
                    font-size: 14px;
                    font-family: PingFangSC, PingFangSC-Semibold;
                    font-weight: 600;
                    text-align: center;
                    color: #000000;
                    line-height: 18px;
                }
                ul{
                     display: flex;
                     li{
                         font-size: 14px;
                        font-family: PingFangSC, PingFangSC-Semibold;
                        font-weight: 600;
                        color: #17172a;
                        line-height: 18px;
                        margin-right: 10px;
                     }
                     li.active{
                           color: #0749ca;
                     }
                }
            }
        }
        .table{
           /deep/ .ivu-table-header thead tr th{
               background-color: transparent;
               font-size: 14px;
                font-family: PingFangSC, PingFangSC-Medium;
                font-weight: 500;
             
                color: #0749ca;
                line-height: 18px;
                letter-spacing: 1px;
           }
           .slot{
               margin: 13px 0;
               >p{
                   font-size: 16px;
                    font-family: PingFangSC, PingFangSC-Medium;
                    font-weight: 500;
                    text-align: left;
                    color: #17172a;
                    line-height: 20px;
                    
               }
               /deep/ .ivu-tag{
                  border: 1px solid #f6c449;
                  background: transparent;
               }
           }
        }
        .page{
            padding: 20px 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
     .column_right{
        width: 17%;
        border-top:5px solid #0749ca;
         padding: 26px;
        background-color: #fff;
          border-radius: 3px;
          box-shadow: 0px 10px 14px 0px rgba(181,189,202,0.25); 
        >h2{
             font-size: 20px;
            font-family: Helvetica, Helvetica-Regular;
            font-weight: 400;
            text-align: left;
            color: #000000;
            line-height: 24px;
            letter-spacing: 1px;
            margin-bottom: 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            span{
                font-size: 12px;
                color: #a0a0a2;
            }
        }
        ul{
            li{
                margin-bottom: 43px;
                >h2{
                    font-size: 16px;
                    font-family: Helvetica, Helvetica-Regular;
                    font-weight: 400;
                    color: #000000;
                    line-height: 20px;
                    margin-bottom: 10px;
                }
                p{
                    font-size: 12px;
                    font-family: PingFangSC, PingFangSC-Medium;
                    font-weight: 500;
                    text-align: left;
                    color: #a0a0a2;
                    line-height: 17px;
                }
            }
            li:last-child{
                 margin-bottom:0px;
            }
        }
    }
}
.cloud{
 width: 100%;
 height: 284px;
 margin-top: 20px;
 padding:20px 28px ;
 background-color: #fff;
 border-radius: 4px;
box-shadow: 0px 10px 14px 0px rgba(181,189,202,0.25); 
 h2{
    font-size: 20px;
    font-family: Helvetica, Helvetica-Regular;
    font-weight: 400;
    text-align: left;
    color: #000000;
    line-height: 24px;
    letter-spacing: 1px;
  }
  .graph{
     height: 228px;
  }
}
</style>