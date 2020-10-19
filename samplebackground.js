// 'use strict';

chrome.runtime.onInstalled.addListener(function() {
    console.log(`installed`);
});

chrome.contextMenus.create({
    id: 'contextmenu',
    title: 'something',
    contexts: ['all'],
});