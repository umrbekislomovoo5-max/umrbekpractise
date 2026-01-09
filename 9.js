async function executeSequentially(promises) {
  const results = [];

  for (let p of promises) {
    results.push(await p);
  }

  return results;
}
const p1 = new Promise(r => setTimeout(() => r(1), 1000));
const p2 = new Promise(r => setTimeout(() => r(2), 1000));
const p3 = new Promise(r => setTimeout(() => r(3), 1000));

executeSequentially([p1, p2, p3])
  .then(res => console.log(res));
