import { createApp } from 'vue';

import router from "@/router";

import App from './App.vue';
import BaseCard from "@/components/ui/BaseCard";

const app = createApp(App);

app.use(router);

app.component('base-card', BaseCard);

app.mount('#app');
