import './clearButton.css';


const el = document.createElement('button');
el.innerHTML = 'Clear';
el.classList.add('clearButton');

el.onclick = () => {
    const ul = document.getElementById('shoppingList');
    ul.innerHTML = '';
};


document.body.appendChild(el);

export default clearButton;