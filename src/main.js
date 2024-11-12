import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import BlogPage from './pages/BlogPage.vue';
import CaseStudyPage from './pages/CaseStudyPage.vue';

import HeaderSection from './components/sections/HeaderSection.vue';
import FooterSection from './components/sections/FooterSection.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/blog', component: BlogPage},
        { path: '/case-studies', component: CaseStudyPage},
    ]
});
const app = createApp(App);

app.use(router);

app.component('header-section', HeaderSection)
    .component('footer-section', FooterSection);

app.mount('#app');
