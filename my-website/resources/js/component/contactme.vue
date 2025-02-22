<template>
    <div class="bg-gray-900 text-white min-h-screen py-16">
      <div class="max-w-4xl mx-auto px-8 text-center">

        <h2 class="text-4xl font-bold text-primary">Contact Me</h2>
        <p class="text-gray-300 mt-4">
          Feel free to reach out via email or send a message through the form below.
        </p>

        <!-- Contact Form -->
        <form @submit.prevent="submitForm" class="mt-8 bg-gray-800 p-6 rounded-lg shadow-lg">
          <div class="mb-4">
            <input v-model="formData.name" type="text" placeholder="Your Name"
                   class="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-primary">
          </div>

          <div class="mb-4">
            <input v-model="formData.email" type="email" placeholder="Your Email"
                   class="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-primary">
          </div>

          <div class="mb-4">
            <textarea v-model="formData.message" rows="4" placeholder="Your Message"
                      class="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-primary"></textarea>
          </div>

          <button type="submit"
                  class="bg-primary text-white px-6 py-3 rounded-lg shadow-lg text-lg hover:bg-indigo-600 transition duration-300">
            Send Message
          </button>

          <p v-if="successMessage" class="mt-4 text-green-400">{{ successMessage }}</p>
        </form>

        <!-- Direct Contact Info -->
        <div class="mt-8">
          <p class="text-lg">📧 Email:
            <a href="mailto:sayedali.noohi@studenti.polito.it" class="text-primary hover:text-indigo-400">
              sayedali.noohi@studenti.polito.it
            </a>
          </p>
          <p class="text-lg mt-2">🔗 LinkedIn:
            <a href="https://www.linkedin.com/in/ali-noohi-a897a7227" target="_blank" class="text-primary hover:text-indigo-400">
              LinkedIn Profile
            </a>
          </p>
        </div>

      </div>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        formData: {
          name: '',
          email: '',
          message: ''
        },
        successMessage: ''
      };
    },
    methods: {
      submitForm() {
        if (!this.formData.name || !this.formData.email || !this.formData.message) {
          alert("Please fill in all fields.");
          return;
        }

        // Simulate form submission
        setTimeout(() => {
          this.successMessage = "Message sent successfully! I'll get back to you soon.";
          this.formData = { name: '', email: '', message: '' }; // Clear form after submission
        }, 1000);
      }
    }
  };
  </script>
