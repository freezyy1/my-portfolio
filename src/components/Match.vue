<template>
  <section id="match" class="py-5">
    <div class="container">
      <h2 class="section-title text-center mb-5" data-aos="fade-up">
        <i class="fa-solid fa-star me-2 text-gradient"></i>Мои навыки и компетенции
      </h2>
      <div class="row g-4">
        <div class="col-md-6" data-aos="fade-right">
          <div class="skills-card glass-glow p-4 rounded-4 h-100">
            <div class="d-flex align-items-center mb-4">
              <div class="skill-icon-wrapper me-3">
                <i class="fa-solid fa-laptop-code"></i>
              </div>
              <h3 class="h5 mb-0 text-gradient">Технологии и инструменты</h3>
            </div>
            <ul class="skill-list">
              <li class="skill-item" data-aos="fade-up" data-aos-delay="100">
                <i class="fa-brands fa-react skill-icon"></i>
                <span>React, Vue.js, React Native - опыт создания SPA и мобильных приложений</span>
              </li>
              <li class="skill-item" data-aos="fade-up" data-aos-delay="150">
                <i class="fa-brands fa-node-js skill-icon"></i>
                <span>Node.js, Django, Go - fullstack backend разработка</span>
              </li>
              <li class="skill-item" data-aos="fade-up" data-aos-delay="200">
                <i class="fa-solid fa-database skill-icon"></i>
                <span>PostgreSQL, MongoDB, Redis - работа с базами данных</span>
              </li>
              <li class="skill-item" data-aos="fade-up" data-aos-delay="250">
                <i class="fa-solid fa-wrench skill-icon"></i>
                <span>Webpack, Vite - настройка и оптимизация сборщиков</span>
              </li>
              <li class="skill-item" data-aos="fade-up" data-aos-delay="300">
                <i class="fa-brands fa-python skill-icon"></i>
                <span>Python парсеры, Telegram боты - автоматизация</span>
              </li>
              <li class="skill-item" data-aos="fade-up" data-aos-delay="350">
                <i class="fa-brands fa-stripe skill-icon"></i>
                <span>Stripe, платежные системы - интеграция оплаты</span>
              </li>
              <li class="skill-item" data-aos="fade-up" data-aos-delay="400">
                <i class="fa-solid fa-tasks skill-icon"></i>
                <span>Jira, Notion - управление проектами и командная работа</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-6" data-aos="fade-left">
          <div class="skills-card glass-glow p-4 rounded-4 h-100">
            <div class="d-flex align-items-center mb-4">
              <div class="skill-icon-wrapper me-3">
                <i class="fa-solid fa-trophy"></i>
              </div>
              <h3 class="h5 mb-0 text-gradient">Реализованные проекты</h3>
            </div>
            <ul class="skill-list">
              <li class="skill-item" data-aos="fade-up" data-aos-delay="100">
                <i class="fa-solid fa-circle-check skill-icon text-success"></i>
                <span>6 месяцев коммерческой разработки сайтов на заказ</span>
              </li>
              <li class="skill-item" data-aos="fade-up" data-aos-delay="150">
                <i class="fa-solid fa-circle-check skill-icon text-success"></i>
                <span>Координация команды разработки мобильного приложения</span>
              </li>
              <li class="skill-item" data-aos="fade-up" data-aos-delay="200">
                <i class="fa-solid fa-circle-check skill-icon text-success"></i>
                <span>Админ панели на Node.js с аутентификацией и CRUD</span>
              </li>
              <li class="skill-item" data-aos="fade-up" data-aos-delay="250">
                <i class="fa-solid fa-circle-check skill-icon text-success"></i>
                <span>Интеграция Stripe, парсеры Python, Telegram боты</span>
              </li>
              <li class="skill-item" data-aos="fade-up" data-aos-delay="300">
                <i class="fa-solid fa-circle-check skill-icon text-success"></i>
                <span>Настройка CI/CD, Docker, работа с VPS</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
