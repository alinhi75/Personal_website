<template>
    <div class="bg-gray-900 text-white py-16" data-aos="fade-up">
      <div class="max-w-5xl mx-auto text-center px-8">
        <h2 class="text-5xl font-bold text-primary mb-8 tracking-wide">
          My Projects
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div v-for="(project, index) in projects" :key="project.id"
               class="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
               :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
               :data-aos-delay="index * 150">
            <h3 class="text-xl font-semibold text-blue-400">{{ project.title }}</h3>
            <p class="text-gray-400 mt-2">{{ project.description }}</p>
            <a :href="project.link" target="_blank" class="text-primary hover:text-indigo-400 mt-4 block">View Project</a>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        projects: [
          { id: 1, title: "VSABT Project", description: "Internship position and co-operate for 6 months at this project", link: "https://github.com/VSABT" },
          { id: 2, title: "PACMAN Game With ARM ", description: "This project is a Pac-Man game developed for the LandTiger LPC1768 board. It demonstrates the use of the KEIL software debug environment to simulate and test embedded systems. The game implements core Pac-Man mechanics, including navigation through a maze, scoring, power-ups, and a countdown timer.", link: "https://github.com/alinhi75/Pac-Man-Game-ARM-" },
          { id: 3, title: "Kiruna Explorer", description: "Interactive platform designed to enhance exploration and navigation of the Kiruna region", link: "https://github.com/alezemelo/SE2_KirunaExplorer" },
          { id: 4, title: "EZelectronics", description: "Software application designed to help managers of electronics stores to manage their products and offer them to customers through a dedicated website", link: "https://github.com/alinhi75/EZelectronics" },
          { id: 5, title: "Meme Game", description: "Single-player web application inspired by the popular 'What do you meme?' board game", link: "https://github.com/alinhi75/MemeGame" },
          { id: 6, title: "Portfolio Website", description: "Laravel + Vue website for showcasing work.", link: "https://alinoohi.com" },
          { id: 7, title: "Twitter Clone (Laravel)", description: "Simplified clone of Twitter built using Laravel", link: "https://github.com/alinhi75/Twitter-Laravel-" },



        ]
      };
    }
  };
  </script>
