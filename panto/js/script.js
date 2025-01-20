const infoBtns = document.querySelectorAll('.info-dot');
const infoHints = document.querySelectorAll('.info-hint');

// Клик по кнопкам с подсказками
for (let btn of infoBtns) {
    btn.addEventListener('click', showHint);
}


function showHint(event) {
    event.stopPropagation();

    //Hide all hint
    for (let hint of infoHints) {
        hint.classList.add('none');
    }

    // show current hint
    this.parentNode.querySelector('.info-hint').classList.toggle('none');
}

// Закрываем подсказки при клике по всему документу
document.addEventListener('click', closeHints)

function closeHints() {
    for (let hint of infoHints) {
        hint.classList.add('none');
    }
}

//Запрещаем всплытие события клика при клике на подсказки
for (let hint of infoHints) {
    hint.addEventListener('click', (event) => {
        event.stopPropagation();
    });
}


//Swiper slider
const swiper = new Swiper('.swiper', {
    // Настройки Swiper
    //direction: 'horizontal', // Ориентация слайдера
    //loop: true, // Бесконечная прокрутка
    freeMode: true, //Плавная прокрутка
    slidesPerView: 1, //Количество слайдов
    spaceBetween: 42, // Отступы между слайдами

    breakpoints: {
        600: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        920: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1230: {
            slidesPerView: 4,
            spaceBetween: 42,
        },
    },

    navigation: {
        nextEl: '#sliderNext',
        prevEl: '#sliderPrev',
    },
});

// Tabs
const tabsBtns = document.querySelectorAll('[data-tab]');
const tabsProducts = document.querySelectorAll('[data-tab-value]');

for (let btn of tabsBtns) {

    btn.addEventListener('click', function () {
        //console.log('clock');

        // Убираем активные классы у всех кнопок
        for (let btn of tabsBtns) {
            btn.classList.remove('tab-controls__btn--active');
        }

        // Добавляем активный класс к текущей кнопке
        this.classList.add('tab-controls__btn--active');

        // Отобразить нужные товары и скрыть остальные товары
        for (let product of tabsProducts) {

            // Проверка на отображение всех слайдов
            if (this.dataset.tab === 'All') {
                product.classList.remove('none');
            } else {
                if (product.dataset.tabValue === this.dataset.tab) {
                    product.classList.remove('none');
                } else {
                    product.classList.add('none');
                }
            }
        }

        // Update swiper
        swiper.update()
    })
}

//mobile nav
const mobileNavOpenBtn = document.querySelector('#open-mobile-nav-btn');
const mobileNavCloseBtn = document.querySelector('#close-mobile-nav-btn');
const mobileNav = document.querySelector('.mobile-nav-wrapper');


mobileNavOpenBtn.onclick = function () {
    mobileNav.classList.add('mobile-nav-wrapper--open');
}
mobileNavCloseBtn.onclick = function () {
    mobileNav.classList.remove('mobile-nav-wrapper--open');
}


//close-mobile-nav-btn