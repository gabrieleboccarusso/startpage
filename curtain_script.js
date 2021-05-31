// if the array doesn't exists we initialize it
if (!localStorage.getItem('links'))
{
	localStorage.setItem("links", '[]');
}

let arr = JSON.parse(localStorage.getItem('links'));

closeNav = () => {
	document.getElementById("myNav").style.width = "0%";
}

// TO DO: polish this function
// TO DO: debig the code after is finished
// receive the object
openNav = (obj) => { 
	// get object with link information
	let links = JSON.parse(localStorage.getItem("links"));
	let index = obj.originalTarget.id;
	console.log(links[index]);

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



}

seeAllLinks = () => {
	// if the array actually exists
	if (arr)
	{
		let i;
		let single_link;
		for (i = 0; i < arr.length; i++)
		{
			if (arr[i]) 
			{
				single_link = document.createElement('span');

				single_link.appendChild(document.createTextNode(arr[i].descr + ' '));
				single_link.id = i;
				//single_link.href = arr[i].link;
				single_link.onclick = (single_link) => { 
					//console.log(single_link);
					openNav(single_link);
				}	

				//console.log(single_link);

				switch(arr[i].output)
				{
					case "section_1":
						section_1_output.appendChild(single_link);
						break;
					case "section_2":
						section_2_output.appendChild(single_link);
						break;
					case "section_3":
						section_3_output.appendChild(single_link);
				} // end switch
			} // end if (arr[i]) 
		} // end for (i = 0; i < arr.length; i++)
	} // end if (arr)
} // end seeAllLinks()



// declaring all the different outputs
let section_1_output = document.getElementById('visit_section_1_links');
let section_2_output = document.getElementById('visit_section_2_links');
let section_3_output = document.getElementById('visit_section_3_links');
window.onload = seeAllLinks;