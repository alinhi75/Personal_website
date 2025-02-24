<template>
    <nav class="bg-gray-900 text-white fixed top-0 left-0 w-full shadow-lg z-50">
      <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <!-- Logo -->
        <a href="/" class="text-xl md:text-2xl font-bold text-primary hover:text-indigo-400 transition duration-300">
          Sayedali Noohi
        </a>

        <!-- Desktop Navigation -->
        <ul class="hidden md:flex space-x-6">
          <li><a href="#about" class="nav-link">About</a></li>
          <li><a href="#skills" class="nav-link">Skills</a></li>
          <li><a href="#projects" class="nav-link">Projects</a></li>
          <li><a href="#education" class="nav-link">Education</a></li>
          <li><a href="#contact" class="nav-link">Contact</a></li>
        </ul>

        <!-- Mobile Menu Button -->
        <button @click="toggleMenu" class="md:hidden text-white focus:outline-none">
          <i class="fas fa-bars text-xl"></i>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden bg-gray-800 absolute w-full">
        <ul class="flex flex-col items-center py-4 space-y-4">
          <li><a href="#about" class="nav-link" @click="toggleMenu">About</a></li>
          <li><a href="#skills" class="nav-link" @click="toggleMenu">Skills</a></li>
          <li><a href="#projects" class="nav-link" @click="toggleMenu">Projects</a></li>
          <li><a href="#education" class="nav-link" @click="toggleMenu">Education</a></li>
          <li><a href="#contact" class="nav-link" @click="toggleMenu">Contact</a></li>
        </ul>
      </div>
    </nav>
  </template>

  <script>
  export default {
    data() {
      return {
        mobileMenuOpen: false
      };
    },
    methods: {
      toggleMenu() {
        this.mobileMenuOpen = !this.mobileMenuOpen;
      }
    }
  };
  </script>

  <style scoped>
  .nav-link {
      color: #D1D5DB; /* text-gray-300 */
      transition: color 0.3s;
      font-size: 1.125rem; /* text-lg */
  }

  .nav-link:hover {
      color: #3B82F6; /* text-primary */
  }
  </style>
