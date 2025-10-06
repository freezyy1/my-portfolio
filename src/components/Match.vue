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
                <span>React, Vue.js - опыт создания SPA</span>
              </li>
              <li class="skill-item" data-aos="fade-up" data-aos-delay="150">
                <i class="fa-brands fa-js skill-icon"></i>
                <span>TypeScript, JavaScript (ES6+)</span>
              </li>
              <li class="skill-item" data-aos="fade-up" data-aos-delay="200">
                <i class="fa-brands fa-html5 skill-icon"></i>
                <span>HTML5, CSS3, SCSS - адаптивная вёрстка</span>
              </li>
              <li class="skill-item" data-aos="fade-up" data-aos-delay="250">
                <i class="fa-brands fa-node-js skill-icon"></i>
                <span>NestJS, Prisma - backend разработка</span>
              </li>
              <li class="skill-item" data-aos="fade-up" data-aos-delay="300">
                <i class="fa-brands fa-git-alt skill-icon"></i>
                <span>Git, GitHub - контроль версий</span>
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
                <span>Коммерческий сайт салона красоты</span>
              </li>
              <li class="skill-item" data-aos="fade-up" data-aos-delay="150">
                <i class="fa-solid fa-circle-check skill-icon text-success"></i>
                <span>Интерактивное приложение погоды</span>
              </li>
              <li class="skill-item" data-aos="fade-up" data-aos-delay="200">
                <i class="fa-solid fa-circle-check skill-icon text-success"></i>
                <span>Полнофункциональная игра-викторина</span>
              </li>
              <li class="skill-item" data-aos="fade-up" data-aos-delay="250">
                <i class="fa-solid fa-circle-check skill-icon text-success"></i>
                <span>Интеграция с API, работа с базами данных</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
