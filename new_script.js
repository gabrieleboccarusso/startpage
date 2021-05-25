//  different attempt at saving data into the local storage

// if the array doesn't exists we create a new one,
// otherwise we save it into a variable
let arr;
if (!localStorage.getItem('links'))
{
	console.log('the arr doesn\'t exists')
	localStorage.setItem("links", '[]');
} else {
	arr = JSON.parse(localStorage.getItem('links'));
	//arr = localStorage.getItem('links');
	// arr.push({1: 1, 2: 2});
	arr.push(1);
	console.log('it exists');
	console.log(arr);
	localStorage.removeItem('links')
	localStorage.setItem('links', JSON.stringify(arr));
}

// always deleting and re-storing the new array is not a good idea,
// a possible solutionis here:
// https://stackoverflow.com/questions/58155249/how-to-change-the-value-of-an-item-in-localstorage-using-javascript