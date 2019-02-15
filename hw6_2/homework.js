// -------------------------- Home work 6_2 --------------------------
// -------------------------- Десятник Карина --------------------------

let dropdownMenu = document.getElementsByClassName('menu')[0];
dropdownMenu.addEventListener('click', function (e) {
    let menuItem = e.target.parentElement.getElementsByClassName('dropdown-menu')[0];
    if (menuItem) {
        let allItems = document.getElementsByClassName('dropdown-menu');
        for (let i = 0; i < allItems.length; i++) {
            if (allItems[i].parentElement.getElementsByTagName('span')[0].textContent !== menuItem.parentElement.getElementsByTagName('span')[0].textContent) {
                allItems[i].classList.add('d-none');
            }
        }
        if (menuItem.classList.contains('d-none')) {
            menuItem.classList.remove('d-none');
        }
        else {
            menuItem.classList.add('d-none');
        }
    }
});