console.log("working")
let storedWallets;

const checkForWallet = async () => {
  console.log("clicked")
  storedWallets = await fetchData()
  var customWalletButtonExists = document.getElementsByClassName("customWallet")
  // console.log(customWalletButtonExists)

  if (customWalletButtonExists) {
    for (var i = 0; i < customWalletButtonExists.length; i++) {
      customWalletButtonExists[i].style.backgroundColor = "green";
      customWalletButtonExists[i].addEventListener("click", function () {
        chrome.runtime.sendMessage("OpenPopup")
      })
    }
  }
  chrome.storage.sync.set({
    "customWallet": "account"
  })
}

chrome.runtime.onMessage.addListener(
  checkForWallet
);

const addWallet = async () => {
  storedWallets = await fetchData()
  console.log("storedWallets", storedWallets)
}

const fetchData = () => {
  return new Promise((resolve) => {
    chrome.storage.sync.get(["customWallet"], function (result) {
      console.log("result", result)
      if (result) {
        resolve(result)
      } else {
        resolve({})
      }
    }
    )
  })
}

