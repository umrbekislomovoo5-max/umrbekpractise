const umar=new Promise((res,rej)=>{
    if(true){
        res('ish mufaqiyatli yakunlandi')
    }else{
        rej('error')
    }
})
umar.then(res=>console.log(res)).catch(rej=>console.log(rej))