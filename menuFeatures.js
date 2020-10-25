let button = document.getElementById('button');

button.onclick = el =>{
    let input = document.getElementById('input').value;
    chrome.tabs.create({active: true, url: `https://bestbuy.ca/en-ca/search?search=${input.split(' ').join('+')}`});
}