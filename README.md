## 基础信息
- mock 模拟数据
- api 代表所有接口
- base 基础组件一般可复用
- components 页面级组件(不能复用)

## 热门图书功能

- 先写服务端，确保数据可以正常返回
- 增加api方法，实现调取数据的功能
- 在哪个组件中使用这个api，如果是基础组件需要使用这些数据，在父级中调用这个方法，将数据传递给基础组件
- 写基础组件的步骤
    - 创建组件，注册组件，引用组件
        - 创建一个.vue文件
        - 在需要使用这个组件的父级引用这个组件
        - 在组件中注册
        - 以标签的形式引入
    - 相比较于es6模块
        - 定义模块，导出模块，使用模块


## 路由元信息

## 上拉加载，下拉刷新

- 默认每次给5个，前端告诉后台现在要从第几条开始给我
- page?offset = 5
- 后台返回还要告诉前端是否有更多的数据 hasMore:true

## coding split 代码分割
