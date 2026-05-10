<template>
  <section id="home" class="relative min-h-[100dvh] flex items-center bg-[#0b0f1a] text-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 py-6 sm:px-8 lg:px-12 w-full grid lg:grid-cols-2 gap-12 items-center">
      
      <!-- Left Content -->
      <div class="text-center lg:text-left">
        <p class="text-indigo-400 mb-3 text-base sm:text-lg manrope">My name is</p>

        <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 poppins">Ho Monin</h1>

        <h2 class="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-300 mb-6 manrope">
          I build <span class="text-indigo-400">things for the web.</span>
        </h2>

        <p class="text-gray-400 max-w-md mx-auto lg:mx-0 mb-8 text-sm sm:text-base leading-relaxed manrope">
          I'm a software developer who loves building beautiful and functional web applications.
          Currently focused on building full-stack applications with modern technologies.
        </p>

        <!-- Buttons -->
        <div class="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-10">
          <a :href="'#project'" class="bg-indigo-500 hover:bg-indigo-600 transition px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 cursor-pointer manrope">
            <Icon name="mdi:code-tags" class="text-xl sm:text-2xl" /> View My Work
          </a>

          <a href="/documents/HO_Monin(CV).pdf" download="HO_Monin(CV).pdf" class="border border-gray-600 hover:border-gray-400 transition px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 cursor-pointer manrope">
            <Icon name="mdi:download-outline" class="text-xl sm:text-2xl" /> Download CV
          </a>
        </div>

        <!-- Social -->
        <div class="flex justify-center lg:justify-start gap-6 text-gray-400">
          <a href="#" @click="copyText('linkedIn')" class="hover:text-white transition">
            <Icon name="mdi:linkedin" class="text-2xl sm:text-3xl" />
          </a>
          <a href="#" @click="copyText('email')" class="hover:text-white transition">
            <Icon name="mdi:email" class="text-2xl sm:text-3xl" />
          </a>

          <!-- Popup Message -->
          <Transition name="fade">
            <div
              v-if="copied"
              class="bg-black text-white text-sm px-3 py-1 rounded-lg shadow-lg"
            >
              Clipboard copied!
            </div>
          </Transition>
        </div>
      </div>

      <!-- Right Image -->
      <div class="relative flex justify-center lg:justify-end order-first lg:order-last mb-10 lg:mb-0">
        <div class="relative">
          <img
            src="/images/monin-logo.png"
            alt="Profile"
            class="w-[420px] sm:w-[480px] md:w-[540px] lg:w-[620px] rounded-xl relative z-10 bg-transparent"
          />

          <!-- Glow -->
          <div class="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full"></div>
        </div>
      </div>
    </div>

    <!-- Background Glow -->
    <div class="absolute top-0 right-0 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-indigo-600/10 blur-[120px]"></div>
  </section>
</template>

<script setup>
  import { ref } from 'vue'

  const copied = ref(false)

  const copyText = async (text) => {
    if (text == 'email') {
      text = 'monin.ho800.gmail.com'
    } else {
      text = 'https://www.linkedin.com/in/monin-ho-98b1a2284'
    }

    await navigator.clipboard.writeText(text)

    copied.value = true

    setTimeout(() => {
      copied.value = false
    }, 2000)
  }
</script>


<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>