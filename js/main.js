$(function(){
  $("#phone").mask("+7(999) 999-99-99");
});

document.querySelector('.form__request-price').value = '0' + ' рублей'
/*
$(document).ready(function() {
  $('#form').submit(function(e) {
    e.preventDefault();
    var fieldVal = $('.field').val();
 
    $(".error").remove();
 
    if (fieldVal < 0) {
      $('.field').after('<span class="error">Число не должно быть меньше 0.</span>');
    }

    if (isNaN(fieldVal) && fieldVal !== '') {
      $('.field').after('<span class="error">Введите число.</span>');
    }
    
  });
});



var removeValidation = function () {
  var errors = form.querySelectorAll('.error')

  for (var i = 0; i < errors.length; i++) {
    errors[i].remove()
  }
}

var generateError = function (text) {
  var error = document.createElement('span')
  error.className = 'error'
  error.style.color = 'red'
  error.innerHTML = text
  return error
}

var checkFieldsPresence = function () {
  for (var i = 0; i < fields.length; i++) {
    if (fields[i].value < 0) {
      console.log('field is blank', fields[i])
      var error = generateError('Число не должно быть меньше 0.')
      fields[i].insertAdjacentHTML('afterend', 'error')
    }
  }
}


for (var i = 0; i < fields.length; i++) {
	fields[i].addEventListener('blur', function() {
		this.classList.remove
		if (this.value < 0) {

      this.insertAdjacentHTML('afterend', '<span class="error">Число не должно быть меньше 0.</span>');
    } 
	}
		)
	}


/*
form.addEventListener('submit', function (e) {
  e.preventDefault();

  removeValidation();

  checkFieldsPresence();

  for(let i = 0; i < ceilingarea.length; i++) {

  	if (ceilingarea[i].value < 0) {
      ceilingarea[i].insertAdjacentHTML('afterend', '<span class="error">Число не должно быть меньше 0.</span>');
    }

    if (isNaN(ceilingarea[i].value) && ceilingarea[i].value !== '') {
      ceilingarea[i].insertAdjacentHTML('afterend', '<span class="error">Введите число.</span>');
    }
    console.log(typeof ceilingarea[i].value)
  }

})*/

var form = document.querySelector('#form');
var fields = form.querySelectorAll('.field');
var errors = form.querySelectorAll('.error');

var removeValidation = function () {
  for (var i = 0; i < errors.length; i++) {
    errors[i].remove()
  }
}

var setFirstValidation = function () {
	for (var i = 0; i < fields.length; i++) {

		if (fields[i].value < 0) {
			fields[i].insertAdjacentHTML('afterend', '<span class="error">Число не должно быть меньше 0.</span>')
		}
	}
}

var setSecondValidation = function () {
	for (var i = 0; i < fields.length; i++) {

		if (isNaN(fields[i].value) && fields[i].value !== '') {
			fields[i].insertAdjacentHTML('afterend', '<span class="error">Введите число.</span>')
		}
	}
}

form.addEventListener('submit', function(e) {
	e.preventDefault();
	removeValidation();
	setFirstValidation();
	setSecondValidation();
})





/*$( document ).ready(function() {
    $(".form__request-submit").click(
		function(){
			sendAjaxForm('ajax_form', 'action_ajax_form.php');
			return false; 
		}
	);
});
 
function sendAjaxForm(ajax_form, url) {
    $.ajax({
        url:     url, //url страницы (action_ajax_form.php)
        type:     "POST", //метод отправки
        dataType: "html", //формат данных
        data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
        success: function(response) { //Данные отправлены успешно
        	result = $.parseJSON(response);
        	$('#exampleModalCenter').style = "display: block;"
        	/*$('#result_form').html('Имя: '+result.name+'<br>Телефон: '+result.phonenumber);
    	},
    	error: function(response) { // Данные не отправлены
            /*$('#result_form').html('Ошибка. Данные не отправлены.');
    	}
 	});
}*/