//your JS code here. If required.
const element = document.getElementById('level');

// Initialize the level counter
let level = 0;
// alert(element)
// Traverse up the DOM tree
let currentElement = element;
while (currentElement) {
	// alert(level)
    level++;
    currentElement = currentElement.parentElement; // Move to the parent
}

// Log the level
alert(`The level of the element is: ${level}`)
// alert("The level of the element is:", level);