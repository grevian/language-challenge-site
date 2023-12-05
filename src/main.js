import { createApp } from 'vue';
import App from './App.vue';

import { createRouter, createWebHashHistory } from 'vue-router';

import { Inkline, components } from '@inkline/inkline';
import '@inkline/inkline/css/index.scss';
import '@inkline/inkline/css/utilities.scss';

import './css/variables/index.scss';

import './assets/main.css';
import LanguageResource from "./components/LanguageResource.vue";
import Instructions from "./components/Instructions.vue";
import About from "./components/About.vue";
import LanguageList from "./components/LanguageList.vue";

const routes = [
    { path: '/', component: Instructions, name: 'Home' },
    { path: '/about', component: About, name: 'About' },
    { path: '/languages', component: LanguageList, name: 'Languages' },
    { path: '/languages/:language', component: LanguageResource, name: 'Language', props: true },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
})

createApp(App).use(Inkline, { components }).use(router).mount('#app');
