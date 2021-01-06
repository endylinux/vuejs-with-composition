import { createApp } from 'vue';

import router from "@/router";

import App from './App.vue';
import BaseCard from "@/components/ui/BaseCard";
import BaseSearch from "@/components/ui/BaseSearch";
import BaseContainer from "@/components/ui/BaseContainer";

const app = createApp(App);

app.use(router);

app.component('base-card', BaseCard);
app.component('base-search', BaseSearch);
app.component('base-container', BaseContainer);

app.mount('#app');
