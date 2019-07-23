import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
// import Home from '../components/Home.vue'
// import List from '../components/List.vue'
// import Guide from '../components/Guide.vue'
// import Add from '../components/Add.vue'
// import Detail from '../components/Detail.vue'

export default new Router({
  routes: [
    // 缓存注释
    // {path:'*',component:Home},
    {path:'/',redirect:'/home'},
    // {path:'/home',component:Home,meta:{keepAlive:true}},//this.$route.meta.keepAlive
    // 代码分割注释
    // {path:'/home',component:Home},
    {path:'/home',component:()=>import('../components/Home.vue') },
    {path:'/list',component:()=>import('../components/List.vue')},
    {path:'/guide',component:()=>import('../components/Guide.vue')},
    {path:'/add',component:()=>import('../components/Add.vue')},
    {path:'/detail/:detailid',component:()=>import('../components/Detail.vue'),name:'detail'},
    {path:'*',redirect:'/home'}
  ]
})
