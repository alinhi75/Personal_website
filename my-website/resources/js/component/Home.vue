<template>
    <div class="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 class="text-4xl sm:text-5xl font-bold mb-4 animate-fade-in">
        Hi, I'm <span class="text-primary">Sayedali Noohi</span>
      </h1>
      <p class="text-lg sm:text-xl text-gray-300 animate-slide-in">
        Master's Student in Computer Engineering | Software Developer
      </p>

      <div class="mt-6 space-y-3 sm:space-y-0 sm:space-x-4">
        <a href="#projects" class="btn-primary">View My Work</a>
        <a href="#skills" class="btn-secondary">My Skills</a>
        <a href="#contact" class="btn-secondary">Contact Me</a>
      </div>
    </div>
  </template>

  <style scoped>
  .btn-primary {
    background-color: var(--color-primary);
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    font-size: 1.125rem;
    display: inline-block;
    transition: background-color 0.3s;
  }
  .btn-primary:hover {
    background-color: #4c51bf; /* indigo-600 */
  }
  .btn-secondary {
    background-color: #4a5568; /* gray-700 */
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    font-size: 1.125rem;
    display: inline-block;
    transition: background-color 0.3s;
  }
  .btn-secondary:hover {
    background-color: #2d3748; /* gray-600 */
  }
  </style>
