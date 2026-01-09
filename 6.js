// Foydalanuvchi ma'lumotlarini server'dan yuklash imitatsiyasini yarating. Agar user ID juft bo'lsa, muvaffaqiyatli ma'lumot qaytaring, aks holda xato qaytaring.
// function loadUserData(userId) {
//   // Sizning kodingiz
// }

// loadUserData(2);   Success
// loadUserData(3);    Error
function yuklanyatiUser(userid){
   return new Promise((res,rej)=>{
    setTimeout(()=>{
        if(userid%2==0){
            res({id:userid,name:userid})
        }else{
            rej('bunday odam yoq')
        }
    },5000)
    console.log('bir necha daqiqa kutib turing malumotni qidiryapmiz')

})}
yuklanyatiUser(2).then((res)=>{
    console.log(res)
}).catch((rej)=>{
    console.log(rej)
})
yuklanyatiUser(3).then((res)=>{
    console.log(res)
}).catch((res)=>{
    console.log(res)
})
