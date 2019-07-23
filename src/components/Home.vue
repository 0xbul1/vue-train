<template>
    <div>
        <Top>首页</Top>
        <!-- <Top :back="true">首页</Top> -->
        <div class="content">
            <!-- <div v-if="loading">加载中。。。</div> -->
            <Loading v-if="loading"></Loading>
            <template v-else>
            <Swiper :swiperSlides='sliders'></Swiper>
            <div class="container">
            <h3>最近添加</h3>
            <ul>
                <li v-for="hotBook in hotBooks">
                    <img v-lazy="hotBook.bookCover">
                     <div>{{hotBook.bookName}}</div>
                        <div>{{hotBook.bookInfo}}</div>
                </li>
            </ul>
            </div>
            </template>
        </div>
    </div>
</template>
<script>
    import Top from '../base/Top.vue'
    import Swiper from '../base/Swiper.vue'
    // import {getSliders,getHotBooks} from '../api'
    import {getAll} from '../api'
    import Loading from '../base/Loading.vue'
    export default {
        created(){
        //    this.getSlider();//获取轮播图
        //    this.getHotBook();//获取轮播图
        this.getData();
        },
        data(){
            return {sliders: [],hotBooks:[],loading:true}
        },
        methods: {
            // async getHotBook(){
            // this.hotBooks = await getHotBooks();
            // },
            // async getSlider(){
            // this.sliders = await getSliders();
            // }
            async getData(){
                let [sliders,hotBooks] = await getAll();
                this.sliders = sliders;
                this.hotBooks = hotBooks;
                this.loading = false;
            }

        },
        computed: {},
        components: {
            Top,
            Swiper,
            Loading
        }
    }
</script>
<style scoped lang="less">
   .content {
       background: #000;
       color: #f90;
   }
   .container {
       width: 80%;
       margin: 0 auto;
   }
   h3{
       margin: 10px;
       text-align: center;
   }
   ul {
       display: flex;
       flex-wrap: wrap; 
       li{
        width: 50%;
        text-align: center;
        margin:  10px 0 ;
        img{
            width: 80%;
        }
       }
   }
</style>