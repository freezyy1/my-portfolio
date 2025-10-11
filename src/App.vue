<template>
  <div>
    <Preloader />
    <div id="tsparticles"></div>
    <Navbar />

    <main>
      <Hero />
      <Experience />
      <Projects />
      <Match />
      <Contact />
    </main>

    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Experience from './components/Experience.vue'
import Match from './components/Match.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import SiteFooter from './components/SiteFooter.vue'
import Preloader from './components/Preloader.vue'
</script>
