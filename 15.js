function checkAge(age) {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      resolve("Ruxsat berildi");
    } else {
      reject("Yosh yetarli emas");
    }
  });
}

checkAge(18)
  .then(res => console.log(res))   
  .catch(err => console.log(err));

checkAge(16)
  .then(res => console.log(res))
  .catch(err => console.log(err)); 
