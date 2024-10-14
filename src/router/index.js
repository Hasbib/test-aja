import { createRouter, createWebHistory } from "vue-router";

import Index from '../pages/Index.vue';
import Login from '../pages/auth/Login.vue'
import Registrasi from '../pages/auth/Registrasi.vue'

const routes = [
    { path: '/', component: Index },
    { path: '/login', component: Login },
    { path: '/registrasi', component: Registrasi },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
export default router;

