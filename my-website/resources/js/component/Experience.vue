<template>
    <div class="bg-gray-900 text-white py-12 px-4" data-aos="fade-up">
      <div class="max-w-6xl mx-auto text-center">

        <h2 class="text-5xl font-bold text-primary mb-8 tracking-wide">
          Experience
        </h2>

        <div class="space-y-6">
          <div v-for="(exp, index) in experiences" :key="exp.id"
               class="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 text-left"
               :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
               :data-aos-delay="index * 150">

            <h3 class="text-xl font-semibold text-blue-400">{{ exp.role }}</h3>
            <!-- location -->
            <p class="text-gray-400">({{ exp.location }})</p>
            <p class="text-gray-400">{{ exp.company }} ({{ exp.duration }})</p>
            <p class="text-gray-300 mt-2 text-sm">{{ exp.description }}</p>
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
            description: "As a backend developer intern at VSABT, I contribute to developing scalable server-side solutions for a core project using Laravel, Vue, and PHP. My responsibilities include designing APIs, optimizing database interactions, and collaborating closely with the team to ensure seamless integration with front-end components. This role allows me to apply and deepen my skills in building efficient, responsive systems that align with the organization’s goals, enhancing both user experience and operational performance"
          },
          {
            id: 2,
            role: "programmer",
            company: "Freelance",
            location: "Iran",
            duration: "Sep 2022 - Oct 2024",
            description: "Work on different project as a freelancer"
          },
          {
            id: 3,
            role: "Web Developer - Full time",
            company: "Golden Development",
            location: "Esfahan, Iran",
            duration: "Jan 2022 - July 2023",
            description: "As a web developer at Golden Development Company, I specialize in creating and maintaining websites for our clients. My role involves collaborating closely with designers, project managers, and clients to understand their requirements and deliver effective solutions. Using programming languages such as HTML, CSS, and JavaScript, along with frameworks like React or Angular, I build responsive and user-friendly web experiences"
          },
          {
            id: 4,
            role: "Vandalism Co-ordinator - Full time",
            company: "Navid Vesal Iranian (Irancell Cooperator Maintenance Company) ",
            location: "Esfahan, Iran",
            duration: "Sep 2022 - Apr 2023",
            description: "Work in Navid Wesal Iranian and co-op with Irancell and Huawei Company for maintenance Engineering and Vandalism Coordinator"
          },

        ]
      };
    }
  };
  </script>
