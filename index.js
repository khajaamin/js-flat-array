// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS convert nested to flat array</h1>`;

const arr = [10, 20, 30, [10, 30, 50], [23, 32, [43, 67, 64]]];
const toString = JSON.stringify(arr).replaceAll(/[\[\]]/g, '', true);
console.log('--->', toString.split(',').map(Number));

//
function show(list) {
  const newList = [];
  list.map((item) => {
    if (Array.isArray(item)) {
      newList.push(...show(item));
    } else {
      newList.push(item);
    }
  });
  return newList;
}

console.log(show(arr));
