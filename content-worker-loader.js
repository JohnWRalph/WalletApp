
chrome.tabs.onActivated.addListener((tab) => {

  console.log(tab)
  chrome.tabs.get(tab.tabId, (currentTabData) => {

    if (currentTabData.url === "http://localhost:5174/#/login") {
      console.log("On gamestore page")
     
     
      chrome.tabs.sendMessage(tab.tabId, { message: "hello" }, (response) => {
        console.log(chrome.storage)
        console.log(response)
      }
      )

    }
  })
})


chrome.runtime.onMessage.addListener(request => {

  if (request == "OpenPopup") {

      chrome.windows.create({
          url: "src/popup/index.html",
          type: "popup",
          focused: true,
          width: 400,
          height: 600,
          top: 0,
          
      }, () => {
          console.log("Opened popup!")
      })

  }

})