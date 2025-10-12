<template>
  <section id="experience" class="py-5">
    <div class="container">
      <h2 class="section-title text-center mb-5" data-aos="fade-up">
        <i class="fa-solid fa-briefcase me-2 text-gradient"></i>Образование и Опыт
      </h2>
      
      <div class="row g-4">
        <!-- Левая колонка: образование -->
        <div class="col-lg-6" data-aos="fade-right">
          <div class="experience-card glass-glow p-4 rounded-4 h-100">
            <div class="d-flex align-items-center mb-4">
              <div class="experience-icon-wrapper me-3">
                <i class="fa-solid fa-graduation-cap"></i>
              </div>
              <h3 class="h5 mb-0 text-gradient">Образование</h3>
            </div>
            
            <div class="experience-item mb-4">
              <div class="d-flex justify-content-between align-items-start mb-2">
                <h4 class="h6 fw-bold mb-0">
                  <i class="fa-solid fa-university me-2"></i>РТУ МИРЭА
                </h4>
                <span class="badge bg-primary">2022-2026</span>
              </div>
              <p class="mb-2 opacity-75">Fullstack разработчик</p>
              <p class="small mb-0 opacity-75">
                Обучение по специальности Fullstack разработка. Выполнено множество проектов 
                связанных с моим стеком технологий в качестве курсовых, практических работ 
                и лабораторных заданий с использованием React, Vue.js, Node.js, Django и других технологий.
              </p>
            </div>

            <div class="experience-item mb-4">
              <div class="d-flex justify-content-between align-items-start mb-2">
                <h4 class="h6 fw-bold mb-0">
                  <i class="fa-solid fa-code me-2"></i>РТУ МИРЭА
                </h4>
                <span class="badge bg-primary">2024</span>
              </div>
              <p class="mb-2 opacity-75">Дополнительная подготовка по Go</p>
              <p class="small mb-0 opacity-75">
                Прошел дополнительную подготовку по языку программирования Go в РТУ МИРЭА. 
                Получил теоретические и практические знания по конкурентному программированию, 
                работе с goroutines и channels, а также созданию высокопроизводительных backend-сервисов.
              </p>
            </div>

            <div class="experience-item">
              <div class="d-flex justify-content-between align-items-start mb-2">
                <h4 class="h6 fw-bold mb-0">
                  <i class="fa-solid fa-book me-2"></i>SkillFactory
                </h4>
                <span class="badge bg-primary">2022</span>
              </div>
              <p class="mb-2 opacity-75">Курсы Fullstack разработки</p>
              <div class="d-flex flex-wrap gap-2 mb-2">
                <span class="skill-tag"><i class="fa-brands fa-vuejs"></i> Vue.js</span>
                <span class="skill-tag"><i class="fa-brands fa-python"></i> Django</span>
                <span class="skill-tag"><i class="fa-solid fa-server"></i> Redis</span>
                <span class="skill-tag"><i class="fa-solid fa-bolt"></i> Vite</span>
                <span class="skill-tag"><i class="fa-brands fa-node-js"></i> REST API</span>
              </div>
              <p class="small mb-0 opacity-75">
                Прошел комплексное обучение fullstack разработке, освоил создание 
                современных веб-приложений с использованием Vue.js на frontend и Django на backend.
              </p>
            </div>
          </div>
        </div>

        <!-- Правая колонка: опыт работы -->
        <div class="col-lg-6" data-aos="fade-left">
          <div class="experience-card glass-glow p-4 rounded-4 h-100">
            <div class="d-flex align-items-center mb-4">
              <div class="experience-icon-wrapper me-3">
                <i class="fa-solid fa-code-branch"></i>
              </div>
              <h3 class="h5 mb-0 text-gradient">Опыт работы</h3>
            </div>
            
            <div class="experience-item mb-4">
              <div class="d-flex justify-content-between align-items-start mb-2">
                <h4 class="h6 fw-bold mb-0">
                  <i class="fa-solid fa-laptop-code me-2"></i>Коммерческая разработка
                </h4>
                <span class="badge bg-success">6 месяцев</span>
              </div>
              <p class="mb-2 opacity-75">Разработка сайтов на заказ</p>
              <ul class="small mb-2 opacity-75 ps-3">
                <li>Разработка полноценных веб-сайтов под ключ для клиентов</li>
                <li>Работа с платежными системами (Stripe)</li>
                <li>Создание парсеров на Python для сбора данных</li>
                <li>Разработка Telegram ботов для автоматизации</li>
                <li>Настройка сборщиков Webpack и Vite</li>
              </ul>
            </div>

            <div class="experience-item">
              <div class="d-flex justify-content-between align-items-start mb-2">
                <h4 class="h6 fw-bold mb-0">
                  <i class="fa-solid fa-users me-2"></i>Координатор команды
                </h4>
                <span class="badge bg-info">3 месяца</span>
              </div>
              <p class="mb-2 opacity-75">Мобильный проект на React Native</p>
              <ul class="small mb-2 opacity-75 ps-3">
                <li>Координация команды разработки мобильного приложения</li>
                <li>Организация работы через Jira и Notion</li>
                <li>Планирование спринтов и распределение задач</li>
                <li>Код-ревью и контроль качества разработки</li>
              </ul>
              <div class="d-flex flex-wrap gap-2">
                <span class="skill-tag"><i class="fa-brands fa-react"></i> React Native</span>
                <span class="skill-tag"><i class="fa-solid fa-tasks"></i> Jira</span>
                <span class="skill-tag"><i class="fa-solid fa-sticky-note"></i> Notion</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Блок с дополнительными навыками -->
      <div class="row mt-4">
        <div class="col-12" data-aos="fade-up">
          <div class="additional-skills glass-glow p-4 rounded-4">
            <h3 class="h6 mb-3 text-center text-gradient">
              <i class="fa-solid fa-tools me-2"></i>Дополнительные навыки и технологии
            </h3>
            <div class="d-flex flex-wrap justify-content-center gap-2">
              <span class="skill-tag-large"><i class="fa-solid fa-wrench"></i> Webpack</span>
              <span class="skill-tag-large"><i class="fa-solid fa-bolt"></i> Vite</span>
              <span class="skill-tag-large"><i class="fa-brands fa-stripe"></i> Stripe API</span>
              <span class="skill-tag-large"><i class="fa-brands fa-python"></i> Python Parsing</span>
              <span class="skill-tag-large"><i class="fa-brands fa-telegram"></i> Telegram Bots</span>
              <span class="skill-tag-large"><i class="fa-solid fa-database"></i> MongoDB</span>
              <span class="skill-tag-large"><i class="fa-solid fa-server"></i> Redis</span>
              <span class="skill-tag-large"><i class="fa-brands fa-docker"></i> Docker</span>
              <span class="skill-tag-large"><i class="fa-solid fa-tasks"></i> Jira</span>
              <span class="skill-tag-large"><i class="fa-solid fa-sticky-note"></i> Notion</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.experience-card {
  transition: all 0.3s ease;
}

.experience-icon-wrapper {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, var(--accent1), var(--accent2));
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.experience-item {
  padding-left: 1rem;
  border-left: 3px solid var(--accent1);
  transition: all 0.3s ease;
  
  &:hover {
    border-left-color: var(--accent2);
    padding-left: 1.5rem;
  }
}

.skill-tag {
  background: linear-gradient(135deg, rgba(106, 135, 255, 0.2), rgba(242, 29, 107, 0.2));
  border: 1px solid var(--glass-bd);
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.8rem;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all 0.3s ease;
  
  i {
    font-size: 0.9rem;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
}

.skill-tag-large {
  background: linear-gradient(135deg, var(--accent1), var(--accent2));
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  
  i {
    font-size: 1rem;
  }
  
  &:hover {
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
  }
}

.additional-skills {
  background: linear-gradient(135deg, rgba(106, 135, 255, 0.05), rgba(242, 29, 107, 0.05));
}

.badge {
  font-weight: 600;
  padding: 6px 12px;
}

@media (max-width: 768px) {
  .experience-item {
    padding-left: 0.5rem;
  }
  
  .experience-icon-wrapper {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
  
  .skill-tag-large {
    font-size: 0.8rem;
    padding: 6px 12px;
  }
}
</style>
