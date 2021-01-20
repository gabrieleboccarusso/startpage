// we select the button with the id of added-film
var button = document.getElementById("added-film");
// understand query selector
var ul = document.querySelector("ul");
// we select the input that get the film name doing so giving them the id of film-name
var film = document.getElementById("film-name");
// we set the variable 'enter' to 13 to make to code more readable
var enter = 13;
// selecting the space with the id of watched-film
var watched = document.getElementById("watched-film");


function addFilm () 
{
	// we create a new li element for the list
	var li = document.createElement("li");
	// we create a new button with the li element
	var btn = document.createElement("button");
	//adding text to the button
	btn.appendChild(document.createTextNode("delete it")); 
	// awhen clicked on the button the li element and the buttons itself get deleted
	btn.onclick = deleteFilm = () => {
		ul.removeChild(li);
		btn.remove();
	};
	// we append the value of the of the input with the film-name id the the li
	li.appendChild(document.createTextNode(film.value + " "));
	// we add the possibility to toggle between the class watched and no class
	li.onclick = function () {
		this.classList.toggle("watched"); 
	}
	// we append the delete button to the li element
	li.appendChild(btn);
	// we append the li child with the name film inside the ul element
	ul.appendChild(li);
	// we reset the original value to zero
	film.value = "";
}

// make sure that the string is not void
lengthInput = () => {
	return film.value.length;
}

addFilmAfterClick = () => {
	if (lengthInput() > 0) {
		addFilm();
	}
};

addFilmAfterKeypress = (event) =>  {
	if (lengthInput() > 0 && event.keyCode === enter) {
		addFilm();
	}
}

button.addEventListener("click", addFilmAfterClick);

film.addEventListener("keypress", addFilmAfterKeypress);


