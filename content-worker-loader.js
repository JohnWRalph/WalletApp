
chrome.tabs.onActivated.addListener((tab) => {

  console.log(tab)
  chrome.tabs.get(tab.tabId, (currentTabData) => {

    if (currentTabData.url === "http://localhost:5174/#/login") {
      console.log("On gamestore page")
    
    }
  })
})


