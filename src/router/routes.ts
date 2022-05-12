import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },

  {
    path: '/auth',
    name: 'auth',
    component: () => import('src/layouts/AuthLayout.vue'),
    children: [
      {
        path: 'sign-in/',
        name: 'sign-in',
        component: () => import('src/pages/sign-in/SignIn.vue'),
      },
      {
        path: 'sign-up/',
        name: 'sign-up',
        component: () => import('src/pages/sign-up/SignUp.vue'),
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
