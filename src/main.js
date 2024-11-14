import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import HomePage from './pages/HomePage.vue';

import HeaderSection from './components/sections/common/HeaderSection.vue';
import FooterSection from './components/sections/common/FooterSection.vue';

const router = createRouter({
    history: createWebHistory('vue-site'),
    routes: [
        { path: '/', component: HomePage},
        { path: '/services', component: () => import('./pages/ServicesPage.vue')},
        { path: '/company', component: () => import('./pages/CompanyPage.vue')},
        { path: '/blog', component: () => import('./pages/BlogPage.vue')},
        { path: '/case-studies', component: () => import('./pages/CaseStudyPage.vue')},
        { path: '/:pathMatch(.*)*', redirect: '/' }
    ]
});
const app = createApp(App);

app.use(router);

app.component('header-section', HeaderSection)
    .component('footer-section', FooterSection);

app.mount('#app');
