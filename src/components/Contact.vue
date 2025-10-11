<template>
  <section id="contact" class="py-5">
    <div class="container">
      <h2 class="section-title text-center mb-5" data-aos="fade-up">
        <i class="fa-solid fa-paper-plane me-2 text-gradient"></i>Контакты
      </h2>
      <div class="contact-wrapper glass-glow p-5 rounded-4" data-aos="fade-up" data-aos-delay="100">
        <p class="text-center lead mb-5">
          Открыт к новым возможностям и сотрудничеству. Свяжитесь со мной!
        </p>
        <div class="row g-4">
          <div class="col-md-4" data-aos="zoom-in" data-aos-delay="150">
            <a href="mailto:dmitrij.satyukov@bk.ru" class="contact-card">
              <div class="contact-icon">
                <i class="fa-solid fa-envelope"></i>
              </div>
              <h3 class="h6 mt-3 mb-2">Email</h3>
              <p class="small mb-0">dmitrij.satyukov@bk.ru</p>
            </a>
          </div>
          <div class="col-md-4" data-aos="zoom-in" data-aos-delay="200">
            <a href="https://t.me/covcjj" target="_blank" rel="noopener" class="contact-card">
              <div class="contact-icon">
                <i class="fa-brands fa-telegram"></i>
              </div>
              <h3 class="h6 mt-3 mb-2">Telegram</h3>
              <p class="small mb-0">@covcjj</p>
            </a>
          </div>
          <div class="col-md-4" data-aos="zoom-in" data-aos-delay="250">
            <a href="https://github.com/freezyy1" target="_blank" rel="noopener" class="contact-card">
              <div class="contact-icon">
                <i class="fa-brands fa-github"></i>
              </div>
              <h3 class="h6 mt-3 mb-2">GitHub</h3>
              <p class="small mb-0">@freezyy1</p>
            </a>
          </div>
        </div>
      </div>
      <p class="text-center small mt-4 opacity-75">
        Сделано с <i class="fa-solid fa-heart text-danger"></i> на Vue 3, TypeScript, Bootstrap
      </p>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
