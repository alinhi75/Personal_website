import './bootstrap';
import { createApp } from 'vue';
import App from  './component/App.vue';
import Projects from './component/Projects.vue';
import Home from './component/Home.vue';
import About from './component/About.vue';
import Research from './component/Research.vue';
import tailwindConfig from '../../tailwind.config';
import Education from './component/Education.vue';
import Contact from './component/contactme.vue';
const app = createApp({});
app.component('home', Home);
app.component('about', About);
app.component('education', Education);
app.component('research', Research);
app.component('contact', Contact);
app.mount('#app');
