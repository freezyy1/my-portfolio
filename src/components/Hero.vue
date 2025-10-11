<template>
  <header id="hero" class="py-5 position-relative">
    <div class="container">
      <div class="row align-items-center g-4">
        <div class="col-12 col-lg-7 parallax-hero" data-aos="fade-up" data-aos-delay="50" id="heroContent">
          <span class="badge rounded-pill specialty-badge mb-3">
            <i class="fa-solid fa-briefcase me-2"></i>Frontend • Backend • Fullstack
          </span>
          <h1 class="display-5 fw-bold mt-3 lh-1">
            Привет! Я Дмитрий — <span class="text-gradient">Fullstack разработчик</span>
          </h1>
          <p class="lead mt-3 hero-description">
            Студент 4 курса университета «РТУ МИРЭА», специальность — fullstack разработка.
            6 месяцев коммерческого опыта разработки сайтов на заказ. Создаю современные веб-приложения от frontend до backend с фокусом на UX и производительность.
          </p>
          <div class="d-flex flex-wrap gap-2 mt-3">
            <a class="btn btn-lg btn-primary magnetic" href="https://github.com/freezyy1" target="_blank" rel="noopener">
              <i class="fa-brands fa-github"></i> GitHub профиль
            </a>
            <a class="btn btn-lg btn-outline-light glass magnetic" href="#projects">
              <i class="fa-solid fa-diagram-project"></i> Мои проекты
            </a>
            <a class="btn btn-lg btn-outline-info magnetic" href="https://t.me/covcjj" target="_blank" rel="noopener">
              <i class="fa-brands fa-telegram"></i> Telegram
            </a>
          </div>
          <div class="mt-4">
            <h3 class="h6 fw-bold text-gradient mb-3">
              <i class="fa-solid fa-code me-2"></i>Технологии
            </h3>
            <div class="d-flex flex-wrap gap-2">
              <span class="tech-badge" data-aos="fade-up" data-aos-delay="100">
                <i class="fa-brands fa-react"></i> React
              </span>
              <span class="tech-badge" data-aos="fade-up" data-aos-delay="150">
                <i class="fa-brands fa-vuejs"></i> Vue.js
              </span>
              <span class="tech-badge" data-aos="fade-up" data-aos-delay="200">
                <i class="fa-brands fa-js"></i> TypeScript
              </span>
              <span class="tech-badge" data-aos="fade-up" data-aos-delay="250">
                <i class="fa-brands fa-node-js"></i> Node.js
              </span>
              <span class="tech-badge" data-aos="fade-up" data-aos-delay="300">
                <i class="fa-brands fa-python"></i> Django
              </span>
              <span class="tech-badge" data-aos="fade-up" data-aos-delay="350">
                <i class="fa-brands fa-golang"></i> Go
              </span>
              <span class="tech-badge" data-aos="fade-up" data-aos-delay="400">
                <i class="fa-solid fa-database"></i> PostgreSQL
              </span>
              <span class="tech-badge" data-aos="fade-up" data-aos-delay="450">
                <i class="fa-solid fa-server"></i> Redis
              </span>
              <span class="tech-badge" data-aos="fade-up" data-aos-delay="500">
                <i class="fa-solid fa-box"></i> Docker
              </span>
              <span class="tech-badge" data-aos="fade-up" data-aos-delay="550">
                <i class="fa-brands fa-git-alt"></i> Git
              </span>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-5" data-aos="zoom-in" data-aos-delay="150">
          <div class="hero-image-wrapper">
            <img class="hero-image rounded-4 shadow-lg" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop" alt="Frontend Development">
            <div class="hero-image-overlay">
              <i class="fa-solid fa-laptop-code"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts"></script>
