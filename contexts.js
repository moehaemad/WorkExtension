// 'use strict';

const forClipboard = {
    onlineChat: "Please go to geeksquad.ca/connect and in the reason for connecting please choose ",
    membershipWeb: "https://geeksquad.assurantsolutions.com/",
    bestbuySearch: "https://bestbuy.ca/en-ca/search?search=",
    noMarketplace: "https://www.bestbuy.ca/en-ca/search?path=soldandshippedby0enrchstring%253ABest%2BBuy&search="
}

function contextFunctions(){
    chrome.contextMenus.onClicked.addListener(function (info, tabs) {
        let toClipboard = writeString => chrome.tabs.executeScript(tabs.id, {code: `navigator.clipboard.writeText("${writeString}")`})
        switch (info.menuItemId){
            case 'onlineChat':
                toClipboard(forClipboard.onlineChat);
                break;
            case 'membershipWeb':
                toClipboard(forClipboard.membershipWeb);
                break;
            case 'bestbuySearch':
                // Copy to clipboard in context menu and open in window on the js associate with popup.html
                // window.open(`${forClipboard.bestbuySearch}${info.selectionText.split(' ').join('+')}`);
                toClipboard(`${forClipboard.bestbuySearch}${info.selectionText.split(' ').join('+')}`)
                break;
            default:
                console.log("whoops, better luck next time")
        }
    });
}

function createContexts () {
    chrome.contextMenus.create({
        id: 'mainMenu',
        title: 'QuickBBLooks',
        contexts: ['all'],
    });
    
    chrome.contextMenus.create({
        id: 'onlineChat',
        title:'Geeksquad Connect',
        contexts: ['all'],
        parentId: 'mainMenu'
    });
    chrome.contextMenus.create({
        id: 'membershipWeb',
        title: 'Assurant portal',
        contexts: ['all'],
        parentId: 'mainMenu'
    });
    
    // using just store products at the moment
    chrome.contextMenus.create({
        id: 'bestbuySearch',
        title: 'Search Bestbuy',
        contexts: ['selection'],
        parentId: 'mainMenu'
    });
}

chrome.runtime.onInstalled.addListener(function(){
    createContexts();
    contextFunctions();
});

