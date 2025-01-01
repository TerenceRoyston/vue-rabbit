console.log("hello , javascript")

function f1(){
  console.log("f1")
}

const ff2 = function f2(index){
  console.log(index)
}

async function f3(){
  console.log("f31")
  setTimeout(() => {
    console.log("f32 setTimeout")
  }, 1000)
  setTimeout(() => {
    console.log("f33 setTimeout")
  }, 1000)
}


f3()
