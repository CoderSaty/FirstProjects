function updateCounter() {
  fetch('https://api.countapi.xyz/update/uimonk/youtubechannel/?amount=1')
 .then(res => res.json())
 .then(data => counterElement.innerHTML = data.value)
 }
 updateCounter()
 counterElement = document.getElementsByClassName('count')[0];