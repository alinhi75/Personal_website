<template>
    <div class="bg-gray-900 text-white py-16 px-4" data-aos="fade-up">
      <div class="max-w-6xl mx-auto">

        <h2 class="text-5xl font-bold text-primary text-center mb-10 tracking-wide">
          Experience
        </h2>

        <div class="relative border-l-4 border-primary pl-6 space-y-12">
          <div v-for="(exp, index) in experiences" :key="exp.id"
               class="relative group">

            <!-- Timeline Dot -->
            <div class="absolute -left-5 top-2 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <i :class="exp.icon" class="text-white text-lg"></i>
            </div>

            <!-- Timeline Content -->
            <div class="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 text-left"
                 :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
                 :data-aos-delay="index * 150">

              <!-- Role & Company -->
              <h3 class="text-xl font-semibold text-blue-400">{{ exp.role }}</h3>
              <p class="text-gray-400 font-semibold">{{ exp.company }} ({{ exp.duration }})</p>

              <!-- Location -->
              <p class="text-gray-400 mt-1 flex items-center">
                <i class="fas fa-map-marker-alt mr-2 text-red-400"></i> {{ exp.location }}
              </p>

              <!-- Description -->
              <p class="text-gray-300 mt-3 text-sm leading-relaxed">
                {{ exp.description }}
              </p>
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
        experiences: [
          {
            id: 1,
            role: "Back-End Developer - Internship",
            company: "VSABT",
            location: "Tehran, Iran & Edinburgh, UK",
            duration: "Aug 2024 - Dec 2024",
            description: "Developing scalable backend solutions using Laravel, Vue, and PHP. Responsibilities include API design, database optimization, and seamless integration with front-end components.",
            icon: "fas fa-code"
          },
          {
            id: 2,
            role: "Programmer",
            company: "Freelance",
            location: "Iran",
            duration: "Sep 2022 - Oct 2024",
            description: "Worked on various projects as a freelancer, specializing in web development, automation, and backend services.",
            icon: "fas fa-laptop-code"
          },
          {
            id: 3,
            role: "Web Developer - Full time",
            company: "Golden Development",
            location: "Esfahan, Iran",
            duration: "Jan 2022 - July 2023",
            description: "Built and maintained websites for clients using modern web technologies, focusing on performance, user experience, and scalability.",
            icon: "fas fa-globe"
          },
          {
            id: 4,
            role: "Vandalism Co-ordinator - Full time",
            company: "Navid Vesal Iranian (Irancell Cooperator Maintenance Company)",
            location: "Esfahan, Iran",
            duration: "Sep 2022 - Apr 2023",
            description: "Collaborated with Irancell and Huawei for maintenance engineering and vandalism coordination, ensuring operational efficiency.",
            icon: "fas fa-tools"
          }
        ]
      };
    }
  };
  </script>

  <style scoped>
  /* Timeline Design Enhancements */
  .border-primary {
    border-color: #4f46e5; /* Custom Tailwind primary color */
  }

  .text-primary {
    color: #4f46e5;
  }
  </style>
