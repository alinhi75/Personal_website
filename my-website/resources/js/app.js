import './bootstrap';
import { createApp } from 'vue';
import App from  './component/App.vue';
import Projects from './component/Projects.vue';

const app = createApp({});
app.component('project', Projects);

createApp(App).mount('#app');
