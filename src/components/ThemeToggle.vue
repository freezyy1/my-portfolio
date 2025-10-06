<template>
  <div class="theme-toggle-wrapper" v-click-outside="closeDropdown">
    <button 
      class="theme-toggle-btn" 
      type="button" 
      @click="toggleDropdown"
    >
      <i :class="iconClass" class="theme-icon"></i>
    </button>
    <transition name="dropdown-fade">
      <ul v-if="isOpen" class="theme-dropdown">
        <li>
          <button 
            class="theme-item" 
            :class="{ active: active === 'dark' }"
            @click="choose('dark')"
          >
            <i class="fa-solid fa-moon"></i>
            <span>Темная</span>
            <i v-if="active === 'dark'" class="fa-solid fa-check ms-auto"></i>
          </button>
        </li>
        <li>
          <button 
            class="theme-item" 
            :class="{ active: active === 'light' }"
            @click="choose('light')"
          >
            <i class="fa-solid fa-sun"></i>
            <span>Светлая</span>
            <i v-if="active === 'light'" class="fa-solid fa-check ms-auto"></i>
          </button>
        </li>
        <li>
          <button 
            class="theme-item" 
            :class="{ active: active === 'system' }"
            @click="choose('system')"
          >
            <i class="fa-solid fa-desktop"></i>
            <span>Системная</span>
            <i v-if="active === 'system'" class="fa-solid fa-check ms-auto"></i>
          </button>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { currentTheme, setTheme, initTheme, getSystemTheme, type Theme } from '../ui/useTheme'

const active = ref<Theme>('dark')
const isOpen = ref(false)

onMounted(() => {
  initTheme()
  active.value = currentTheme() || 'dark'
})

function toggleDropdown() {
  isOpen.value = !isOpen.value
}

function closeDropdown() {
  isOpen.value = false
}

function choose(t: Theme){
  setTheme(t)
  active.value = t
  closeDropdown()
}

const iconClass = computed(() => {
  if (active.value === 'light') return 'fa-solid fa-sun'
  if (active.value === 'dark') return 'fa-solid fa-moon'
  return getSystemTheme() === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun'
})

// Директива клика вне элемента
const vClickOutside = {
  mounted(el: HTMLElement, binding: any) {
    el.clickOutsideEvent = (event: MouseEvent) => {
      if (!(el === event.target || el.contains(event.target as Node))) {
        binding.value()
      }
    }
    document.addEventListener('click', el.clickOutsideEvent)
  },
  unmounted(el: HTMLElement) {
    document.removeEventListener('click', el.clickOutsideEvent)
  }
}
</script>

<style scoped>
.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.dropdown-fade-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>

