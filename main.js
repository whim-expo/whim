var animado = document.querySelectorAll('.animado');
function detectScroll() {
	var scrollTop = document.documentElement.scrollTop;
	for (let i=0; i<animado.length; i++) {
		let alturaPantalla = animado[i].offsetTop;
		if(alturaPantalla - 400 < scrollTop) {
			animado[i].style.opacity = 1;
			animado[i].classList.add('animacion');
		}
	}
}

var animado2 = document.querySelectorAll('.animado2');
function detectScroll2() {
	let scrollTop = document.documentElement.scrollTop;
	for (var i=0; i<animado2.length; i++) {
		let alturaPantalla = animado2[i].offsetTop;
		if(alturaPantalla - 400 < scrollTop) {
			animado2[i].style.opacity = 1;
			animado2[i].classList.add('animacion2');
		}
	}
}

var divnav = document.querySelectorAll('.divnav');
function navbarScroll() {
	let scrollTop = document.documentElement.scrollTop;
	for (var i=0; i<divnav.length; i++) {
		let alturaPantalla = divnav[i].offsetTop;
		if(alturaPantalla< scrollTop) {
			divnav[i].style.opacity = 1;
			divnav[i].classList.add('shadowNav');
		}
	}
}

var member1 = document.querySelectorAll('.member1');
function member1Scroll() {
	let scrollTop = document.documentElement.scrollTop;
	for (var i=0; i<member1.length; i++) {
		let alturaPantalla = member1[i].offsetTop;
		if(alturaPantalla - 400 < scrollTop) {
			member1[i].style.opacity = 1;
			member1[i].classList.add('slip1');
		}
	}
}

var member2 = document.querySelectorAll('.member2');
function member2Scroll() {
	let scrollTop = document.documentElement.scrollTop;
	for (var i=0; i<member2.length; i++) {
		let alturaPantalla = member2[i].offsetTop;
		if(alturaPantalla - 400 < scrollTop) {
			member2[i].style.opacity = 1;
			member2[i].classList.add('slip2');
		}
	}
}

var member3 = document.querySelectorAll('.member3');
function member3Scroll() {
	let scrollTop = document.documentElement.scrollTop;
	for (var i=0; i<member3.length; i++) {
		let alturaPantalla = member3[i].offsetTop;
		if(alturaPantalla - 400 < scrollTop) {
			member3[i].style.opacity = 1;
			member3[i].classList.add('slip3');
		}
	}
}

var member4 = document.querySelectorAll('.member4');
function member4Scroll() {
	let scrollTop = document.documentElement.scrollTop;
	for (var i=0; i<member4.length; i++) {
		let alturaPantalla = member4[i].offsetTop;
		if(alturaPantalla - 400 < scrollTop) {
			member4[i].style.opacity = 1;
			member4[i].classList.add('slip4');
		}
	}
}

window.addEventListener('scroll', detectScroll);
window.addEventListener('scroll', detectScroll2);
window.addEventListener('scroll', navbarScroll);
window.addEventListener('scroll', member1Scroll);
window.addEventListener('scroll', member2Scroll);
window.addEventListener('scroll', member3Scroll);
window.addEventListener('scroll', member4Scroll);