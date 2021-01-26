// START ACTIVATING ONCE THE FUNCTION
/*let repeat = true;
// the reason fo this function is for just avoid 
//event bubbling withouth using jQwery
activateOnce = (id) => {
	if(repeat) {
		initializeSection(id);
	}
	repeat = false;
}*/
// END ACTIVATING ONCE THE FUNCTION

//  START MAIN FUNCTION
initializeSection = (section_id) => {
		// taking the dedicated section 
		let thisSection = document.getElementById(section_id);
    // create a button and give it the id of ("btn_" + section_id)
    let main_button = document.createElement('button');
    // giving text to the button
    main_button.appendChild(document.createTextNode("add link"));
    // create an output tag and give it the id of ("output_" + section_id)
    let output_tag = document.createElement('output');
    // giving an id to the output tag
    output_tag.id = "output_" + section_id;
    // putting the button inside the section
    thisSection.appendChild(main_button);
    // creating the output section for the links
    thisSection.appendChild(output_tag);
		// declaring main array 
    const links = [];
    // setting the name of the array for this section
    let thisArray = "locally_stored_array_" + section_id;
		// if the array of stored links already doesn't exists already
		if (!links.push(JSON.parse(localStorage.getItem(thisArray)))) {
		    // then initialize one
		    localStorage.setItem('links', JSON.stringify(currentLinksArray));
		}

		main_button.addEventListener("click", addLinkToArray(thisArray));
		thisSection.onclick = seeAllLinks(thisArray, output_tag.id);
}
//  END MAIN 

// START FUNCTION THAT ADD A LINK TO THE LOCALLY STORED ARRAY
addLinkToArray = (locally_stored_array) => { 
	console.log('add link')
    //setting the object with the effective link and its description
    const link_info = { // creating the array into the function otherwise
        link: "",       // it in the array will arrive always the same values
        descr: ""
    };
    // putting the link into the section of the object
    link_info.link = prompt("Here enter the link");
    // putting the description of the link into the section of the object
    link_info.descr = prompt("Here enter the description");
    // creating a variable and putting in it the stored array
    dummy_array = JSON.parse(localStorage.getItem(locally_stored_array)) || [];
    // pushing the object into the dummy array
    dummy_array.push(link_info);
    // just to have the situation under control
    console.log(dummy_array);
    // setting as local the dummy array that is just the locally
    // stored array but modified with the addition of the wanted value
    localStorage.setItem(locally_stored_array, JSON.stringify(dummy_array));
}
// END FUNCTION THAT ADD A LINK TO THE LOCALLY STORED ARRAY

// START FUNCTION THAT DISPLAYS ALL THE LINKS
// outputting all the links into the established output tag
seeAllLinks = (locally_stored_array, id_of_output) => {
		// taking the field to put the buttons in
		var this_output = document.getElementById(id_of_output);
    // taking the array of links from the browser local storage
    const stored_links = JSON.parse(localStorage.getItem(locally_stored_array));
    // creating all the link to see
    for (var i = 0; i < stored_links.length; i++) {
        if (stored_links[i] !== null) {
            // setting a variable to create the link text
            var hyperlink = document.createElement("a");
            // adding the blank target to the element
            hyperlink.target = "_blank";
            // adding elternative text for the link that describe the link
            hyperlink.appendChild(document.createTextNode(stored_links[i].descr + "  "));
            // setting the href attribute
            hyperlink.href = stored_links[i].link;
            // appendig the link to the output section of the page
            this_output.appendChild(hyperlink);
            // adding possibility to delete a link - creating button
            let btn = document.createElement("button");
            // putting in a variable the index of the current link
            let link_index = i;
            // adding function to the button
            btn.onclick = () => {
                // document.getElementById(id).style.display="none";
                let answer = prompt("are you sure?"); 
                if (answer[0] === 'Y' || answer[0] === 'y') {
                    // removing child of output - the link
                    output.removeChild(hyperlink);
                    // removing itself
                    btn.remove();
                    // removing from the array the current link based on its own index
                    delete stored_links[link_index];
                    // updating the local stored array
                    localStorage.setItem('links', JSON.stringify(stored_links));
                }
            }
            // entering text inside the button
            btn.appendChild(document.createTextNode("delete me"));
            // appending the button near the link
            // NOTE: this way could cause some issues during the styling of the document
            this_output.appendChild(btn); // original: hyperlink.appendChild(btn);
        }
    }
}
// END FUNCTION THAT DISPLAYS ALL THE LINKS