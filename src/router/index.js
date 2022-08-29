import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home/home.vue'
// import Element from '@/views/element/index.vue'
// import Echarts from '@/views/echarts/index.vue'
// import Dthree from '@/views/dThree/index.vue'
// import Iview from '@/views/iview/index.vue'
// import vxeTable from '@/views/vxeTable/index.vue'

// import Line from '@/components/echarts/airLines.vue'
// import Pie from '@/components/echarts/pie.vue'
// // import Liquid from '@/components/echarts/liquidFill.vue'

// import project from '@/components/echarts/project.vue'
// import VxeTable from '@/views/vxeTable/index.vue'

// import Select from '@/components/element/select.vue'
// import Search from '@/components/element/search.vue'

// import table from '@/components/vxeTable/table.vue'

Vue.use(Router)

export default new Router({
  mode: 'history', // 地址栏没有#
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    },
    // {
    //   path: '/element',
    //   name: 'Element',
    //   component: Element,
    //   redirect: '/element/select',
    //   children: [{
    //       path: 'select',
    //       component: Select
    //     },
    //     {
    //       path: 'search',
    //       component: Search
    //     },
    //     {
    //       path: 'yingJiYanLianGuanLi',
    //       component: () => import('@/components/element/yingJiYanLianGuanLi')
    //     },
    //     {
    //       path: 'yingJiWuZhiYuSheBei',
    //       component: () => import('@/components/element/yingJiWuZhiYuSheBei')
    //     },
    //     {
    //       path: 'yingJiKongJianYuSheShi',
    //       component: () => import('@/components/element/yingJiKongJianYuSheShi')
    //     },
    //     {
    //       path: 'expertTeam',
    //       component: () => import('@/components/element/expertTeam')
    //     },
    //     {
    //       path: 'jianCeJiGou',
    //       component: () => import('@/components/element/jianCeJiGou')
    //     },
    //     {
    //       path: 'zhengFuYingJiRenYuan',
    //       component: () => import('@/components/element/zhengFuYingJiRenYuan')
    //     },
    //     {
    //       path: 'qiYeYingJiRenYuan',
    //       component: () => import('@/components/element/qiYeYingJiRenYuan')
    //     },
    //     {
    //       path: 'shiJianAnLiKu',
    //       component: () => import('@/components/element/shiJianAnLiKu')
    //     },
    //     {
    //       path: 'faLvFaGuiKu',
    //       component: () => import('@/components/element/faLvFaGuiKu')
    //     },
    //     {
    //       path: 'jiShuGuiFanKu',
    //       component: () => import('@/components/element/jiShuGuiFanKu')
    //     },
    //     {
    //       path: 'huanJingFengXianWuZiKu',
    //       component: () => import('@/components/element/huanJingFengXianWuZiKu')
    //     },
    //     {
    //       path: 'zhiBanGuanLi',
    //       component: () => import('@/components/element/zhiBanGuanLi')
    //     },
    //   ]
    // },
    // {
    //   path: '/echarts',
    //   name: 'Echarts',
    //   component: Echarts,
    //   redirect: '/echarts/line',
    //   children: [{
    //       path: '/echarts/line',
    //       component: Line
    //     },
    //     {
    //       path: '/echarts/pie',
    //       component: Pie
    //     },
    //     {
    //         path: '/vxeTable',
    //         name: 'vxeTable',
    //         component: vxeTable,
    //         children: [
    //             {
    //                 path: '/vxeTable/table',
    //                 component: table
    //             },
    //         ]
    //     },
    //     {
    //         path: '/dthree',
    //         name: 'Dthree',
    //         component: Dthree
    //     },
    //     {
    //       path: 'project',
    //       component: project
    //     }
    //   ]
    // },
    // {
    //   path: '/dthree',
    //   name: 'Dthree',
    //   component: Dthree
    // },
    // {
    //   path: '/iview',
    //   name: 'Iview',
    //   component: Iview
    // },
    // {
    //   path: '/vexTable',
    //   name: 'VexTable',
    //   component: VxeTable
    // }
  ]
})
