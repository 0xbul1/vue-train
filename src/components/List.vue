<template>
    <div>
        <Top>所有的宝贝</Top>
        <div class="content">
            <ul>
                <router-link v-for="(book,index) in books" :to="{name:'detail',params:{detailid:book.bookId}}" :key="index" tag="li">
                    <img v-lazy="book.bookCover">
                    <div class="text"> 
                        <h4>{{book.bookName}}</h4>
                        <p>{{book.bookInfo}}</p>
                        <div>{{book.bookPrice}}</div>
                        <button @click.stop=remove(book.bookId)>删了这货</button>
                    </div>
                </router-link>
            </ul>
            <button @click="more" v-if="hasMore" class="more">Click More</button>
            <div class="notmore" v-else>谋了  :-)</div>
        </div>
    </div>
</template>
<script>
    // import {getAllBooks,removeBook} from '../api'
    import {pagination,removeBook} from '../api'
    import Top from '../base/Top.vue'
    export default {
        data(){
            //offset代表偏移量
            //hasMore代表有没有更多
            return {msg: 'halo',books:[],offset:0,hasMore:true}
        },
        created(){
            this.getAllBooksData();
        },
        methods: {
            more(){
                this.getAllBooksData();
            },
            async remove(id){
                await removeBook(id);//删除某个图书传到后台
                //删除前台可以直接this.getAllBooksData();也可以
                this.books = this.books.filter(item=>item.bookId !== id);
            },
            // async  getAllBooksData(){
            //     this.books = await getAllBooks();
            // }
            async  getAllBooksData(){
                // this.books = await pagination(this.offset);
                if(this.hasMore){//有更多就获取数据
                    let {hasMore,books} = await pagination(this.offset);
                    // this.books = books;//获取的书放到books属性上，一次获取5个
                    this.books = [...this.books,...books]//这里前面是老书，后面是新书，老书不能丢
                    this.hasMore = hasMore;
                    this.offset = this.books.length//偏移量是总书的长度
                }

            }
        },
        computed: {},
        components: {
            Top
        }
    }
</script>
<style scoped>
    img{
        width: 50%;
    }
    .content {
        background: #000;
        color: #f90;
        padding: 0 20px;
    }
    .content ul li{
        display: flex;
        flex-wrap: wrap;
        margin: 40px 0;
    }
    .content .text {
        text-align: center;
        margin: 0   auto;
        
    }
    .content .text > *{
        margin: 10px 0;

    }
    .more {
        width: 90%;
        margin-bottom: 20px;
    }
    .notmore {
        text-align: center;
        margin-left: -20px;
        margin-bottom: 20px;
    }
    /* .content button {
        background: #f90;
        color: #000;
        padding: 10px 15px;
        border-radius: 5px;
        border: none;
        outline:none;
    } */
</style>