<template>
  <nav class="navbar navbar-expand-lg navbar-dark sticky-top glass-nav">
    <div class="container">
      <a class="navbar-brand fw-bold order-0" href="#hero">
        <i class="fa-solid fa-code me-2 text-gradient"></i>
        <span class="brand-text">Portfolio</span>
      </a>
      
      <div class="d-flex align-items-center gap-2 order-2 d-lg-none">
        <ThemeToggle />
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      
      <div class="collapse navbar-collapse order-3 order-lg-1" id="navMenu">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item"><a class="nav-link" href="#hero"><i class="fa-solid fa-home me-1"></i>О мне</a></li>
          <li class="nav-item"><a class="nav-link" href="#projects"><i class="fa-solid fa-folder me-1"></i>Проекты</a></li>
          <li class="nav-item"><a class="nav-link" href="#match"><i class="fa-solid fa-star me-1"></i>Навыки</a></li>
          <li class="nav-item"><a class="nav-link" href="#contact"><i class="fa-solid fa-paper-plane me-1"></i>Контакты</a></li>
        </ul>
      </div>
      
      <div class="d-none d-lg-flex ms-3 order-2">
        <ThemeToggle />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import ThemeToggle from './ThemeToggle.vue'
</script>
