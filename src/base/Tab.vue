<template>
    <div class="footer">
        <router-link to="/home">
            <i class="iconfont icon-shouye1"></i>
            <span>首页</span>
        </router-link>
        <router-link to="/list">
            <i class="iconfont icon-liebiaoyemian icon-star"></i>
            <span>列表</span>
        </router-link>
        <router-link to="/add">
            <i class="iconfont icon-add"></i>
            <span>添加</span>
        </router-link>
        <router-link to="/guide">
            <i class="iconfont icon-liebiaoyemian"></i>
            <span>指南</span>
        </router-link>
    </div>
</template>
<script>
    export default {
    
    }
</script>
<style scoped lang="less">
    .footer{
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 50px;
        display: flex;
        a{
            display: flex;
            flex-direction: column;
            flex: 1;
            align-items: center;
            justify-content: center;
            color: #ccc;
            background: #000;
            i {
                font-size: 25px;
            }
            span{
                font-size: 12px;
            }
        } 
        a.router-link-active{
            color:#f60;
        }
    }
</style>