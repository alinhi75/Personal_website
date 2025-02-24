<template>
    <div class="bg-gray-900 text-white py-16 px-4" data-aos="fade-up">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-5xl font-bold text-primary mb-10 tracking-wide">
          My Projects
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(project, index) in projects" :key="project.id"
               class="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 text-left relative group"
               :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
               :data-aos-delay="index * 150">

            <h3 class="text-lg sm:text-xl font-semibold text-blue-400">{{ project.title }}</h3>
            <p class="text-gray-300 mt-2 text-sm line-clamp-3">
              {{ project.description }}
            </p>

            <div class="flex justify-between items-center mt-4">
              <a :href="project.link" target="_blank"
                 class="text-primary hover:text-indigo-400 font-medium">
                View Project
              </a>
              <button @click="openModal(project)" class="text-gray-300 hover:text-white text-sm">
                More Details
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Project Modal -->
      <div v-if="selectedProject" class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-6">
        <div class="bg-gray-800 p-6 rounded-xl shadow-xl max-w-2xl w-full text-left">
          <h3 class="text-xl font-semibold text-blue-400">{{ selectedProject.title }}</h3>
          <p class="text-gray-300 mt-2 text-sm">{{ selectedProject.description }}</p>

          <div class="mt-4 flex justify-between">
            <a :href="selectedProject.link" target="_blank"
               class="text-primary hover:text-indigo-400 font-medium">
              Visit Project
            </a>
            <button @click="selectedProject = null" class="text-red-400 hover:text-red-300">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        selectedProject: null,
        projects: [
          {
            id: 1,
            title: "VSABT Project",
            description: "Internship position and co-operate for 6 months at this project.",
            link: "https://github.com/VSABT"
          },
          {
            id: 2,
            title: "PACMAN Game With ARM",
            description: "This project is a Pac-Man game developed for the LandTiger LPC1768 board. It demonstrates the use of the KEIL software debug environment to simulate and test embedded systems. The game implements core Pac-Man mechanics, including navigation through a maze, scoring, power-ups, and a countdown timer.",
            link: "https://github.com/alinhi75/Pac-Man-Game-ARM-"
          },
          {
            id: 3,
            title: "Kiruna Explorer",
            description: "Interactive platform designed to enhance exploration and navigation of the Kiruna region.",
            link: "https://github.com/alezemelo/SE2_KirunaExplorer"
          },
          {
            id: 4,
            title: "EZelectronics",
            description: "Software application designed to help managers of electronics stores to manage their products and offer them to customers through a dedicated website.",
            link: "https://github.com/alinhi75/EZelectronics"
          },
          {
            id: 5,
            title: "Meme Game",
            description: "Single-player web application inspired by the popular 'What do you meme?' board game.",
            link: "https://github.com/alinhi75/MemeGame"
          },
          {
            id: 6,
            title: "Portfolio Website",
            description: "Laravel + Vue website for showcasing work.",
            link: "https://alinoohi.com"
          },
          {
            id: 7,
            title: "Twitter Clone (Laravel)",
            description: "Simplified clone of Twitter built using Laravel.",
            link: "https://github.com/alinhi75/Twitter-Laravel-"
          }
        ]
      };
    },
    methods: {
      openModal(project) {
        this.selectedProject = project;
      }
    }
  };
  </script>

  <style scoped>
  /* Limit description length */
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  /* Modal Fade-in Animation */
  .fade-in {
    animation: fadeIn 0.3s ease-in-out;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }
  </style>
