<template>
  <div id="cloud"></div>
</template>

<script>
import "echarts-wordcloud/dist/echarts-wordcloud";
import "echarts-wordcloud/dist/echarts-wordcloud.min";

export default {
 name:"cloud",
 data(){
   return{

   }
 },
 props:['data'],
 watch:{
   data(newval,oldval){
      if(newval !== oldval){
          this.$nextTick(()=>{
               this.getOption();
          })
      }
   }
 },
 methods:{
        getOption(){
           
            let mychart =  this.echarts.init(document.getElementById('cloud'));
            let datas = [
                  {
              name: "十九大精神",
              value: 15000
            },
            {
              name: "两学一做",
              value: 10081
            },{
              name: "中华民族",
              value: 9386
            },
            {
              name: "马克思主义",
              value: 7500
            },
            {
              name: "民族复兴",
              value: 7500
            },
            {
              name: "社会主义制度",
              value: 6500
            },
            {
              name: "国防白皮书",
              value: 6500
            },
            {
              name: "创新",
              value: 6000
            },
            {
              name: "民主革命",
              value: 4500
            },
            {
              name: "文化强国",
              value: 3800
            },
            {
              name: "国家主权",
              value: 3000
            },
            {
              name: "伟大复兴",
              value: 2500
            },
            {
              name: "领土完整",
              value: 2300
            },
            {
              name: "安全",
              value: 2000
            },
            {
              name: "从严治党",
              value: 1900
            },
            {
              name: "现代化经济体系",
              value: 1800
            },
            {
              name: "国防动员",
              value: 1700
            },
            {
              name: "信息化战争",
              value: 1600
            },
            {
              name: "局部战争",
              value: 1500
            },
            {
              name: "教育",
              value: 1200
            },
            {
              name: "中国梦",
              value: 1100
            },
            {
              name: "孙子兵法",
              value: 900
            },
            {
              name: "一国两制",
              value: 800
            },
            {
              name: "特色社会主义思想",
              value: 700
            },
           ]



      let option = {
        tooltip: {
            show: true,
            position: 'top',
            textStyle: {
                fontSize: 30
            }
        },
        series: [{
            type: "wordCloud",
            // 网格大小，各项之间间距
            gridSize: 30,
            // 形状 circle 圆，cardioid  心， diamond 菱形，
            // triangle-forward 、triangle 三角，star五角星
            shape: 'circle',
            // 字体大小范围
            sizeRange: [20, 50],
            // 文字旋转角度范围
            rotationRange: [0, 90],
            // 旋转步值
            rotationStep: 90,
            // 自定义图形
            // maskImage: maskImage,
            left: 'center',
            top: 'center',
            right: null,
            bottom: null,
            // 画布宽
            width: '90%',
            // 画布高
            height: '80%',
            // 是否渲染超出画布的文字
            drawOutOfBound: false,
            textStyle: {
                normal: {
                    color: function() {
                        return 'rgb(' + [
                            Math.round(Math.random() * 200 + 55),
                            Math.round(Math.random() * 200 + 55),
                            Math.round(Math.random() * 200 + 55)
                        ].join(',') + ')';
                    }
                },
                emphasis: {
                    shadowBlur: 10,
                    shadowColor: '#2ac'
                }
            },
            data: datas
        }]
       };
       mychart.setOption(option);
     }
 },
 mounted(){
   
      this.$nextTick(()=>{
            this.getOption();
        })
 }
}
</script>

<style lang="scss" scoped>
 #cloud{
     width: 100%;
     height: 100%;
 }
</style>