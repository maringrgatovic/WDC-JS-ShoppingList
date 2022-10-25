//Caching the target elements into variables
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var liList = document.querySelectorAll("li");
var delButtonList = document.querySelectorAll(".deleteButton");

//Returns the length of the text in the text input element
function inputLength() {
	return input.value.length;
}

//Adds a new list element to the shopping list according to the text in the input
function createListElement() {
	var delButton = document.createElement("button");
	delButton.classList.add("deleteButton");
	delButton.appendChild(document.createTextNode("Delete"));
	delButton.addEventListener("click",deleteListItem);

	var li = document.createElement("li");
	li.addEventListener("click",lineTrough);
	li.appendChild(delButton);
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

//Activates createListElement() if the button is clicked
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

//Activates createListElement() if you press 'Enter'
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

//Strikes a line trough a list element if you click on it
function lineTrough(e) {
	e.target.classList.toggle("done");
}

//Deletes the list item when you click on the Delete button next to that list item
function deleteListItem(e) {
	e.target.parentElement.remove();
}

//Adding event listeners to element
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

liList.forEach(function(el, i) {
	el.addEventListener("click", lineTrough);
});

delButtonList.forEach(function(el,li) {
	el.addEventListener("click", deleteListItem);
})
