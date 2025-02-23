<template>
    <div class="bg-gray-900 text-white py-12" data-aos="fade-up">
      <div class="max-w-6xl mx-auto text-center px-6">
        <h2 class="text-5xl font-bold text-primary mb-10 tracking-wide">
          Research & Publications
        </h2>

        <p class="text-lg text-gray-300 mb-8">
          My research focuses on AI, cybersecurity, and software engineering.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="(paper, index) in research" :key="paper.id"
               class="bg-gray-800 p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 duration-300"
               :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
               :data-aos-delay="index * 150">
            <h3 class="text-xl font-semibold text-blue-400">{{ paper.title }}</h3>
            <p class="text-gray-300 mt-2 text-sm">{{ paper.description }}</p>
            <a :href="paper.link" target="_blank"
               class="inline-block mt-4 text-primary hover:text-indigo-400 font-medium">
              View Publication
            </a>
          </div>
        </div>

        <div class="mt-10 text-center">
          <a href="https://scholar.google.com/citations?user=RbraKHsAAAAJ"
             class="text-lg text-primary hover:text-indigo-400">
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
          { id: 3, title: "Cross-Modal Perceptionist", description: "Can Face Geometry be Gleaned from Voices?", link: "#" }
        ]
      };
    }
  };
  </script>
