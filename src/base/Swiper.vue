<template>
    <!-- swiper -->
    <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
      <img :src="slide" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
  export default {
    props:['swiperSlides'],
    data() {
      return {
        loop: true, 
        swiperOption: {
          autoplay: {
            delay: 1000,
            // disableOnInteraction: true
          },
          autoHeight: true, 
          // setWrapperSize: true,
          // observeParents:true,
          pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
        }
        },
      }
    }
  }  
</script>
<style >
  img{
    width: 100%;
  }
 .swiper-pagination-bullet-active{
    /* opacity: 1; */
    background-color: #000 ;
 }
</style>