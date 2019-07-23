<template>
    <div class="detail">
        <Top :back="true">详情页</Top> 
        <div class="detail-content">
            <ul>
                <li>
                    <label for="bookName">书名：</label>
                    <input type="text" v-model="book.bookName" id="bookName">
                </li>
                <li>
                    <label for="bookInfo">作者：</label>
                    <input type="text" v-model="book.bookInfo" id="bookInfo">
                </li>
                <!-- <li>
                    <label for="bookCover">图片：</label>
                    <input type="text" v-model="book.bookCover" id="bookCover">
                </li> -->
                <li>
                    <label for="bookPrice">改价：</label>
                    <input type="number" v-model.number="book.bookPrice" id="bookPrice">
                </li>
                <li>
                    <button @click="update">改一下</button>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import Top from '../base/Top.vue'
    import {findOneBook,updateBook} from '../api'
    export default {
        data(){
            return {book:{}}
        },
        watch:{
            $route(){//只要页面detail的id变化就刷新数据，
                this.getData();
            }
        },
        created(){
            //页面一加载，需要根据id发送请求
            this.getData();
        },  
        methods: {
            async update(){//修改图书信息
                await updateBook(this.getDetailId,this.book);
                this.$router.push('/list');//修改完成跳到列表页
            },
            async getData(){
                this.book = await findOneBook(this.getDetailId);
                //如果是空对象，需要跳转回列表页
                // JSON.stringify(this.book)==='{}';
                //将对象变成数组
                Object.keys(this.book).length>0 ?void 0:this.$router.push('/list')
            }
        },
        computed: {
            getDetailId(){
                return this.$route.params.detailid;
            }
        },
        components: {
            Top
        }
    }
</script>
<style scoped>
.detail {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #000;
    color: #f60;
    z-index: 1;
}
.detail-content {
    text-align: center;
    margin: 50px 0 ;
}
/* ul {
    margin-top: 50px ;
    
} */
ul li {
    margin: 20px 0;
}
ul li:last-child {
    text-align: center
}
input {
    padding: 10px;
    border: none;
    border-radius: 5px;
}
</style>