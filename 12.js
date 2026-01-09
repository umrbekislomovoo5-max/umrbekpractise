function task11(a,b){
    try{
        if(b==0){
            throw new Error("xatolik bor")
        }
         return a/b

        } catch (error){
            return error.message
        }
       
    }
console.log(task11(1,0))
