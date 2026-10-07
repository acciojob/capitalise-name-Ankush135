//your JS code here. If required.
let inputName = document.getElementById("fname");

inputName.addEventListener("blur", function() {
	inputName.value = inputName.value.toUpperCase();
});

