<template>
     <div class="swiper_box">
        <swiper class="swiper gallery-top" ref="myswiper" :options="swiperOption">
            <swiper-slide class="slide" v-for="(item, i) in swiperData" :key="i">
                    <img :src="item.url" alt="">
            </swiper-slide>
        </swiper>
        <!-- <div class="swiper-pagination"></div> -->
		<div class="swiper-button-prev"></div>
		<div class="swiper-button-next"></div>

    </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
 name:'Myswiper',
 data(){
  let that = this;
    return{
     swiperData:[
           {
               id:1,
               url:require('../assets/img/swiper1.png')
           },
            {
               id:2,
               url:require('../assets/img/swiper2.png')
           },
            {
               id:3,
               url:require('../assets/img/swiper3.png')
           },
       
       ],
        swiperOption: {
            autoplay:false,
			speed: 1000,
			autoplayDisableOnInteraction: false,
			loop: true,
			slidesPerView:'auto',
			centeredSlides: true,
			slidesPerView: 2,
			// pagination: '.swiper-pagination',
			// paginationClickable: true,
			// prevButton: '.swiper-button-prev',
			// nextButton: '.swiper-button-next',
            navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			onInit: function(swiper) {
				swiper.slides[2].className = "swiper-slide swiper-slide-active";
			},

       },
      
    }
 },
 components: {
    Swiper,
    SwiperSlide,
  },
computed: {
    swiper() {
   
      return this.$refs.myswiper.$swiper;
    },
  },
  mounted(){
   
        // this.slide = this.$refs.myswiper.$swiper.slides;
  }
}
</script>

<style lang="scss" scoped>


.swiper_box .swiper-container {
   width: 600px;
   height: 365px;
   position: relative;
    overflow: hidden;
    z-index: 1;
   .swiper-wrapper{
       position: relative;
        width: 100%;
        height: 100%;
        z-index: 1;
        display: flex;
        transition-property: transform;
        box-sizing: content-box;
        .swiper-slide {
            width: 188px;
            height: 249px;
             transform: scale(0.80);
            -webkit-transition: transform 1.0s;
            flex-shrink: 0;
            height: 100%;
             border-radius: 5px;
            position: relative;
            img{
                width: 100%;
                border-radius: 5px;
                display: block;
                height: 100%;
                border: none;
                
                 
            }
        }
        .swiper-slide-active{
            transform: scale(1.2);
            z-index: 1002;
            
        }

   }
}
.swiper-button-prev{
    left:-80px;
    color: #395ab6;
  
    &::after{
          font-size: 22px;
          font-weight: bold;
    }
}
.swiper-button-next{
    right: -80px;
    color: #395ab6;
     &::after{
          font-size: 22px;
           font-weight: bold;
    }
}






</style>