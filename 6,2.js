
fetch('https://jsonplaceholder.typicode.com/todos/').then((res)=>{
    if(!res.ok) throw new Error('serverda xato')
        return res.json();
})
.then(Users=>{
    const juft=Users.filter(user=> user.id%2===0);
    juft.forEach(user => {
        console.log(`Id:${user.id},name${user.name}`)
        
    });
        
    }
).catch((error)=>{
    console.log(error.message)
})