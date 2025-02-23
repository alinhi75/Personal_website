<template>
    <div class="bg-gray-900 text-white min-h-screen">

      <!-- Hero Section -->
      <section class="flex flex-col items-center justify-center h-screen text-center">
        <h1 class="text-5xl font-bold mb-4 animate-fade-in">
          Hi, I'm <span class="text-primary">Sayedali Noohi</span>
        </h1>
        <p class="text-xl text-gray-300 animate-slide-in">
          Master's Student in Computer Engineering | Software Developer
        </p>
        <div class="mt-6">
          <a href="#projects"
             class="bg-primary text-white px-6 py-3 rounded-lg shadow-lg text-lg hover:bg-indigo-600 transition duration-300">
            View My Work
          </a>
            <a href="#skills"
                 class="ml-4 bg-gray-700 text-white px-6 py-3 rounded-lg shadow-lg text-lg hover:bg-gray-600 transition duration-300">
                My Skills
                </a>

          <a href="#contact"
             class="ml-4 bg-gray-700 text-white px-6 py-3 rounded-lg shadow-lg text-lg hover:bg-gray-600 transition duration-300">
            Contact Me
          </a>
          <a href="#about">
            <button class="ml-4 bg-gray-700 text-white px-6 py-3 rounded-lg shadow-lg text-lg hover:bg-gray-600 transition duration-300">
              About Me
            </button>
          </a>

        </div>
      </section>
      <!-- Projects Section -->
      <section id="projects" class="py-16 px-8 bg-gray-800">
        <div class="max-w-5xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-primary">My Projects</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <div v-for="project in projects" :key="project.id" class="bg-gray-700 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <h3 class="text-xl font-semibold">{{ project.title }}</h3>
              <p class="text-gray-400 mt-2">{{ project.description }}</p>
              <a :href="project.link" target="_blank" class="text-primary hover:text-indigo-400 mt-4 block">View Project</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        skills: [
          { name: "HTML", image: "/images/html.png" },
          { name: "CSS", image: "/images/css.png" },
          { name: "JavaScript", image: "/images/javascript.png" },
          { name: "Laravel", image: "/images/laravel.png" }
        ],
        projects: [
          { id: 1, title: "Portfolio Website", description: "Laravel + Vue website for showcasing work.", link: "#" },
          { id: 2, title: "Meme Game", description: "Single-player web application inspired by the popular 'What do you meme?' board game", link: "https://github.com/alinhi75/MemeGame" },
          { id: 3, title: "EZelectronics", description: " software application designed to help managers of electronics stores to manage their products and offer them to customers through a dedicated website", link: "https://github.com/alinhi75/EZelectronics" },
          { id: 4, title: "Twitter Clone (Laravel)", description: "simplified clone of Twitter built using Laravel", link: "https://github.com/alinhi75/Twitter-Laravel-" },
          { id: 5, title: "Kiruna Explorer", description: "Kiruna Explorer is an interactive platform designed to enhance exploration and navigation of the Kiruna region", link: "https://github.com/alezemelo/SE2_KirunaExplorer" },
          { id: 6, title: "VSABT Project", description: "Internship position and co-operate for 6 month at this project", link: "https://github.com/VSABT" },
        ]
      };
    }
  };
  </script>

  <style>
  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .animate-fade-in {
    animation: fade-in 1s ease-in-out;
  }

  @keyframes slide-in {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  .animate-slide-in {
    animation: slide-in 1s ease-in-out;
  }
  </style>
