// 'use strict';

const forClipboard = {
    onlineChat: "Please go to geeksquad.ca/connect and in the reason for connecting please choose ",
    membershipWeb: "https://geeksquad.assurantsolutions.com/",
    bestbuySearch: "https://bestbuy.ca/en-ca/search?search=",
    noMarketplace: "https://www.bestbuy.ca/en-ca/search?path=soldandshippedby0enrchstring%253ABest%2BBuy&search="
}

const phoneExtensions = {
    billing: "1",
    inhome: "2",
    claims: "3",
    techSup: "4",
    assuredLiving: "5",
    other: "6"
}

function contextFunctions(){
    chrome.contextMenus.onClicked.addListener(function (info, tabs) {
        switch (info.menuItemId){
            case 'onlineChat':
                navigator.clipboard.writeTexT(forClipboard.onlineChat);
                break;
            case 'membershipWeb':
                window.open(forClipboard.membershipWeb);
                break;
            case 'bestbuySearch':
                window.open(`${forClipboard.bestbuySearch}${info.selectionText.split(' ').join('+')}`);
                break;
            default:
                console.log("whoops, better luck next time")
        }
    });
}

function createContexts () {
    chrome.contextMenus.create({
        id: 'mainMenu',
        title: 'something',
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

