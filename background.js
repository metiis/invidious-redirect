const disabledImage = "icons/hooktube-disabled-48.ico";
const enabledImage = "icons/hooktube-48.ico";

function updateIcon(disabled) {
        browser.browserAction.setIcon({ path: disabled ? disabledImage : enabledImage });
}

browser.storage.local.get('disabled').then(updateIcon);

browser.browserAction.onClicked.addListener(async () => {
        const oldDisabled = await browser.storage.local.get('disabled');
        const disabled = !oldDisabled;

        updateIcon(disabled);
        browser.storage.local.set({ disabled });
});