<template>
    <div class="header">
        <slot></slot>    
       <i class="iconfont icon-fanhui" v-if="back" @click="goBack"></i>
    </div>
</template>
<script>
    export default {
        props:{
            back:{
                type:Boolean,
                default:false
            }
        },
        data(){
            return {msg: 'halo'}
        },
        created(){},
        methods: {
            goBack(){
                this.$router.go(-1);
            }
        },
        computed: {},
        components: {}
    }
</script>
<style scoped lang="less">
    .header{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        background: #000;
        color: #f60;
        height: 40px;
        line-height: 40px;
        text-align: center;
        i{
            position: absolute;
            font-size: 20px;
            left: 10px;
        }
    }
    
</style>