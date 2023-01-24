export class CopyVillageCoordinatesTemplate {
    public static readonly ELEMENT_ID = 'BetterPlayerInfo_CopyVillageCoordinates';

    public static populateTemplate = (innerText: string) => `
        <a id="${this.ELEMENT_ID}" style="cursor: pointer;" title="Click to copy all &#10;&#13;village coordinates">${innerText}</a>
    `;
}