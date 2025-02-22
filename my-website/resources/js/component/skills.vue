<template>
    <div class="bg-gray-900 text-white py-16">
      <div class="max-w-5xl mx-auto text-center px-8">
        <h2 class="text-4xl font-bold text-primary">My Skills</h2>
        <p class="text-lg text-gray-300 mt-4">
          Below are the technologies and tools I specialize in.
        </p>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          <div v-for="skill in skills" :key="skill.name"
               class="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-110 hover:bg-gray-700 transition-all duration-300 relative group">
            <img :src="skill.image" :alt="skill.name" class="mx-auto w-16">
            <p class="mt-2 text-gray-400">{{ skill.name }}</p>

            <!-- Tooltip on Hover -->
            <div class="absolute bottom-14 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-sm px-4 py-2 rounded-lg shadow-lg">
              {{ skill.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        skills: [
          { name: "Laravel", image: "/images/skills/laravel.png", description: "PHP framework for web applications." },
          { name: "PHP", image: "/images/skills/php.png", description: "Server-side scripting language for web development." },
          { name: "Vue.js", image: "/images/skills/vue.png", description: "JavaScript framework for building UI." },
          { name: "JavaScript (ES6+)", image: "/images/skills/javascript.png", description: "Modern JavaScript with advanced features." },
          { name: "Node.js", image: "/images/skills/nodejs.png", description: "JavaScript runtime for server-side applications." },
          { name: "React.js", image: "/images/skills/react.png", description: "Library for building UI with components." },
          { name: "TypeScript", image: "/images/skills/typescript.png", description: "JavaScript with static types." },
          { name: "PostgreSQL", image: "/images/skills/postgresql.png", description: "Powerful open-source database system." },
          { name: "Docker", image: "/images/skills/docker.png", description: "Containerization platform for application deployment." },
          { name: "Selenium", image: "/images/skills/selenium.png", description: "Automation tool for web testing." },
          { name: "Python", image: "/images/skills/python.png", description: "High-level programming language for multiple domains." },
          { name: "MATLAB", image: "/images/skills/matlab.png", description: "Numerical computing and simulation tool." },
          { name: "REST APIs", image: "/images/skills/api.png", description: "Building scalable web services and APIs." },
          { name: "Git & GitLab", image: "/images/skills/git.png", description: "Version control and collaboration tools." },
          { name: "Software Testing", image: "/images/skills/testing.png", description: "Ensuring software reliability and efficiency." }
        ]
      };
    }
  };
  </script>
