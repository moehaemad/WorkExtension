let button = document.getElementById('button');

button.onclick = el =>{
    let input = document.getElementById('input').value;
    let url = ``
    input === "" ? url = `https://www.bestbuy.ca/en-ca` : url = `https://bestbuy.ca/en-ca/search?search=${input.split(' ').join('+')}`
    chrome.tabs.create({active: true, url: url});
}