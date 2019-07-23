<template>
    <div class="add">
        <Top>添加</Top> 
        <div class="add-content">
            <ul>
                <li>
                    <label for="bookName">名称：</label>
                    <input type="text" v-model="book.bookName" id="bookName" placeholder="eg:白日梦想家">
                </li>
                <li>
                    <label for="bookInfo">信息：</label>
                    <input type="text" v-model="book.bookInfo" id="bookInfo"placeholder="这里放你想加的备注">
                </li>
                <li>
                    <label for="bookCover">图片：</label>
                    <input type="text" v-model="book.bookCover" id="bookCover"placeholder="地址错了可别让我逮到了">
                </li>
                <li>
                    <label for="bookPrice">价格：</label>
                    <input type="number" v-model.number="book.bookPrice" id="bookPrice"placeholder="这只能放数字，价格or评分?">
                </li>
                <li>
                    <button @click="add">加一个</button>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import Top from '../base/Top.vue'
    import {addBook} from '../api'
    export default {
        data(){
            return {book: {}}
        },
        created(){},
        methods: {
            async add(){
                await addBook(this.book);
                this.$router.push('/list');
            }
        },
        computed: {},
        components: {
            Top
        }
    }
</script>
<style scoped>
.add {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #000;
    color: #f60;
}
.add-content {
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