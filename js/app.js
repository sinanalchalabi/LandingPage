/**
 * 
 * Name: Sinan AlChalabi
 * Date: 03/12/2019
 * Address: Iraq - Mosul
 * 
 **
*/

/**
 * Define Global Variables
 * 
*/

let navBar = document.querySelector("#navbar__list");
let sections = document.querySelectorAll(".navbar-section");
let length = sections.length;
let sectionPosition = [];
let oldPosition = 0;
let currentPosition = 0;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function jumpToSection (sectionID) {
	window.scrollTo(0,sectionID);
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// Bulding the navigation bar
sections.forEach((element,ind) => {
    let sectionName = element.getAttribute("data-nav");
    let navSection = document.createElement("li");
	let toOfSection = element.offsetTop;
    navSection.setAttribute("class", "menu__link" + ind);
    navSection.innerHTML = `<a onClick= "jumpToSection(${toOfSection})">${sectionName}</a>`;
    navBar.appendChild(navSection);
});

// Check the active section and scrolling
document.addEventListener("scroll", () => {
// Check if the user is scrolling or not
	if (currentPosition != oldPosition)
	{
		document.querySelector(".page__header").style.visibility = "visible";
	}
	currentPosition = this.scrollY;
// Section Positions	
	sectionPosition = [];
	sections.forEach(element => {
	let toOfSection = element.getBoundingClientRect().top;
	sectionPosition.push(toOfSection);
});
// Adding and removing active sections
addIndex = sectionPosition.findIndex(element => element > 0);
	for (let i = 0 ; i < length ; i++)
	{
		if (addIndex === i)
		{
			document.querySelector(".menu__link" + addIndex).classList.add("active");
		}
		else
		{
			document.querySelector(".menu__link" + i).classList.remove("active");
		}
	}
});
// Hide the menu if the user is no longer scrolling
setInterval(function () {
	if (currentPosition === oldPosition)
	{
		document.querySelector(".page__header").style.visibility = "hidden";
	}
	else
	{
		document.querySelector(".page__header").style.visibility = "visible";
	}
	oldPosition = currentPosition;
}, 20000);

/**
 * End Main Functions
*/
