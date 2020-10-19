// 'use strict';

chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function(){
        console.log("Color is green");
    })

    // // chrome.declarativeContent.onPageChanged.removeRules(undefined, function(){
    // //     chrome.declarativeContent.onPageChanged.addRules([
    // //         {
    // //             actions: [new chrome.declarativeContent.ShowPageAction()]
    // //         }
    // //     ])
    // // })
    // chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    //     chrome.declarativeContent.onPageChanged.addRules([{
    //       conditions: [new chrome.declarativeContent.PageStateMatcher({
    //         pageUrl: {hostEquals: 'developer.chrome.com'},
    //       })
    //       ],
    //           actions: [new chrome.declarativeContent.ShowPageAction()]
    //     }]);
    //   });
});

chrome.contextMenus.onClicked.addListener(function () {
    console.log('hello');
})

chrome.contextMenus.create({
    id: 'contextmenu',
    title: 'something',
    contexts: ['all'],
});