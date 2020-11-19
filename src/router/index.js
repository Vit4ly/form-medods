import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Form',
    component: () => import('../views/Form.vue'),
  },
  {
    path: '/message',
    name: 'Message',

    component: () => import('../views/Message.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
