// chrome.tabs.onUpdated.addListener(() => {
//     console.log("installed")

//     chrome.runtime.onMessage.addListener(

//         function (request, sender, sendResponse) {
//             console.log(sender.tab ?
//                 "from a content script:" + sender.tab.url :
//                 "from the extension");
//                 const wallet1 = {
//                     "address": "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
//                 }
//                 // console.log(localStorage)
//             if (request.checkForWallet === "wallet")
//                 sendResponse({ checkForWallet: wallet1});
//         }
//     );
// }
// );



// // chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
// //     if (message.openExtension) {
// //         chrome.browserAction.openPopup();
// //     }
// // });

// // chrome.tabs.onUpdated.addListener(function (tabId, tab) {
// //     const queryParameters = tab.url
// //     const urlParameters = new URLSearchParams(queryParameters);
// //     console.log(urlParameters)
// //     chrome.tabs.sendMessage(tabId, {
// //         type: "NEW",
// //         videoId: urlParameters.get("v")
// //     }
// //     )
// // }
// // );

// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//     if (request.message === "getInfo") {
//       // Send a message to the content script with information from the extension
//       chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//         chrome.tabs.sendMessage(tabs[0].id, {message: "sendInfo", info: "This is information from the extension!"});
//       });
//     }
//   });
chrome.tabs.onActivated.addListener((tab) => {

  console.log(tab)
  chrome.tabs.get(tab.tabId, (currentTabData) => {

    if (currentTabData.url === "http://localhost:5174/#/login") {
      console.log("On gamestore page")

      // chrome.scripting.executeScript({
      //   target: { tabId: currentTabData.id },
      //   files: ['contentScript.js']
      // })
    }
  })
})

// chrome.runtime.onMessage.addlistener((message, sender, sendResponse) => {
//   console.log(message)
//   console.log(sender)
// })
