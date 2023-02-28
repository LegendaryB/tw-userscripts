(async () => {
    const sendBackButton = document.querySelector('[name="back"]') as HTMLButtonElement;
    sendBackButton.style.marginBottom = "1em";

    const newAnchorElement = document.getElementById('units_home').parentElement;
    newAnchorElement.prepend(sendBackButton);
})();