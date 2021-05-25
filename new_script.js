//  different attempt at saving data into the local storage

// if the array doesn't exists we create a new one,
// otherwise we save it into a variable
let arr;
if (!localStorage.getItem('links'))
{
	localStorage.setItem("links", '[]');
}
else 
{
	arr = JSON.parse(localStorage.getItem('links'));
}

// declaring functions
addLinkToArray = () => {
	  const link_info = {
        link: "",     
        descr: ""
    };
    link_info.link = prompt("Here enter the link");
    link_info.descr = prompt("Here enter the description");

    arr.push(link_info);

    localStorage.setItem('links', JSON.stringify(arr));
}

seeAllLinks = () => {
	console.log(arr);
}

// declaring all the different inputs
let take_work_link = document.getElementById('work_links');
let work_output = document.getElementById('visit_work_links');
// take_link_button.addEventListener("click", addLinkToArray);
take_work_link.addEventListener('click', addLinkToArray)
window.onload = seeAllLinks;