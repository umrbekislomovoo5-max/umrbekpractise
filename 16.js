// fetchData(url) async funksiyasi yozing. Agar url bo'sh string bo'lsa xatolik tashlang. Try-catch ishlatib xatolikni ushlang va "Xatolik: ..." formatida qaytaring.

    
async function name(url) {
  try {
    if (!url) {
      throw new Error("Bu URL emas");
    }

    const javob = await fetch(url);
    const data = await javob.json(); 
    return data;

  } catch (error) {
    return `Xatolik: ${error.message}`;
  }
}


name("").then(res => {
  console.log(res); 
});


name("https://jsonplaceholder.typicode.com/users/1")
  .then(res => console.log(res));

