
function promiseWithTimeout(promise, timeout) {
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => {
      reject("Timeout error");
    }, timeout);
  });

  return Promise.race([promise, timeoutPromise]);
}


const testPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise muvaffaqiyatli bajarildi!");
  }, 2000);
});


promiseWithTimeout(testPromise, 1000)
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  });
