<template>
  <nav class="w-full bg-gradient-to-r from-black via-[#0b0f1a] to-black border-b border-white/10">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex items-center justify-between h-16">

        <!-- Logo -->
        <div>
          <img src="/images/monin-logo.png" class="w-28 md:w-36 pt-2" />
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-8 text-md">
          <a 
            v-for="item in menu" 
            :key="item.name"
            :href="item.link"
            class="text-gray-300 hover:text-white transition poppins"
          >
            {{ item.name }}
          </a>
        </div>

        <!-- Hamburger Button -->
        <button 
          @click="isOpen = !isOpen"
          class="md:hidden text-white focus:outline-none cursor-pointer"
        >
          <!-- Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          </svg>
        </button>

      </div>

      <!-- Mobile Menu -->
      <div v-show="isOpen" class="md:hidden pb-4">
        <div class="flex flex-col gap-4 mt-2">
          <a 
            v-for="item in menu" 
            :key="item.name"
            :href="item.link"
            class="text-gray-300 hover:text-white transition poppins"
            @click="isOpen = false"
          >
            {{ item.name }}
          </a>
        </div>
      </div>

    </div>
  </nav>
</template>

<script setup>
  import { ref } from 'vue'

  const isOpen = ref(false)

  const menu = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about"},
    { name: "Tech Stack", link: "#tech" },
    { name: "Project", link: "#project" }
  ];
</script>