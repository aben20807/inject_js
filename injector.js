var script = document.createElement('script');
script.setAttribute('type', 'text/javascript');
script.src = chrome.runtime.getURL('injected.js');
script.async = false;
document.addEventListener("DOMContentLoaded", function () {
    document.getElementsByTagName('head')[0].appendChild(script);
});