function saveOptions(e) {
  e.preventDefault();
  var enabled = document.querySelector("#enabled").checked;
  var instance = document.querySelector("#instance").value.trim();
  instance = instance.replace(/^https?:?\/?\/?/, '').replace('\/$');
  if (!instance) {
    return alert('You must specify an appropriate Invidious domain');
  }
  browser.storage.sync.set({
    enabled: enabled,
    instance: instance,
  }).then(() => alert('Saved!'));
}

function restoreOptions() {
  // browser.storage.sync.remove(['enabled', 'instance']);

  function setCurrentChoice(result) {
    document.querySelector("#enabled").checked = result.enabled;
    document.querySelector("#instance").value = result.instance;
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  let getting = browser.storage.sync.get({
    enabled: true,
    instance: 'invidiou.site',
  });
  getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);