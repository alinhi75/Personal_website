import './bootstrap';
import { createApp } from 'vue';
import App from  './component/App.vue';
import Projects from './component/Projects.vue';
import 'aos/dist/aos.css';
import AOS from 'aos';
// Initialize AOS after mounting Vue
AOS.init({
    duration: 1000,  // Animation duration
    once: true,      // Only animate once per scroll
  });
import Home from './component/Home.vue';
import About from './component/About.vue';
import Research from './component/Research.vue';
import tailwindConfig from '../../tailwind.config';
import Education from './component/Education.vue';
import Contact from './component/contactme.vue';
import skills from './component/skills.vue';
import Navbar from './component/Navbar.vue';
import Footer from './component/Footer.vue';
const app = createApp({});
app.component('navbar',Navbar);
app.component('footer-section',Footer);
app.component('home', Home);
app.component('about', About);
app.component('education', Education);
app.component('skills', skills);
app.component('Projects', Projects);
app.component('research', Research);
app.component('contact', Contact);
app.mount('#app');
