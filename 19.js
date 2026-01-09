const umar2=new Promise((res,rej)=>{
    setTimeout(()=>{
        const data=[1,2,3,4,5]
        if(data.length>0){
            res(data)
        }else{
            rej('malumot topilmadi')
        }

    },2000)
})
umar2.then((data)=>{
    console.log(data)
}).catch((rej)=>{
    console.log(rej)
})