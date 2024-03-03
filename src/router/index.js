import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '',
      name: 'customer',
      component: () => import('../views/customer/CustomerMainView.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/customer/HomeView.vue'),
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('../views/customer/AboutView.vue'),
        },
        {
          path: 'products',
          name: 'products',
          component: () => import('../views/customer/ProductListView.vue'),
        },
        {
          path: 'product/:id',
          name: 'product',
          component: () => import('../views/customer/ProductView.vue'),
        },
        {
          path: 'contact',
          name: 'contact',
          component: () => import('../views/customer/ContactView.vue'),
        },
        {
          path: 'cart',
          name: 'cart',
          component: () => import('../views/customer/CartView.vue'),
        },
      ],
    },
  ],
});

export default router;
