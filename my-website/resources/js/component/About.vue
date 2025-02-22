<template>
    <div class="bg-gray-900 text-white min-h-screen py-16">
      <div class="max-w-5xl mx-auto px-8">

        <!-- About Me -->
        <section class="text-center">
          <h2 class="text-4xl font-bold text-primary">About Me</h2>
          <p class="text-lg text-gray-300 mt-4">
            I am a Master's student in Computer Engineering with a strong background in software development and research.
            I specialize in AI, cybersecurity, and web applications, working on innovative projects and academic research.
          </p>
        </section>

        <!-- Education Section -->
        <section id="education" class="mt-12">
          <h2 class="text-3xl font-bold text-primary">Education</h2>
          <div class="mt-6 space-y-6">
            <div v-for="edu in education" :key="edu.id" class="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-semibold">{{ edu.degree }}</h3>
              <p class="text-gray-400">{{ edu.university }} ({{ edu.year }})</p>
            </div>
          </div>
        </section>

        <!-- Research Section -->
        <section id="research" class="mt-12">
          <h2 class="text-3xl font-bold text-primary">Research & Publications</h2>
          <p class="text-gray-300 mt-4">
            I am passionate about research in AI and cybersecurity. Below are some of my recent publications.
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
        </section>
        <!-- Contact Section -->
      <section id="contact" class="bg-dark py-16 px-8 text-center">
        <h2 class="text-3xl font-bold text-primary">Contact Me</h2>
        <p class="text-gray-300 mt-4">Feel free to reach out via email or social media.</p>
        <div class="mt-6">
          <a href="mailto:your.email@example.com" class="text-primary text-lg">sayedali.noohi@studenti.polito.it</a>
        </div>
        <div class="mt-6">
          <a href="mailto:your.email@example.com" class="text-primary text-lg">alinoohi11@gmail.com</a>
        </div>
      </section>

      </div>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        education: [
          { id: 1, degree: "Master’s in Computer Engineering", university: "XYZ University", year: "2023 - Present" },
          { id: 2, degree: "Bachelor’s in Software Engineering", university: "ABC University", year: "2019 - 2023" }
        ],
        research: [
          { id: 1, title: "AI-Based Cybersecurity", description: "A research paper on AI applications in security.", link: "#" },
          { id: 2, title: "Deep Learning for IoT Security", description: "Exploring ML techniques for IoT security.", link: "#" }
        ]
      };
    }
  };
  </script>
