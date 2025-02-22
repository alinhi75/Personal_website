<template>
    <div class="bg-gray-900 text-white min-h-screen py-16">
      <div class="max-w-5xl mx-auto px-8">
        <h2 class="text-4xl font-bold text-primary text-center">Education</h2>

        <div class="mt-6 space-y-6">
          <div v-for="edu in education" :key="edu.id" class="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 class="text-xl font-semibold">{{ edu.degree }}</h3>
            <p class="text-gray-400">{{ edu.university }} ({{ edu.year }})</p>
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
          { id: 1, degree: "Master’s in Computer Engineering", university: "Politecnico di Torino", year: "2023 - Present" },
          { id: 2, degree: "Bachelor’s in Computer Engineering", university: "Shahrekord University", year: "2017 - 2022" }
        ]
      };
    }
  };
  </script>
