chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);
			document.querySelector('div[data-test-id="giftWrap"]').parentElement.remove();
		}
	}, 10);
});