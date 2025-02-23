<template>
    <div class="bg-gray-900 text-white py-12" data-aos="fade-up">
      <div class="max-w-4xl mx-auto px-8 text-center">

        <h2 class="text-5xl font-bold text-primary mb-8 tracking-wide">Contact Me</h2>
        <p class="text-lg text-gray-300">
          Feel free to reach out via email or send a message through the form below.
        </p>

        <!-- Contact Form -->
        <form @submit.prevent="submitForm" class="mt-8 bg-gray-800 p-6 rounded-lg shadow-lg">

          <div class="mb-4 text-left">
            <label class="block text-gray-300 mb-2">Your Name</label>
            <input v-model="formData.name" type="text" placeholder="John Doe"
                   class="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-primary"
                   :class="{ 'border-red-500': errors.name }">
            <p v-if="errors.name" class="text-red-400 text-sm mt-1">{{ errors.name }}</p>
          </div>

          <div class="mb-4 text-left">
            <label class="block text-gray-300 mb-2">Your Email</label>
            <input v-model="formData.email" type="email" placeholder="you@example.com"
                   class="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-primary"
                   :class="{ 'border-red-500': errors.email }">
            <p v-if="errors.email" class="text-red-400 text-sm mt-1">{{ errors.email }}</p>
          </div>

          <div class="mb-4 text-left">
            <label class="block text-gray-300 mb-2">Your Message</label>
            <textarea v-model="formData.message" rows="4" placeholder="Write your message here..."
                      class="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-primary"
                      :class="{ 'border-red-500': errors.message }"></textarea>
            <p v-if="errors.message" class="text-red-400 text-sm mt-1">{{ errors.message }}</p>
          </div>

          <button type="submit"
                  class="bg-primary text-white px-6 py-3 rounded-lg shadow-lg text-lg hover:bg-indigo-600 transition duration-300 w-full">
            Send Message
          </button>

          <p v-if="successMessage" class="mt-4 text-green-400">{{ successMessage }}</p>
        </form>

        <!-- Direct Contact Info -->
        <div class="mt-8" data-aos="fade-right">
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
        errors: {},
        successMessage: ''
      };
    },
    methods: {
      validateForm() {
        this.errors = {};

        if (!this.formData.name.trim()) {
          this.errors.name = "Name is required.";
        } else if (this.formData.name.length < 3) {
          this.errors.name = "Name must be at least 3 characters.";
        }

        if (!this.formData.email.trim()) {
          this.errors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(this.formData.email)) {
          this.errors.email = "Enter a valid email address.";
        }

        if (!this.formData.message.trim()) {
          this.errors.message = "Message cannot be empty.";
        } else if (this.formData.message.length < 10) {
          this.errors.message = "Message must be at least 10 characters.";
        }

        return Object.keys(this.errors).length === 0;
      },

      submitForm() {
        if (this.validateForm()) {
          this.successMessage = "Message sent successfully!";
          this.formData = { name: '', email: '', message: '' }; // Clear form after submission

          // Simulate server processing delay
          setTimeout(() => {
            this.successMessage = "";
          }, 3000);
        }
      }
    }
  };
  </script>
