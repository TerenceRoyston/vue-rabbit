import {getCategoryAPI} from '@/apis/layout.js'
import { defineStore } from 'pinia'
import { ref } from 'vue'


export const useCategoryStore = defineStore("useCATE",
  () => {
    console.log('ohhhh')
    const categoryList = ref([])
    const getCategory = async () => {
      const res = await getCategoryAPI()
      categoryList.value = res.result
    }

    return {
      getCategory,
      categoryList,
    }
  }
)
