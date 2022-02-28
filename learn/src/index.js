import add from './fn/export';
import './style/index.css';
import _img from './assets/1.jpg';
const img = document.createElement('img');
img.src = _img;
document.querySelector('#root').appendChild(img);
const ret = add(1, 2);
console.log(ret, 'ret');
