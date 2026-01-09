// waitAndReturn(value, seconds) funksiyasi yarating. U berilgan sekundlar kutib, keyin value ni qaytarsin. Promise ishlatilsin.
function waitAndReturn(value, seconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, seconds * 1000); 
  });
}


waitAndReturn(2000, 2)
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });
