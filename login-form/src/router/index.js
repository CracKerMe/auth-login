import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/Login/login.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/pages/Login/register.vue'),
  },
  {
    path: '/auth',
    component: () => import('@/pages/Auth/index.vue'),
    children: [
      {
        name: 'ForgottenPassword',
        path: 'forgotten-password',
        component: () => import('@/pages/Auth/forgotten-password.vue'),
      },
      {
        name: 'ResetPassword',
        path: 'reset-password',
        component: () => import('@/pages/Auth/reset-password.vue'),
      },
      {
        name: 'CancelSubscription',
        path: 'cancel-subscription',
        component: () => import('@/pages/Auth/cancel-subscription.vue'),
      },
    ],
  },
  {
    // 匹配不到的情况
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/pages/NotFound.vue'),
  },
];
const router = createRouter({
  // history: createMemoryHistory(),
  history: createWebHistory(),
  routes,
});

export default router;
