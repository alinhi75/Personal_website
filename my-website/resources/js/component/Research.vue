<template>
    <div class="bg-gray-900 text-white min-h-screen py-16">
      <div class="max-w-5xl mx-auto px-8">
        <h2 class="text-4xl font-bold text-primary text-center">Research & Publications</h2>

        <p class="text-gray-300 mt-4 text-center">
          My research focuses on AI, cybersecurity, and software engineering.
          Below are some of my recent publications.
        </p>

        <ul class="mt-6 space-y-4">
          <li v-for="paper in research" :key="paper.id" class="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 class="text-xl font-semibold">{{ paper.title }}</h3>
            <p class="text-gray-400">{{ paper.description }}</p>
            <a :href="paper.link" target="_blank" class="text-primary hover:text-indigo-400 mt-2 block">View Publication</a>
          </li>
        </ul>

        <div class="mt-6 text-center">
          <a href="https://scholar.google.com/citations?user=RbraKHsAAAAJ"
             class="text-primary text-lg hover:text-indigo-400">
            View All Publications on Google Scholar
          </a>
        </div>

      </div>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        research: [
          { id: 1, title: "AI-Based Cybersecurity", description: "A research paper on AI applications in security.", link: "#" },
          { id: 2, title: "Deep Learning for IoT Security", description: "Exploring ML techniques for IoT security.", link: "#" },
          { id: 3, title: "Cross-Modal Perceptionist: Can Face Geometry be Gleaned from Voices?", description: "Investigating AI's ability to predict face geometry from voice data.", link: "#" }
        ]
      };
    }
  };
  </script>
