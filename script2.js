// the script is write takins as base to have a text input for the link and one for
// description plus the button to add it
// -----------------------------------------
// <input type="text" id="link_text" placeholder="enter link">
// <input type="text" id="link_description" placeholder="enter description">
// <button id="link-btn" class="link-btn">Add link</button>
// <output id="link-to-visit">
// </output>
// ------------------------------------

// taking the link from the user
var link = document.getElementById("link_text");
// initializing the array with the already locally stored one 
const links = JSON.parse(localStorage["links"]);
// taking the field to put the buttons in
var output = document.getElementById("link-to-visit");
// taking the link after the user pressed the button
var take_link_button = document.getElementById("link-btn");

// the function add just the link to the array
addLinkToArray = () => { 
    //setting the object with the effective link and its description
    const link_info = { // creating the array into the function otherwise
        link: "",       // it in the array will arrive always the same values
        descr: ""
    };
    // putting the link into the section of the object
    link_info.link = prompt('Enter the link');
     // putting the description of the link into the section of the object
    link_info.descr = prompt('Enter the link description');

    //pushing the object into the array
    links.push(link_info);
    // putting everything in the locat storage of the browser
    localStorage["links"] = JSON.stringify(links);
}

// outputting all the links into the established output tag
seeAllLinks = () => {
    // taking the array of links from the browser local storage
    const stored_links = JSON.parse(localStorage["links"]);
    // creating all the link to see
    for (var i = 0; i < stored_links.length; i++) {
        // setting a variable to create the link text
        var hyperlink = document.createElement("a");
        // adding elternative text for the link that describe the link
        hyperlink.appendChild(document.createTextNode(stored_links[i].descr + "  "));
        // setting the href attribute
        hyperlink.setAttribute("href", stored_links[i].link);
        // appendig the link to the output section of the page
        output.appendChild(hyperlink);
    }
}

take_link_button.addEventListener("click", addLinkToArray);
window.onload = seeAllLinks;
  
