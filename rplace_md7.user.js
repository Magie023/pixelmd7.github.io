// ==UserScript== 
// @name         r/place Template - MD7 Template Edition 
// @namespace    http://tampermonkey.net/ 
// @version      1.3 
// @description  try to take over the canvas! Thanks to the devs from placeDE :heart: 
// @author       Froked from placeDE Devs
// @match        https://garlic-bread.reddit.com/embed* 
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com   
// @updateURL    https://github.com/Magie023/pixelmd7.github.io/raw/main/rplace_md7.user.js
// @downloadURL  https://github.com/Magie023/pixelmd7.github.io/raw/main/rplace_md7.user.js
// ==/UserScript==

var overlayImage = null;

if (window.top !== window.self) {
    window.addEventListener('load', () => {
        console.log("asgfasgsdahdfashgdfhgdfsg", document.getElementsByTagName("garlic-bread-embed"));
        document.getElementsByTagName("garlic-bread-embed")[0].shadowRoot.children[0].children[0].getElementsByTagName("garlic-bread-camera")[0].children[0].shadowRoot.children[0].appendChild(
            (function () {
                overlayImage = document.createElement("img");
                updateImage();
                overlayImage.style = `position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 1500px;height: 1000px;pointerEvents: 'none';`;
                return i;
            })())
    }, false);
}

function updateImage() {
    overlayImage.src = "https://raw.githubusercontent.com/Magie023/pixelmd7.github.io/main/allience_md7.png?" + Date.now()
}

setInterval(function () {overlayImage.src = "https://raw.githubusercontent.com/Magie023/pixelmd7.github.io/main/allience_md7.png?" + Date.now()}, 30000);