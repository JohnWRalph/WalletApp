document.body.style.backgroundColor = "red";
const ethers = require('ethers');




chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
    console.log(response.farewell);
    console.log(window)
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    }   
);