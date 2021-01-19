// we select the button with the id of added-film
var button = document.getElementById("added-film");
// understand query selector
var ul = document.querySelector("ul");
// we select the input that get the film name doing so giving them the id of film-name
var film = document.getElementById("film-name");
// we set the variable 'enter' to 13 to make to code more readable
var enter = 13;
// creating the button to strike through the watched films


function addFilm () 
{
	// the function create a new li element for the list
	var li = document.createElement("li");
	// we append the value of the of the input with the film-name id the the li
	li.appendChild(document.createTextNode(film.value));
	// we add the possibility to toggle between the class watched and no class
	li.onclick = function () {
		this.classList.toggle("watched");
	};
	// we append the li child with the name film inside the ul element
	ul.appendChild(li);
	// appending the button the sign the film as watched
	// we reset the original value to zero
	film.value = "";
}

function lengthInput() 
{	// we return the value tìof the length of the name film
	return film.value.length;
}

function addFilmAfterClick () 
{
	if (lengthInput() > 0)
	{
		addFilm();
	}
}

function addFilmAfterKeypress (event) 
{
	if (lengthInput() > 0 && event.keyCode === enter)
	{
		addFilm();
	}
}

button.addEventListener("click", addFilmAfterClick);

film.addEventListener("keypress", addFilmAfterKeypress);