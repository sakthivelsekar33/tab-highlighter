chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({ color: '#3aa757' }, function() {
    console.log('the color is green')
  });


  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: { hostEquals: 'apps.finavigator.com' },
        })
      ],
      actions: [
        new chrome.declarativeContent.ShowPageAction()
      ]
    }])
  })
});
