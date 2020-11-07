// alert("hola mundo!!");


document.getElementById("comming__button").addEventListener("click", validarEmail);

	commingInput = document.getElementById("email");
	commingErrorEmailIcon = document.getElementById("comming__error-email-icon");
	commingErrorEmailMessage = document.getElementById("comming__error-email-message");



function validarEmail() {

	emailText = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
	
	
  if (emailText.test(commingInput.value)){
	//  alert("La dirección de email " + campoEmail.value + " es correcta.");
	commingInput.classList.remove('has-error');
	commingErrorEmailIcon.classList.add('hidden');
	commingErrorEmailMessage.classList.add('hidden');	

	
} else {
	//  alert("La dirección de email es incorrecta.");
	commingInput.classList.add('has-error');
	commingErrorEmailIcon.classList.remove('hidden');
	commingErrorEmailMessage.classList.remove('hidden');	
  }
}


