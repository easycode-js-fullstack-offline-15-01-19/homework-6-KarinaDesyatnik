// -------------------------- Home work --------------------------
// -------------------------- Десятник Карина --------------------------

//1.По нажатию на кнопку "btn-msg" должен появиться алерт с тем текстом который находится в атрибуте data-text у кнопки.


let btnMsg = document.getElementById('btn-msg');
btnMsg.addEventListener('click', function (e) {
    alert(e.target.dataset.text);
});

//2. При наведении указателя мыши на "btn-msg", кнопка становится красной; когда указатель мыши покидает кнопку,
 //она становится прежнего цвета. Цвет менять можно через добавление класса.

 btnMsg.addEventListener('mouseover', function (e) {
    e.target.classList.add('red');
});
btnMsg.addEventListener('mouseleave', function (e) {
    e.target.classList.remove('red');
});

//3. При нажатии на любой узел документа показать в элементе с id=tag имя тега нажатого элемента.

let body = document.body;
body.addEventListener('click', function (e) {
    let tag = document.getElementById('tag');
    tag.insertAdjacentHTML('beforeend', " " + e.target.tagName);
});

// 4. При нажатии на кнопку btn-generate добавлять в список ul элемент списка Li 
//с текстом Item + порядковый номер Li по списку, т.е Item 3, Item 4 и т.д 
let btnGenerate = document.getElementById('btn-generate');
btnGenerate.addEventListener('click', function (e) {
    let ul = document.getElementsByTagName('ul')[0];
    let newLi = document.createElement('li');
    newLi.innerHTML = "Item " + (parseInt(ul.children.length) + 1);
    ul.appendChild(newLi);
});