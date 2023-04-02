//your JS code here. If required.
function getRandomTime() {
  return Math.floor(Math.random() * 3) + 1;
}

function createPromise(time) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(time);
    }, time * 1000);
  });
}

const promises = [  createPromise(getRandomTime()),  createPromise(getRandomTime()),  createPromise(getRandomTime())];

Promise.all(promises).then(results => {
  const total = results.reduce((acc, curr) => acc + curr, 0);
  const rows = document.querySelectorAll('table tr');
  
  rows[0].remove();
  rows[1].querySelector('td').textContent = results[0];
  rows[2].querySelector('td').textContent = results[1];
  rows[3].querySelector('td').textContent = results[2];
  rows[4].querySelector('td').textContent = total.toFixed(3);
});
