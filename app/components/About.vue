<template>
  <section id="about" class="min-h-[50dvh] flex items-center bg-[#0b0f1a] text-white border-t border-white/10">
    <div class="max-w-7xl mx-auto px-6 py-6 w-full grid lg:grid-cols-2 gap-12 items-center">

      <!-- Left Content -->
      <div>
        <h2 class="text-2xl sm:text-3xl font-semibold mb-6 relative inline-block poppins">
          About Me
          <span class="block w-12 h-[2px] bg-indigo-500 mt-2"></span>
        </h2>

        <p class="text-gray-400 leading-relaxed max-w-xl manrope">
          I'm a passionate full-stack developer with a strong love for creating
          efficient, scalable, and user-friendly applications. I enjoy solving
          problems and turning ideas into real products.
        </p>
      </div>

      <!-- Stats Cards -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-6">
        <div
          v-for="(item, index) in stats"
          :key="index"
          class="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-indigo-500 transition"
        >
          <Icon :name="item.icon" class="text-indigo-400 text-3xl mb-3" />
          
          <p class="text-gray-400 text-sm manrope">
            {{ item.title }}
          </p>

          <h3 class="text-2xl font-bold poppins">
            {{ item.value }}
          </h3>

          <p class="text-gray-500 text-sm manrope">
            {{ item.subtitle }}
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
  const stats = [
    {
      icon: 'mdi:calendar',
      title: 'Experience',
      value: '3+',
      subtitle: 'Years'
    },
    {
      icon: 'mdi:school',
      title: 'Bachelor',
      value: '2',
      subtitle: 'Completed'
    },
    {
      icon: 'mdi:briefcase',
      title: 'Projects',
      value: '5+',
      subtitle: 'Completed'
    }
  ]
</script>