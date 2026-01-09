// Uchta turli vaqtda bajariluvchi Promise yarating (1s, 2s, 3s) va ularning barchasini Promise.all() bilan kuting.
const a=new Promise((res,rej)=>{
    setTimeout(()=>{
        const m1=[2,3,4,5,2,5,]
        if(m1.length>0){
            res('good')
        }else{
            rej('worse')
        }
    },1000)
})
const b=new Promise((res,rej)=>{
 setTimeout(()=>{
    const m2=["salom",'dunyo']
    for(let i=0; i<m2.length;i++){
        if(m2[i].length>23){
            res(good)
        }else{
            rej('error')
        }
    }
 },2000)
})
const c=new Promise((res,rej)=>{
 setTimeout(()=>{
    const m2=["salom",'dunyo']
    for(let i=0; i<m2.length;i++){
        if(m2[i].length<20){
            res(good)
        }else{
            rej('worsse')
        }
    }
 },3000)
})  
Promise.all([a,b,c]).then((results)=>{
    console.log('Barcha promises muvaffaqiyatli bajarildi:', results)
}).catch((error)=>{
    console.log('Bitta yoki bir nechta promises bajarilmadi:', error)
})