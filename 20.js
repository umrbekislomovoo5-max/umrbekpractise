function umar3(callback){
    setTimeout(()=>{
        const data=['olma','anor','nok','shaftoli']
        callback(data)
    },2000)
}
umar3((fruits) => {
    console.log("Fruits:", fruits);
});

