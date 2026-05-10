<template>
  <section id="project" class="min-h-screen w-full bg-[#0b0f1a] text-white border-t border-white/10">
    <div class="max-w-7xl mx-auto px-6 py-6 w-full">
      <!-- Header -->
       <h2 class="text-2xl sm:text-3xl font-semibold mb-10 relative inline-block poppins">
        Contributed Project
        <span class="block w-12 h-[2px] bg-indigo-500 mt-2"></span>
      </h2>
      <!-- <div class="flex items-center justify-between mb-12">
        <div>
          <h2 class="text-2xl sm:text-3xl font-semibold relative inline-block">Contributed Project</h2>
          <div class="w-12 h-[2px] bg-indigo-400 mt-2"></div>
        </div>
      </div> -->
  
      <!-- Cards -->
      <div class="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        <!-- Card -->
        <div
          v-for="project in projects"
          :key="project.title"
          class="bg-[#0b0f2a] rounded-2xl overflow-hidden border border-gray-800 hover:border-indigo-400 transition group"
        >
          <!-- Image -->
          <!-- <div class="relative">
            <img
              :src="project.image"
              class="w-full h-52 object-cover opacity-90 group-hover:opacity-100 transition"
            />
          </div> -->
  
          <!-- Content -->
          <div class="p-6">
            <div class="flex justify-between items-start mb-3">
              <h3 class="text-xl font-semibold text-indigo-400 poppins">
                {{ project.title }}
              </h3>
              <!-- <Icon name="mdi:arrow-top-right"  /> -->
              <a v-if="project.link != ''" :href="project.link" target="_blank" rel="noopener noreferrer" class="text-gray-400 text-lg cursor-pointer text-indigo-400">
                <Icon name="mdi:arrow-top-right" />
              </a>
            </div>
  
            <p class="text-gray-400 text-sm mb-4 manrope">
              {{ project.description }}
            </p>
  
            <!-- Tags -->
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="text-xs px-3 py-1 rounded-full bg-[#11162f] text-gray-300 border border-gray-700 poppins"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  const projects = [
    {
      title: "Avalok",
      description: "A dynamic website showcasing company information",
      tags: ["NuxtJs", "TypeScript", "Laravel", "MySql"],
      link: "https://www.avalokstudio.com/en"
    },
    {
      title: "Internal Bank Web Application",
      description: "An internal system allowing staffs to communicate and do daily operations",
      tags: ["C#", "Javascript", "Oracle"],
      link: ""
    },
    {
      title: "Internal Bank Mobile Application",
      description: "An internal mobile application allowing staffs to communicate and do daily operations",
      tags: ["Flutter", "C#", "Oracle"],
      link: ""
    },
    {
      title: "Core Banking Web Application",
      description: "A productivity web application of bank for doing daily operations",
      tags: ["Java Spring Boot", "Javascript", "Oracle"],
      link: ""
    }
  ];
</script>