import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],

  { // 新增配置对象，专门针对.vue文件
    files: ['**/*.vue'], // 只针对vue文件生效
    rules: {
      'vue/multi-word-component-names': 'off', // 关闭vue组件多单词命名规则，'off' 等同于 0
    },
  },
]
