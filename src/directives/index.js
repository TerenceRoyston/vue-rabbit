import { useIntersectionObserver } from '@vueuse/core'

export const  lazyPlugin1={
  install(app){
    app.directive(
      'img-lazy1',{
        mounted(el,binding){
          console.log(el,'=='+binding.value)
          // 解构获取stop方法，图片加载完成后停止监听
          // 如果不加stop方法，那么在图片加载完成后，监听会继续执行，导致图片重复加载
          const {stop} =useIntersectionObserver(
            el,
            ([{isIntersecting}]) => {
              if(isIntersecting){
                el.src = binding.value
                stop()
              }
              console.log(isIntersecting)
            },
          )
        }
      }
    )
  }
}
