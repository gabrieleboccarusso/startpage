// declaring main array 
const links = [];
// if the array of stored links already doesn't exists already
if (!links.push(JSON.parse(localStorage.getItem('links')))) {
    // then initialize one
    localStorage.setItem('links', JSON.stringify(links));
}

let output = document.getElementById("link-to-visit");
let take_link_button = document.getElementById("link-btn");

// the function add the link to the array
addLinkToArray = () => { 
    const link_info = {
        link: "",     
        descr: ""
    };
    link_info.link = prompt("Here enter the link");
    link_info.descr = prompt("Here enter the description");

    // creating a variable and putting in it the stored array
    dummy_array = JSON.parse(localStorage.getItem('links')) || [];
    // pushing the object into the dummy array
    dummy_array.push(link_info);
    // just to have the situation under control
    console.log(dummy_array);
    // setting as local the dummy array that is just the locally
    // stored array but modified with the addition of the wanted value
    localStorage.setItem('links', JSON.stringify(dummy_array));
}

// outputting all the links into the established output tag
seeAllLinks = () => {
    const stored_links = JSON.parse(localStorage["links"]);
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
            output.appendChild(hyperlink);
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
            output.appendChild(btn); // original: hyperlink.appendChild(btn);
        }
    }
}

take_link_button.addEventListener("click", addLinkToArray);
window.onload = seeAllLinks;