function saveOptions(e) {
  var inst = document.querySelector("#instance").value;
  var real_instance;
  try {
    real_instance = new URL(inst).hostname;
  } catch (e) {
    real_instance = inst;
  }
  browser.storage.sync.set({
    instance: real_instance
  });
  e.preventDefault();
}

function restoreOptions() {
  var gettingItem = browser.storage.sync.get('instance');
  gettingItem.then((res) => {
    document.querySelector("#instance").value = res.instance || 'invidio.us';
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
