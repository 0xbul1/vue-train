<template>
  <div id="app">
    <!-- 缓存后轮播有BUG,俺不敢用 -->
    <!-- <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive> -->
    <!-- 正常的其他渲染走这个 -->
    <!-- <router-view v-if="!$route.meta.keepAlive"></router-view> -->
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
    <router-view></router-view>
    </transition>
    <Tab></Tab>
  </div>
</template>

<script>
import Tab from './base/Tab.vue'  
export default {
  name: 'App',
  components:{
    Tab
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  font-weight: bold;
  
}
ul li{
  list-style: none;
}
a {
  text-decoration: none
}
input,button {
  /* 按钮默认渲染 */
  -webkit-appearance: none
}
.content{
  position: fixed;
  width: 100%;
  top: 40px;
  bottom: 50px;
  overflow: auto;
  /* overflow: scroll; */
}
 button {
        background: #f90;
        color: #000;
        padding: 10px 15px;
        border-radius: 5px;
        border: none;
        outline:none;
}
</style>
