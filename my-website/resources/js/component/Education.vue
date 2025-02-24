<template>
    <div class="bg-gray-900 text-white py-10" data-aos="fade-up">
      <div class="max-w-3xl mx-auto px-6">
        <h2 class="text-4xl font-bold text-primary text-center mb-6">
          Education
        </h2>

        <div class="space-y-4">
          <div v-for="(edu, index) in education" :key="edu.id"
               class="bg-gray-800 p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
               :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
               :data-aos-delay="index * 150">
            <h3 class="text-lg font-semibold text-blue-400">{{ edu.degree }}</h3>
            <p class="text-gray-400 text-sm">{{ edu.university }} ({{ edu.year }})</p>
            <!-- average grade -->
            <p class="text-gray-300 mt-2 text-sm">Average Grade: {{ edu.grade }}</p>

          </div>
        </div>
      </div>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        education: [
          { id: 1, degree: "Master’s in Computer Engineering", university: "Politecnico di Torino", year: "2023 - Present", grade: "92/110 (until now)"  },
          { id: 2, degree: "Bachelor’s in Computer Engineering", university: "Shahrekord University", year: "2017 - 2022",grade: " 3 - 3.5 (GPA)" }
        ]
      };
    }
  };
  </script>
