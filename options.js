function saveOptions(e) {
  e.preventDefault();
  var instance = document.querySelector("#instance").value.trim();
  instance = instance.replace(/^https?:?\/?\/?/, '').replace('\/$');
  if (!instance) {
    return alert('You must specify an appropriate Invidious domain');
  }
  browser.storage.sync.set({
    instance: instance,
  }).then(() => alert('Saved: ' + instance + '!'));
}

function restoreOptions() {

  function setCurrentChoice(result) {
    document.querySelector("#instance").value = result.instance || "invidiou.site";
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  let getting = browser.storage.sync.get("instance");
  getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);