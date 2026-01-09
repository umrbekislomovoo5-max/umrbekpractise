// Uchta Promise yarating:
// Birinchisi 1 soniyadan keyin raqam 5 ni qaytarsin
// Ikkinchisi bu raqamni 2 ga ko'paytirsin
// Uchinchisi natijani ekranga chiqarsin
const firstly=new Promise((res,rej)=>{
    setTimeout(()=>{
        res(5)
    },5000)
})
const ikkinchi=((num)=>{
     return new Promise((res,rej)=>{
        res(num*2)
    })
})
firstly.then((result)=>{
    return ikkinchi(result)
}).then((natija)=>{
    console.log('natija',natija)
}).catch((error)=>{
    console.log(error)
})
