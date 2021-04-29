<template>
   <div class="header">
        <div class="header_box">
                <div class="logo" @click="handleRouter('/')">
                       <img src="../assets/img/logo1.png" alt="">
                       <h3>创新方法新系统推广网站</h3>
                </div>
                <ul>
                    <!-- <li v-for="item in menu" :key="item.path" :class="item.isactive?'active':''" @click="handleClick(item)">{{item.title}}</li> -->
                    <li :class="curpath == '/'?'active':''" @click="handleClick('/')">首页</li>
                    <li :class="(curpath == '/systemintro' || curpath == '/teamintro' || curpath == '/systemframework' || curpath == '/projectintro')?'active':''" @click="handleClick('/systemintro')">系统介绍</li>
                    <li :class="curpath == '/learncenter'?'active':''" @click="handleClick('/learncenter')">学习中心</li>
                    <li :class="curpath == '/puttedforward'?'active':''" @click="handleClick('/puttedforward')">案例库</li>
                    <li :class="curpath.includes('/toollibrary')?'active':''" @click="handleClick('/toollibrary')">工具库</li>
                </ul>
                <div class="search">
                        <Input placeholder="请输入关键字" style="width: auto" prefix="ios-search"/>
                         <span>搜索</span>
                </div>
        </div>
   </div>
</template>

<script>
export default {
 name:'Header',
 data(){
     return{
         curpath:'/'
       
     }
 },
 methods:{
      //切换菜单
      handleClick(path){
         this.$router.push(path);
      },
      handleRouter(path){
           this.$router.push(path);
      }
 },
 mounted(){
     this.curpath = window.location.pathname;
     //  if(pathName ==='/'){
         
     //       this.menu[0].isactive=true;
     //  }else{
         
     //       this.menu[0].isactive=false;
     //  }
     // this.menu= this.menu.map((item,i)=>{
     //      if(pathName ==='/' && item.path ==pathName){
     //           item.isactive = true;
     //       }else if(pathName!=='/'){
     //           if(pathName.includes(item.path) && item.path !=='/'){
                  
     //                item.isactive = true;
     //           }
     //           else{
                  
     //                item.isactive = false;
     //           }
     //       }       
       
     //       return item;
     //  })
      
 }
}
</script>

<style class="header" lang="scss">
.header{
 background: #fff;
}
 .header_box{
   height: 80px;
   width:68% ;
   margin: 0 auto;
  
   display: flex;
   justify-content: space-between;
   align-items: center;
   .logo{
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        >img{
             width: 52px;
             height: 46px;
             margin-right: 10px;
        }
        h3{
             font-size: 20px;
          font-family: PingFangSC, PingFangSC-Medium;
          font-weight: 550;
          text-align: left;
          color: #0749ca;
          line-height: 25px;
          opacity: 1;
        }
   }
   ul{
       display: flex;
       li{
           font-size: 18px;
          font-family: PingFangSC, PingFangSC-Regular;
          font-weight: 400;
          text-align: left;
          color: #658DDc;
          line-height: 25px;
          margin: 0 15px;
          position: relative;
         cursor: pointer;
       }
       li.active{
            font-weight: bold;
            color: #0749CA;
       }
   }
   .search{
        display: flex;
        >span{
             width: 48px;
               height: 32px;
               opacity: 1;
               background: #03b6ae;
               border-radius: 0px;
              display: flex;
              justify-content: center;
              align-items: center;
              color: #fff;
              font-size: 12px;
                  margin-left: -1px;
                   
        }
   }
 }
 
 .active::after{
     // border-bottom: 4px solid #0749CA;
        content: "";
          width: 30px;
          height: 3px;
          border-radius: 1px;
          padding: 0 10px;
          background:#0749CA;
          position: absolute;
          left: 50%;
          bottom: -8px;
          transform: translate(-50%, -50%);
 }
</style>