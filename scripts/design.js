const container = document.getElementsByClassName('container');
const slide_button = document.getElementsByClassName('slide_button_id');
const search_bar = document.getElementById('search-field');
const optionList = document.getElementsByClassName('search-options-list')[0];
const dropdown = document.getElementsByClassName('dropdown')[0];
const cancel = document.getElementsByClassName('cancel')[0];
const search_results = document.getElementsByClassName('search-results')[0];
const search_results_outer = document.getElementsByClassName('search-results-outer')[0];
const card = document.getElementsByClassName('card');
const menu = document.getElementsByClassName('menu')[0];
const nav_options_container = document.getElementsByClassName('nav-options-container')[0];
let nav_display = false;
const container_three = document.getElementsByClassName('container-three')[0]

let activeEl = '';

const options = [
	'Lagos, Nigeria',
	'Sydney, Australia',
	'Washington D.C, U.S.A',
	'London, U.K.',
	'Hong Kong, China',
	'Paris, France',
	'Madrid, Spain',
	'Ontario, Canada',
];

function displayOptions() {
	setTimeout(() => {
		optionList.innerHTML = '';
		// if (search_bar.value != '') dropdown.disabled = true;
		// else dropdown.disabled = false;
		options
			.filter((i) => {
				return i.toLowerCase().includes(search_bar.value.toLowerCase());
			})
			.sort()
			.map((i) => {
				let node = document.createElement('button');
				let textNode = document.createTextNode(i);
				node.appendChild(textNode);
				node.classList.add('search-option');
				optionList.appendChild(node);
			});
	}, 600);
}

slide_button_id.onclick = () => {
	window.scrollBy({ behavior: 'smooth', left: 0, top: container[1].offsetTop });
	// setTimeout(() => search_bar.focus(), 500);
};

search_bar.onkeyup = displayOptions;

search_bar.onblur = () => {
	setTimeout(() => {
		optionList.innerHTML = '';
		container_three.scrollIntoView(true)
	}, 500);
};

search_bar.onfocus = displayOptions;

dropdown.onclick = () => {
	search_bar.focus();
};

optionList.addEventListener('click', (e) => {
	if (e.target.className === 'search-option') {
		search_bar.value = e.target.innerHTML;
		document.getElementsByClassName('city-name')[0].innerHTML = e.target.innerHTML;
		search_results_outer.style.visibility = 'visible';
		//
	}
});

cancel.onclick = () => {
	search_bar.value = '';
	search_results_outer.style.visibility = 'hidden';
	document.getElementsByClassName('city-name')[0].innerHTML = '';
};

menu.onclick = () => {
	if (nav_display) {
		nav_options_container.style.opacity = 0;
		nav_options_container.style.visibility = 'hidden';
	} else {
		nav_options_container.style.visibility = 'visible';
		nav_options_container.style.opacity = 1;
	}
	nav_display = !nav_display;
};
