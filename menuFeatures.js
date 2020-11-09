let button = document.getElementById('button');

button.onclick = el =>{
    let input = document.getElementById('input').value;
    let url = ``
    input === "" ? url = `https://www.bestbuy.ca/en-ca` : url = `https://bestbuy.ca/en-ca/search?search=${input.split(' ').join('+')}`
    chrome.tabs.create({active: true, url: url});
}

document.querySelector('.Contacts').addEventListener('click', (e) => {
    let insertOptions = `
        <ol>
            <li>Billing</li>
            <li>In-home</li>
            <li>Claims</li>
            <li>Tech sup.</li>
            <li>Assured Living</li>
            <li>Other Q's</li>
        </ol>
    `
    e.target.insertAdjacentHTML('afterend', insertOptions);
})