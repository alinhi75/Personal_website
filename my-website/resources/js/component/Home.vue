<template>
    <div class="bg-gray-900 text-white min-h-screen">

      <!-- Hero Section -->
      <section class="flex flex-col items-center justify-center h-screen text-center">
        <h1 class="text-5xl font-bold mb-4 animate-fade-in">
          Hi, I'm <span class="text-primary">Sayedali Noohi</span>
        </h1>
        <p class="text-xl text-gray-300 animate-slide-in">
          Master's Student in Computer Engineering | Software Developer
        </p>
        <div class="mt-6">
          <a href="#skills"
             class="ml-4 bg-gray-700 text-white px-6 py-3 rounded-lg shadow-lg text-lg hover:bg-gray-600 transition duration-300">
            My Skills
          </a>

          <a href="#contact"
             class="ml-4 bg-gray-700 text-white px-6 py-3 rounded-lg shadow-lg text-lg hover:bg-gray-600 transition duration-300">
            Contact Me
          </a>
          <a href="#about">
            <button class="ml-4 bg-gray-700 text-white px-6 py-3 rounded-lg shadow-lg text-lg hover:bg-gray-600 transition duration-300">
              About Me
            </button>
          </a>
        </div>
      </section>

    </div>
  </template>

  <style>
  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .animate-fade-in {
    animation: fade-in 1s ease-in-out;
  }

  @keyframes slide-in {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  .animate-slide-in {
    animation: slide-in 1s ease-in-out;
  }
  </style>
