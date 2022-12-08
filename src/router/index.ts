import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
export const routesName = {
  home: {
    name: 'home'
  }
}
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: routesName.home.name,
    component: () =>
      import(/* webpackChunkName: "project" */ '@/views/home/index.vue'),
    meta: {
      layout: 'LayoutDefault'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
