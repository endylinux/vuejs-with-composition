import { createApp } from 'vue';
import store from './store/index.js';

import router from "@/router";

import App from './App.vue';
import loggerMixin from './components/reusabilityConcepts/mixins/logger.js';

import BaseCard from "@/components/ui/BaseCard";
import BaseSearch from "@/components/ui/BaseSearch";
import BaseContainer from "@/components/ui/BaseContainer";


const app = createApp(App);
app.mixin(loggerMixin);

app.use(router);
app.use(store);

app.component('base-card', BaseCard);
app.component('base-search', BaseSearch);
app.component('base-container', BaseContainer);




app.mount('#app');
