
function processNumber(num) {
  return new Promise((resolve, reject) => {
    resolve(num);
  });
}

processNumber(10)
  .then((res) => {
    const result = res * 10;
    console.log("10 ga kopaytirildi:", result);
    return result;
  })
  .then((result) => {
    const result2 = result - 5;
    console.log("5 ayirildi:", result2);
    return result2;
  })
  .then((result2) => {
    const result3 = result2 / 2;
    console.log("2 ga bolindi:", result3);
    return result3;
  })
  .catch((err) => {
    console.log("Xato:", err);
  });
