const body = document.querySelector('body');
const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
const mobileMenu = document.querySelector('.mobile-menu');

header.addEventListener('click', function() {
	if (body.offsetWidth <= 768) {
		if (!nav.classList.contains('nav-show') ) {
			nav.classList.add('nav-show');
			mobileMenu.style.display = 'none';
		} else {
			nav.classList.remove('nav-show');
			mobileMenu.style.display = 'block';
		}
	}
});