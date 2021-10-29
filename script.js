// script for changing hero and quote

setTimeout(() => {
	console.log('animation')

	document.getElementById('hero-img').src = '/images/hero-test-2.png'
	document.getElementById('quote').innerHTML =
		'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.'
}, 3000)

const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.header--nav--list')

const mobileMenu = () => {
	hamburger.classList.toggle('active')
	navMenu.classList.toggle('active')
}

hamburger.addEventListener('click', mobileMenu)
