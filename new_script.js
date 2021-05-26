// if the array doesn't exists we initialize it
if (!localStorage.getItem('links'))
{
	localStorage.setItem("links", '[]');
}

let arr = JSON.parse(localStorage.getItem('links'));

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
				single_link = document.createElement('a');
				single_link.target = "_blank";

				single_link.appendChild(document.createTextNode(arr[i].descr + ' '));
				single_link.href = arr[i].link;

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