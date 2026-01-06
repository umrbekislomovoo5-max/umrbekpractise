// Oddiy Promise yarating va uni 2 soniya kutgandan keyin "Salom, dunyo!" xabari bilan resolve qiling.
let task1=new Promise((res,rej)=>{
    setTimeout(()=>{
        console.log('salom dunyo')
    },2000)
})
task1.then((xabar)=>{
    console.log(xabar)
}).catch((error)=>{
    console.log(error)
})