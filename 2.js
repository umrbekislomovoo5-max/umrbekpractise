// Promise yarating va uni 1 soniya kutgandan keyin "Xato yuz berdi!" xabari bilan reject qiling. Keyin .catch() yordamida xatoni ushlang
const task2=new Promise((res,rej)=>{
    setTimeout(()=>{
        if(false){
            res('succes')
        }else{
            rej('xato yuz berdi')
        }
    },5000)
})
task2.then((res)=>{
    console.log(res)
}).catch((rej)=>{
    console.log(rej)
})