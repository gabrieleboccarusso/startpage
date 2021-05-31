// if the array doesn't exists we initialize it
if (!localStorage.getItem('links'))
{
	localStorage.setItem("links", '[]');
}

let arr = JSON.parse(localStorage.getItem('links'));

closeNav = () => {
	isAlreadyOpen = false;
	document.getElementById("temp-output").innerHTML = '';
	document.getElementById("myNav").style.width = "0%";
}

// TO DO: polish this function
// TO DO: debug the code after is finished
// receive the object
reOpen = (obj) => {
	closeNav();
	// openNav(obj);
}

openNav = (obj) => { 

	if (isAlreadyOpen) {
		closeNav();
	} 
	isAlreadyOpen = true;
	// get object with link information
	let links = JSON.parse(localStorage.getItem("links"));
	let index = obj.originalTarget.id;

	document.getElementById("myNav").style.width = "25%";

	let output = document.getElementById("temp-output");

	// create link to the webpage
	let go_to = document.createElement('a');
	go_to.appendChild(document.createTextNode("visit " + links[index].descr));
	go_to.href = links[index].link;
	go_to.target = "_blank";

	// create text that delete the link;
	let delete_link = document.createElement('span');
	delete_link.appendChild(document.createTextNode("delete link"));

	delete_link.onclick = () => {
		// delete object
		delete links[index];
		// update local storage
		localStorage.setItem("links", JSON.stringify(links));
		// remove it from the main
		let node = document.getElementById(index);
	  node.parentNode.removeChild(node);
		// close curtain
		closeNav();
	}

	// append all functionalities
	output.appendChild(go_to);
	output.appendChild(delete_link);
}

// declaring functions
addLinkToArray = (section) => {
	  const link_info = {
        link: "",     
        descr: "",
        output: section
    };
    link_info.link = prompt("Here enter the link");
    link_info.descr = prompt("Here enter the description");

    console.log(arr);
    arr.push(link_info);

    localStorage.setItem('links', JSON.stringify(arr));

    // append link to main
    let single_link = createLink(link_info.descr, i);
    appendLink(link_info.output, single_link);
    i++;
}

let i;

seeAllLinks = () => {
		for (i = 0; i < arr.length; i++)
		{
			// if (arr[i].link && arr[i].descr) 
			if (!arr[i] || arr[i].descr === '')
			{
				arr.splice(i, 1);
			} else {
				appendLink(arr[i].output, createLink(arr[i].descr, i));			}
		}
		 localStorage.setItem('links', JSON.stringify(arr));
} 

createLink = (descr, i) => {
	let single_link = document.createElement('span');
	single_link.appendChild(document.createTextNode(descr + ' '));
	single_link.id = i;

	single_link.onclick = (single_link) => { 
		openNav(single_link);
	}	
	return single_link;
}

appendLink = (place, link) => {
	switch(place)
	{
		case "section_1":
			section_1_output.append(link);
			break;
		case "section_2":
			section_2_output.append(link);
			break;
		case "section_3":
			section_3_output.append(link);
			break;
	}
}


// declaring all the different outputs
let section_1_output = document.getElementById('visit_section_1_links');
let section_2_output = document.getElementById('visit_section_2_links');
let section_3_output = document.getElementById('visit_section_3_links');
let isAlreadyOpen = false;
window.onload = seeAllLinks;
