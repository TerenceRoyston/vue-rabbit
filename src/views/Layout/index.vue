<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from "@/views/Layout/components/LayoutFixed.vue";
import Home from "@/views/Home/index.vue";

import {useCategoryStore} from '@/stores/category.js'
import {onMounted} from "vue";

const categoryStore = useCategoryStore()

onMounted(
  () => {
    categoryStore.getCategory()
    console.log("===>"+categoryStore.categoryList)
    setTimeout(() => {console.log("okkkkkk")} , 2000)
    console.log("===>"+categoryStore.categoryList)
  }
)


</script>

<template>
  <LayoutNav />
  <LayoutFixed />
  <LayoutHeader />
  <Home />
  <RouterView />
  <LayoutFooter />
</template>
