import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../components/LoginPage.vue';
import ContactPage from '../components/ContactPage.vue';
import HomePage from '../components/HomePage.vue';
import MyAccountPage from '../components/MyAccountPage.vue';

const routes = [
  { path: '/', component: LoginPage },
  { path: '/home', component: HomePage },
  { path: '/contact', component: ContactPage },
  { path: '/myaccount', component: MyAccountPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;