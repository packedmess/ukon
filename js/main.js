$(function(){
  $("#phone").mask("+7(999) 999-99-99");
});

document.querySelector('.form__request-price').value = '0' + ' рублей'

let form = document.querySelector('#form');
let fields = form.querySelectorAll('.field');

let removeValidation = function () {
	let errors = form.querySelectorAll('.error');
  	for (let error of errors) {
    	error.remove()
  	}
}

let setFirstValidation = function () {
	for (let field of fields) {
		if (field.value < 0) {
			field.insertAdjacentHTML('afterend', '<span class="error">Число не должно быть меньше 0.</span>')
		}
	}
}

let setSecondValidation = function () {
	for (let field of fields) {
		if (isNaN(field.value) && field.value !== '') {
			field.insertAdjacentHTML('afterend', '<span class="error">Введите число.</span>')
		}
	}
}

form.addEventListener('submit', function(e) {
	e.preventDefault();
	removeValidation();
	setFirstValidation();
	setSecondValidation();
})