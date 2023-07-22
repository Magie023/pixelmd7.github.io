// ==UserScript== 
// @name         r/place Template - MD7 Template Edition 
// @namespace    http://tampermonkey.net/ 
// @version      1.1 
// @description  try to take over the canvas! Thanks to the devs from placeDE :heart: 
// @author       placeDE Devs - MD7 Edition: derLesh, Magie023
// @match        https://garlic-bread.reddit.com/embed* 
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com   
// @updateURL    https://github.com/Magie023/pixelmd7.github.io/raw/main/rplace_md7.user.js
// @downloadURL  https://github.com/Magie023/pixelmd7.github.io/raw/main/rplace_md7.user.js
// ==/UserScript==

let url = "https://raw.githubusercontent.com/Magie023/pixelmd7.github.io/main/allience_md7_22_07_11_30.png"

if (window.top !== window.self) {
    window.addEventListener('load', () => {
        console.log("asgfasgsdahdfashgdfhgdfsg", document.getElementsByTagName("garlic-bread-embed"));
        document.getElementsByTagName("garlic-bread-embed")[0].shadowRoot.children[0].children[0].getElementsByTagName("garlic-bread-camera")[0].children[0].shadowRoot.children[0].appendChild(
            (function () {
                const i = document.createElement("img");
                i.src = url;
                i.style = `position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 1500px;height: 1000px;pointerEvents: 'none';`;
                return i;
            })())
    }, false);
}
