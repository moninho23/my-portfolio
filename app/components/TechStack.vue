<script setup>
const techStack = [
  { name: 'JavaScript', icon: 'logos:javascript' },
  { name: 'TypeScript', icon: 'logos:typescript-icon' },
  { name: 'NuxtJs', icon: 'logos:nuxt-icon' },
  { name: 'C#', icon: 'logos:c-sharp' },
  { name: 'Laravel', icon: 'logos:laravel' },
  { name: 'Spring Boot', icon: 'logos:spring-icon' },
  { name: 'Flutter', icon: 'logos:flutter' },
  { name: 'MySql', icon: 'logos:mysql-icon' },
  { name: 'Oracle', icon: 'logos:oracle' },
  { name: 'Git', icon: 'logos:git-icon' }
]
</script>

<template>
  <section id="tech" class="min-h-[50dvh] flex items-center bg-[#0b0f1a] text-white border-t border-white/10">
    <div class="max-w-7xl mx-auto px-6 py-6 w-full">

      <!-- Title -->
      <h2 class="text-2xl sm:text-3xl font-semibold mb-10 relative inline-block poppins">
        Tech Stack
        <span class="block w-12 h-[2px] bg-indigo-500 mt-2"></span>
      </h2>

      <!-- Dynamic Tech Grid -->
      <div class="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-8 gap-8 text-center">
        <div
          v-for="tech in techStack"
          :key="tech.name"
          class="flex flex-col items-center gap-2 hover:scale-110 transition"
        >
          <Icon :name="tech.icon" :class="tech.name === 'Oracle' ? 'text-lg pt-10' : 'text-4xl'" :title="tech.name" />
        </div>
      </div>

    </div>
  </section>
</template>