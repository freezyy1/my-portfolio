<template>
  <section id="projects" class="py-5">
    <div class="container">
      <div class="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
        <h2 class="section-title mb-0" data-aos="fade-right">
          <i class="fa-solid fa-folder-open me-2 text-gradient"></i>Проекты
        </h2>
        <div class="search-wrapper" data-aos="fade-left">
          <i class="fa-solid fa-magnifying-glass search-icon"></i>
          <input 
            type="text" 
            class="search-input" 
            placeholder="Поиск по проектам..." 
            v-model="query"
          >
          <button v-if="query" class="search-clear" @click="query = ''">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>

      <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 mt-1">
        <div class="col" v-for="p in filteredProjects" :key="p.title" data-aos="zoom-in">
          <UiCard rootClass="project-card h-100">
            <div class="ratio ratio-16x9 rounded-top-4 overflow-hidden">
              <img 
                :src="p.image" 
                :alt="p.title"
                @error="handleImageError"
                loading="lazy"
              >
            </div>
            <div class="card-body d-flex flex-column">
              <h3 class="h5 fw-semibold">{{ p.title }}</h3>
              <p class="flex-grow-1 opacity-75 mb-3">{{ p.desc }}</p>
              <div class="d-flex flex-wrap gap-2 mb-3">
                <UiBadge v-for="t in p.tags" :key="t">{{ t }}</UiBadge>
              </div>
              <div class="mt-auto d-flex gap-2">
                <a class="btn btn-sm btn-primary" :href="p.link" target="_blank" rel="noopener">
                  <i class="fa-brands fa-github"></i> Код
                </a>
                <a v-if="p.demo" class="btn btn-sm btn-outline-light glass" :href="p.demo" target="_blank" rel="noopener">
                  <i class="fa-solid fa-up-right-from-square"></i> Демо
                </a>
              </div>
            </div>
          </UiCard>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import UiCard from '../ui/UiCard.vue'
import UiBadge from '../ui/UiBadge.vue'
import { ref, computed } from 'vue'
type Project = { title: string; desc: string; tags: string[]; link: string; demo?: string; image: string }
const query = ref('')
const projects = ref<Project[]>([
  {
    title: 'Art-Beauty - Сайт салона красоты',
    desc: 'Полнофункциональный сайт салона красоты на React, бронированием и современным дизайном.',
    tags: ['React', 'JavaScript', 'CSS3', 'Адаптив', 'Admin Panel'],
    link: 'https://github.com/freezyy1/krasota',
    demo: 'https://www.artbeauty1906.ru/',
    image: 'projects/beauty.jpg'
  },
  {
    title: 'Поиск фильмов с IMDb',
    desc: 'Реакт-приложение для поиска фильмов с использованием IMDb API. Подробная информация о фильме, постеры.',
    tags: ['React', 'API', 'JavaScript', 'IMDb', 'Поиск'],
    link: 'https://github.com/freezyy1/portfolio_react_1',
    image: 'projects/imdb.jpg'
  },
  {
    title: 'WeatherVista - Приложение погоды',
    desc: 'Современное веб-приложение для отображения погоды с интерактивными картами, графиками и мультиязычностью.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Leaflet', 'Chart.js', 'API'],
    link: 'https://github.com/freezyy1/-portfolio/tree/main/weather',
    image: 'projects/weather.jpg'
  },
  {
    title: 'Cat Quiz - Викторина о кошках',
    desc: 'Полнофункциональная веб-игра на NestJS с базой данных, лидербордом и админ-панелью.',
    tags: ['NestJS', 'TypeScript', 'Prisma', 'SQLite', 'Bootstrap', 'EJS'],
    link: 'https://github.com/freezyy1/-portfolio/tree/main/cat-quiz-nestjs',
    image: 'projects/cat.jpg'
  }
])
const filteredProjects = computed(() => {
  const q = query.value.trim().toLowerCase()
  if(!q) return projects.value
  return projects.value.filter(p => p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q) || p.tags.some(t => t.toLowerCase().includes(q)))
})

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  console.error('Failed to load image:', img.src)
  // Fallback - серый прямоугольник с текстом
  img.style.backgroundColor = '#2a2a3e'
  img.style.display = 'flex'
  img.style.alignItems = 'center'
  img.style.justifyContent = 'center'
  img.alt = 'Image not found'
}
</script>
