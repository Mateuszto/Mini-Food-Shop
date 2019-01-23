const fastFood_btn = document.querySelector('.fastFood');
const polishFood_btn = document.querySelector('.polishFood');
const germanFood_btn = document.querySelector('.germanFood');

const items = document.querySelectorAll('.main__item');
const itemsArray = [...items]

const fastFoodSort = (e) => {
    e.preventDefault()

    itemsArray.forEach(el => {
        if (el.dataset.food === 'fast') {
            console.log("Sort: Fast-foods");
        } else {
            el.style.display = "none";
        }
    });
}

fastFood_btn.addEventListener('click', fastFoodSort);