const fastFood_btn = document.querySelector('.fastFood');
const polishFood_btn = document.querySelector('.polishFood');
const germanFood_btn = document.querySelector('.germanFood');
const closeBtn = document.querySelector('.clearPlus');
const filters = document.querySelector('.clear__wrapper');

const items = document.querySelectorAll('.main__item');
const itemsArray = [...items]

const fastFoodSort = (e) => {
    e.preventDefault()

    itemsArray.forEach(el => {
        if (el.dataset.food === 'fast') {
            el.style.display = "flex";
        } else {
            el.style.display = "none";
        }
    });
    filters.classList.add('clear__active')
}
const polishFoodSort = (e) => {
    e.preventDefault()

    itemsArray.forEach(el => {
        if (el.dataset.food === 'polish') {
            el.style.display = "flex";
        } else {
            el.style.display = "none";
        }
    });
    filters.classList.add('clear__active')
}
const germanFoodSort = (e) => {
    e.preventDefault()

    itemsArray.forEach(el => {
        if (el.dataset.food === 'german') {
            el.style.display = "flex";
        } else {
            el.style.display = "none";
        }
    });
    filters.classList.add('clear__active')
}


const closeFilters = () => {
    itemsArray.forEach(el => {
        el.style.display = "flex";
    });

    filters.classList.remove('clear__active')
}


//Listeners

closeBtn.addEventListener('click', closeFilters);
germanFood_btn.addEventListener('click', germanFoodSort);
polishFood_btn.addEventListener('click', polishFoodSort);
fastFood_btn.addEventListener('click', fastFoodSort);