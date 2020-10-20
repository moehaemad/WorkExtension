// 'use strict';

chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function(){
        console.log("Color is green");
    })
});

chrome.contextMenus.onClicked.addListener(function (info, tabs) {
    if (info.menuItemId === 'google') window.open('https://google.com');
    if (info.menuItemId === 'youtube') window.open('https://youtube.com');
});

chrome.contextMenus.create({
    id: 'bigmenu',
    title: 'something',
    contexts: ['all'],
});

chrome.contextMenus.create({
    id: 'google',
    title:'Take me to Google',
    contexts: ['all'],
    parentId: 'bigmenu'
});
chrome.contextMenus.create({
    id: 'youtube',
    title: 'Take me to Youtube',
    contexts: ['all'],
    parentId: 'bigmenu'
});