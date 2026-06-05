chrome.action.onClicked.addListener(async (tab) => {
  const url = tab && tab.url ? tab.url : "";

  if (!url.startsWith("https://catalog.archives.gov/")) {
    await chrome.tabs.create({ url: "https://catalog.archives.gov/" });
    return;
  }

  try {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["content.js"]
    });
  } catch (err) {
    console.error("NARA NSDAP Finder konnte nicht gestartet werden:", err);
  }
});
