<template>
   <div class="footer">
        <ul>
            <!-- <li v-for="item in nav" :key="item.path" @click="handleRouter(item)">{{item.title}}</li> -->
            <li @click="handleRouter('')">关于我们</li>
            <li>|</li>
            <li @click="handleRouter('/link')">联系我们</li>
            <li>|</li>
            <li @click="handleRouter('')">隐私政策</li>
            <li>|</li>
            <li @click="handleRouter('')">友情链接</li>
        </ul>
        <p>2020 The TSK NET，all rights reserved</p>
   </div>
</template>

<script>
export default {
 name:'Footer',
 data(){
    return{
        
    }
 },
 methods:{
     handleRouter(path){
         this.$router.push(path);
     }
 }
}
</script>

<style lang="scss" scoped>
 .footer{
     height: 96px;
     background: #232930;
     display: flex;
     justify-content: center;
     align-items: center;
     ul{
         margin-right: 68px;
         display: flex;
         li{
            font-size: 14px;
            font-family: PingFangSC, PingFangSC-Medium;
            font-weight: 500;
            text-align: left;
            color: #ffffff;
            line-height: 20px;
            margin-right: 20px;
            cursor: pointer;
         }
     }
     p{
         font-size: 14px;
        font-family: Menlo, Menlo-Regular;
        font-weight: 400;
        text-align: left;
        color: #ffffff;
        line-height: 16px;
     }
 }
</style>