const imgDisplay = document.querySelectorAll('.card-img');
const locat = document.getElementsByClassName('location');
const card_desc = document.getElementsByClassName('card-desc');
const carousel_button = document.getElementsByClassName('slide');
let slide_index = 0;

imgDisplay.forEach((el, i) => {
	el.onmouseenter = () => {
		locat[i].style.opacity = 0;
		locat[i].style.transition = 'opacity .3s ease-in-out';
		card_desc[i].style.display = 'none';
	};
	el.onfocus = () => {
		locat[i].style.opacity = 0;
		locat[i].style.transition = 'opacity .3s ease-in-out';
		card_desc[i].style.display = 'none';
	};
	el.onmouseleave = () => {
		locat[i].style.opacity = 1;
		card_desc[i].style.display = 'block';
	};
	el.onblur = () => {
		locat[i].style.opacity = 1;
		card_desc[i].style.display = 'block';
	};
});

search_results_outer.onclick = (e) => {
	if (e.target.className.includes('slide')) {
		if (e.target.className.includes('slide-next')) slide_index = (slide_index + 1) % 4;
		else if (e.target.className.includes('slide-prev')) slide_index = (slide_index + 3) % 4;

		search_results.scrollTo({
			top: 0,
			left: slide_index * (card[0].clientWidth + 16),
			behavior: 'smooth',
		});
		// console.log(card[0].scrollLeft);
	}
};
