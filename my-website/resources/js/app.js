import './bootstrap';
import { createApp } from 'vue';
import App from  './component/App.vue';
import Projects from './component/Projects.vue';

const app = createApp({});
app.component('home', Home);
app.component('projects', Projects);
app.component('research', Research);
app.component('contact', Contact);
createApp(App).mount('#app');
