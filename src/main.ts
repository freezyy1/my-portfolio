import { createApp } from 'vue'
import App from './App.vue'

// Global styles & libs
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap' // JS bundle
import 'aos/dist/aos.css'
import './assets/styles.scss'

import AOS from 'aos'

// tsParticles via CDN is available on window
declare global { interface Window { tsParticles: any } }

const app = createApp(App)

app.mount('#app')

// init after mount
AOS.init({ once: true, duration: 700, easing: 'ease-out-quad' })
window.tsParticles?.load('tsparticles', {
  fpsLimit: 60,
  background: { color: 'transparent' },
  particles: {
    number: { value: 40 },
    color: { value: ['#6a87ff', '#36d1dc', '#f21d6b'] },
    links: { enable: true, distance: 130, opacity: 0.45 },
    move: { enable: true, speed: 1.2 },
    opacity: { value: 0.5 },
    size: { value: { min: 1, max: 3 } }
  },
  interactivity: { events: { onHover: { enable: true, mode: 'grab' } }, modes: { grab: { distance: 140 } } },
  detectRetina: true
})


// ===== Enhancements: progress bar, parallax, magnetic hover =====
function startProgress(){
  const bar = document.getElementById('top-progress') as HTMLElement | null
  if(!bar) return () => {}
  bar.classList.add('active')
  bar.style.width = '15%'
  const id = window.setInterval(() => {
    const current = parseFloat(bar.style.width || '0')
    if (current < 85) bar.style.width = (current + Math.random()*10).toFixed(2) + '%'
  }, 150)
  return () => { window.clearInterval(id); bar.style.width = '100%'; setTimeout(()=>{ bar.classList.remove('active'); }, 400) }
}

function setupParallax(){
  const content = document.getElementById('heroContent') as HTMLElement | null
  const particles = document.getElementById('tsparticles') as HTMLElement | null
  if(!content) return
  const onScroll = () => {
    const y = window.scrollY || window.pageYOffset
    const clamp = (n:number, min:number, max:number) => Math.max(min, Math.min(max, n))
    const t = clamp(y / 400, 0, 1)
    content.style.transform = `translateY(${(-t*20).toFixed(2)}px)`
    content.style.opacity = String(1 - t*0.35)
    if (particles) particles.style.transform = `translateY(${(t*10).toFixed(2)}px)`
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
}

function setupMagnetic(){
  const els = Array.from(document.querySelectorAll('.magnetic')) as HTMLElement[]
  els.forEach(el => {
    const strength = 12
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width/2
      const y = e.clientY - rect.top - rect.height/2
      el.style.transform = `translate(${(x/rect.width)*strength}px, ${(y/rect.height)*strength}px)`
    }
    const reset = () => { el.style.transform = '' }
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', reset)
    el.addEventListener('click', reset)
  })
}

// Start progress early and stop after load + small delay (sync with preloader)
const stopProgress = startProgress()
window.addEventListener('load', () => { setTimeout(() => stopProgress(), 700) })

// Init effects
setupParallax()
setupMagnetic()
