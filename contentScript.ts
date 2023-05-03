

console.log("working")
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
      
            console.log("clicked")
            // alert("hello")
            var customWalletButtonExists = document.getElementsByClassName("customWallet")
            console.log(customWalletButtonExists)
            if (customWalletButtonExists) {
              for (var i = 0; i < customWalletButtonExists.length; i++) {
                customWalletButtonExists[i].style.backgroundColor = "green";
                customWalletButtonExists[i].addEventListener("click", function () {
                  chrome.runtime.sendMessage("OpenPopup")
                })
              }
                
            }
            console.log(localStorage)
            sendResponse({ message: "hello" });
        
    }
);

