let color = document.getElementById('changeColor');

// get color from storage API and then set that as background color of button and its value
chrome.storage.sync.get(['color'], function(obj) {
    color.style.backgroundColor = obj.color;
    color.setAttribute('value', obj.color )
})


// setup button listener
color.addEventListener('click', function (el) {
    let activeColor = el.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabsArr){
        tabsArr[0].id
        chrome.tabs.executeScript(tabsArr[0].id, {code: `document.body.style.backgroundColor = "${activeColor}";`})
    })
});