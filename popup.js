let color = document.getElementById('changeColor');

// get color from storage API and then set that as background color of button and its value
chrome.storage.sync.get(['color'], function(obj) {
    color.style.backgroundColor = obj.color;
    color.setAttribute('value', obj.color )
})


// setup button listener
color.addEventListener('click', function (el) {
    
});