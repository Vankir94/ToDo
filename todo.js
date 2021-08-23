const input = document.querySelector('.block-form-input');
const btn = document.querySelector('.block-form-btn');
const blockList = document.querySelector('.block-list');

function createElements(text) {
    let newElem = document.createElement('p');
    let deleteSpan = document.createElement('span');

    deleteSpan.className = 'block-list-delete';
    deleteSpan.textContent = 'delete';


    newElem.className = 'block-list-elem';
    newElem.textContent = text;
    newElem.appendChild(deleteSpan);

    deleteSpan.addEventListener('click', () => blockList.removeChild(newElem));

    blockList.appendChild(newElem);
}


btn.addEventListener('click', e => {
    e.preventDefault();
    if(!(input.value === 'enter: ' || input.value === '')) {
        createElements(input.value);
        input.value = 'enter: ';
    }
});
input.addEventListener('focus', () => input.value = '');
input.addEventListener('blur', () => {
    if(input.value === '') {
        input.value = 'enter: ';
    };
});