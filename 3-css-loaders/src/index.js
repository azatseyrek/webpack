import  './index.css';
import _ from 'lodash';
import clearButton from './clearButton';



const buttonEl = document.getElementById('button1');
buttonEl.addEventListener('click', buttonClicked);
function buttonClicked() {
  const el = document.getElementById('header');
  el.innerHTML = 'I have updated the header';

  const listItems = ['apple', 'banana', 'orange', 'pear', 'grape'];
  const ul = document.getElementById('shoppingList');
  _.forEach(listItems, (item) => {
    const li = document.createElement('li');
    li.innerHTML = item;
    ul.appendChild(li);
  });
}
