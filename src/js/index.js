"use strict";

const counterElements = document.getElementsByClassName("count");

function updateCounter() {
	const counterElement, rest;
	[counterElement, ...rest] = counterElements;

	fetch("https://api.countapi.xyz/update/uimonk/youtubechannel/?amount=1")
		.then((res) => res.json())
		.then((data) => (counterElement.innerHTML = data.value));
}

updateCounter();
