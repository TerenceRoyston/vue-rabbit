// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import {getCategory} from "@/apis/testApi.js";
import { useIntersectionObserver } from '@vueuse/core'

import {lazyPlugin1} from "@/directives/index.js";

import '@/styles/common.scss'

getCategory().then(res => {
  console.log(res)
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin1)
app.mount('#app')

app.directive(
  'img-lazy',{
    mounted(el,binding){
      console.log(el,'=='+binding.value)
      useIntersectionObserver(
        el,
        ([{isIntersecting}]) => {
          if(isIntersecting){
            el.src = binding.value
          }
          console.log(isIntersecting)
        },
      )
    }
  }
)
