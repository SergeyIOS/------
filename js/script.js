window.addEventListener('scroll', (e) => {
	let topOffset = window.scrollY;
	if (topOffset > 400) {
		document.querySelector('.heading').classList.add('scrolled');
	} else {
		document.querySelector('.heading').classList.remove('scrolled');
	}
})

let menu_btn = document.querySelector('.hamburger');

menu_btn.addEventListener('click', () => {
	let ul = document.querySelector('ul');
	let li = document.querySelector('li');

	function hasClass(el, clss) {
		return el.classList.contains(clss);
	}
	if (menu_btn.classList.contains("is-active")) {
		ul.style.top = '-180px';
		menu_btn.classList.remove('is-active');


	} else {
		menu_btn.classList.add('is-active');
		ul.style.top = '80px';

		ul.addEventListener('click', () => {
			ul.style.top = '-180px';
			menu_btn.classList.remove('is-active');

		});
	}
});

// Элементы на странице
const slider = document.querySelector('#slider');
const sliderItems = Array.from(slider.children);
const btnNext = document.querySelector('#next');
const btnPrev = document.querySelector('#prev');

sliderItems.forEach(function (slide, index) {
	// Скрываем все слайды, кроме первого
	if (index !== 0) slide.classList.add('hidden');

	// Добавляем индексы
	slide.dataset.index = index;

	// Добавляем data атрибут active для первого / активного слайда
	sliderItems[0].setAttribute('data-active', '');

	// Клик по слайдам
	slide.addEventListener('click', function () {
		showNextSlide('next');
	});
});

btnNext.onclick = function () {
	console.log('Next Slide');
	showNextSlide('next');
};

btnPrev.onclick = function () {
	console.log('Prev Slide');
	showNextSlide('prev');
};

function showNextSlide(direction) {
	// Скрываем текущий слайд
	const currentSlide = slider.querySelector('[data-active]');
	const currentSlideIndex = +currentSlide.dataset.index;
	currentSlide.classList.add('hidden');
	currentSlide.removeAttribute('data-active');

	// Рассчитываем след индекс в зависимости от направления движения
	let nextSlideIndex;
	if (direction === 'next') {
		nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
	} else if (direction === 'prev') {
		nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
	}

	// Показываем след слайд
	const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
	nextSlide.classList.remove('hidden');
	nextSlide.setAttribute('data-active', '');
}

let hiddenTextProcess = document.querySelector('.process_block_text');
let processBlock = document.querySelectorAll('.process_block');


processBlock.forEach((e) => {
	e.addEventListener('mouseover', () => {
		e.setAttribute('style', `
	  transition: 2s "ease-in";
	  box-shadow: 10px 10px 15px rgba(0, 0,  0, .5);
	  border-radius: 20px;
	`)

		e.querySelector('.process_block_text').setAttribute('style', `
	// display: inline;
	  transition: 2s "ease-in";
	  opacity: 1;
	`)
	})
	e.addEventListener('mouseout', () => {
		e.querySelector('.process_block_text').setAttribute('style', `
	// display: none;
	  transition: 2s "ease-out";
	  opacity: 0;
	`)
		e.setAttribute('style', `
	  transition: 2s "ease-in";
	  box-shadow: ;
	`)
	})
})






// function getHidden_1(hide, seconds, animation) {
// 	hiddenTextProcess.setAttribute('style', `
// 	display: inline;
// 	  transition: ${seconds}s ${animation};
// 	`)
// }

// function getHidden_2(hide, seconds, animation) {
// 	hiddenTextProcess.setAttribute('style', `
// 	display: none;
// 	  transition: ${seconds}s ${animation};
// 	`)
// }
// processBlock.forEach((e) => {
// 	e.addEventListener('mouseover', () => getHidden_1(true, 2, "ease-in"));
// 	e.addEventListener('mouseout', () => getHidden_2(false, 2, "ease-out"));	
// })






// processBlock.addEventListener('mouseout', () => getHidden_2(false, 2, "ease-out"));