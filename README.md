# 🚀 Мое портфолио

Современное веб-портфолио с анимациями, переключением тем и адаптивным дизайном.

**🌐 Live Demo:** [https://freezyy1.github.io/my-portfolio/](https://freezyy1.github.io/my-portfolio/)

---

## ✨ Особенности

- 🎨 **Переключение тем** - Светлая, темная и системная темы с плавными переходами
- 📱 **Адаптивный дизайн** - Отлично выглядит на всех устройствах
- ⚡ **Высокая производительность** - Оптимизированные изображения и быстрая загрузка
- 🔍 **Поиск проектов** - Интерактивный поиск с фильтрацией
- 🎬 **Анимации** - Плавные анимации при скролле с AOS
- 🌟 **Частицы** - Анимированный фон с particles.js
- 💎 **Glassmorphism** - Современный стеклянный эффект UI

---

## 🛠️ Технологии

### Frontend
- **Vue 3** - Прогрессивный JavaScript фреймворк
- **TypeScript** - Типизированный JavaScript
- **Vite** - Быстрый инструмент сборки

### UI/UX
- **Bootstrap 5** - CSS фреймворк
- **AOS** - Animate On Scroll библиотека
- **Particles.js** - Анимированный фон
- **Font Awesome** - Иконки
- **SCSS** - Препроцессор CSS

### Deployment
- **GitHub Actions** - CI/CD
- **GitHub Pages** - Хостинг

---

## 📦 Установка и запуск

### Требования
- Node.js 18+
- npm или yarn

### Локальная разработка

```bash
# Клонировать репозиторий
git clone https://github.com/freezyy1/my-portfolio.git
cd my-portfolio

# Установить зависимости
npm install

# Запустить dev-сервер
npm run dev
```

Откройте [http://localhost:5173](http://localhost:5173) в браузере.

### Сборка для продакшена

```bash
# Собрать проект
npm run build

# Предпросмотр сборки
npm run preview
```

---

## 📂 Структура проекта

```
my-portfolio/
├── public/
│   ├── projects/          # Скриншоты проектов
│   └── test-images.html   # Тестовая страница
├── src/
│   ├── assets/
│   │   └── styles.scss    # Глобальные стили
│   ├── components/
│   │   ├── Hero.vue       # Главная секция
│   │   ├── Projects.vue   # Секция проектов
│   │   └── ThemeToggle.vue # Переключатель тем
│   ├── ui/                # UI компоненты
│   ├── composables/       # Vue Composables
│   ├── App.vue            # Главный компонент
│   └── main.ts            # Точка входа
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions workflow
└── vite.config.ts         # Конфигурация Vite
```

---

## 🎨 Кастомизация

### Изменение цветовой схемы

Откройте `src/assets/styles.scss` и измените CSS переменные:

```scss
:root[data-theme="dark"] {
  --bg: radial-gradient(...);
  --accent1: #6a87ff;  // Основной цвет
  --accent2: #f21d6b;  // Акцентный цвет
  --accent3: #36d1dc;  // Дополнительный цвет
}
```



## 📊 Производительность

- ⚡ **Lighthouse Score:** 95+
- 🖼️ **Оптимизированные изображения:** 512 КБ (экономия 88%)
- 📦 **Bundle Size:** ~450 КБ (gzip)
- 🚀 **Время загрузки:** < 1 секунды

---

## 📄 Лицензия

MIT License - свободно используйте для личных и коммерческих проектов.

---

## 👤 Автор

**freezyy1**

- GitHub: [@freezyy1](https://github.com/freezyy1)
- Portfolio: [https://freezyy1.github.io/my-portfolio/](https://freezyy1.github.io/my-portfolio/)

---

## 🙏 Благодарности

- [Vue.js](https://vuejs.org/) - за отличный фреймворк
- [Vite](https://vitejs.dev/) - за молниеносную сборку
- [AOS](https://michalsnik.github.io/aos/) - за красивые анимации
- [Particles.js](https://particles.js.org/) - за анимированный фон

---
