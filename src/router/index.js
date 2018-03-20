import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
// const DragTable = resolve => require(['@/components/DragTable'], resolve);
const index = resolve => require(['@/views/index'], resolve);

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: index
    }
    // {
    //   path: '/DragTable',
    //   name: '可拖拽排序表格',
    //   component: DragTable
    // }
  ]
})
