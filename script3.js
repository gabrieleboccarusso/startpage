let repeat = true;
activateOnce = (id) => {
	if(repeat) {
		createLinksArray(id);
	}
	repeat = false;
}

createLinksArray = (section_id) => {
		// taking the dedicated section 
		let section = document.getElementById(section_id);
    // create a button and give it the id of ("btn_" + section_id)
    let main_button = document.createElement('button');
    // giving text to the button
    main_button.appendChild(document.createTextNode("add link"));
    // create an output tag and give it the id of ("output_" + section_id)
    let output_tag = document.createElement('output');
    // putting the button inside the section
    section.appendChild(main_button);
    // debugging
    main_button.onclick = () => {
    	alert("ciao");
    }
}
