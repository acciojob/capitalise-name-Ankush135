//your JS code here. If required.
let inputName = document.getElementById("fname");

inputName.addEventListeners("blur", function() {
	inputName.value = inputName.value.toUpperCase();
});

