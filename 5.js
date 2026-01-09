// Uchta Promise yarating va Promise.race() yordamida eng tez bajariliganini toping.
const b1=new Promise((res,rej)=>{
    res(1)
})
const b2=new Promise((res,rej)=>{
    res(2)
})
const b3=new Promise((res,rej)=>{
    res(3)
})
Promise.race([b1,b2,b3]).then((res)=>{
    console.log(res)
}).catch((rej)=>{
    console.log(rej)
})