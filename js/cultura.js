function changeImage(event) {
	event = event || window.event;

	var targetElement = event.target || event.srcElement;

	if (targetElement.tagName == "IMG") {
		document.getElementById('main-img').src = targetElement.getAttribute("src");
		scroll(0,0);
	}
}
	
