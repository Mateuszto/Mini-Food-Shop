//Filter Function
const closeBtn = document.querySelector('.clearPlus');
const filters = document.querySelector('.clear__wrapper');

const items = document.querySelectorAll('.main__item');
const itemsArray = [...items]

const sortFunction = (itemName) => {
    event.preventDefault()

    itemsArray.forEach(el => {
        if (el.dataset.food === itemName || itemName === 'clear_filters') {
            el.style.display = "flex";
        } else {
            el.style.display = "none";
        }
    });
}
document.body.addEventListener('click', event => {
    const elementClicked = event.target;
    if (elementClicked.classList.contains('filterFood')) {
        sortFunction(elementClicked.dataset.food);
    }
});
