function saveOptions(e) {
  e.preventDefault();
  var instance = document.querySelector("#instance").value.trim();
  instance = instance.replace(/^https?:?\/?\/?/, '').replace('\/$');
  browser.storage.sync.set({
    instance: instance,
  });
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