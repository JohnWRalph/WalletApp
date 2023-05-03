// chrome.runtime.sendMessage({ checkForWallet: "wallet" }, function (response) {
//     // console.log(localStorage)
//     console.log(response.checkForWallet);
//     const customWallet = {
//         isCustomWallet: true,
//         chain: "Solana",
//         value: "value"
//     }
//     console.log("content script")
//     const walletBTNExists = document.getElementById("customWalletButton");
//     console.log(walletBTNExists)
//     console.log(localStorage)
//     if (walletBTNExists) {
//         // document.body.style.backgroundColor = "red";
//     } else {
//         // document.body.style.backgroundColor = "green";
//     }
//     localStorage.setItem("customWalletInstalled", "True");

// })

// chrome.runtime.onMessage.addListener(

//     function (request, sender, sendResponse) {
//         console.log(sender.tab ?
//             "from a content script:" + sender.tab.url :
//             "from the extension");
//             const wallet1 = {
//                 "address": "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
//             }
//             // console.log(localStorage)
//         if (request.checkForWallet === "wallet")
//             sendResponse({ checkForWallet: wallet1});
//     }
// );


// chrome.runtime.sendMessage({message: "getInfo"}, function(response) {
//     if (response.message === "sendInfo") {
//       // Use the information from the extension
//       console.log(response.info);
//     }
//   });


console.log("working")

// chrome.runtime.sendMessage(

//   "hello backgroundpage",
//   (response) => {
//     console.log(response);
//   }

// )