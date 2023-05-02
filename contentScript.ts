document.body.style.backgroundColor = "red";





chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
    console.log(response.farewell);
    console.log(window)
    }   
);