import { UIMessageService, VillageTableElement, VillageTableRowElement } from "tw-framework";
import { CopyVillageCoordinatesTemplate } from "../templates/CopyVillageCoordinatesTemplate";

export class CopyVillageCoordinates {

    public static attach(villageTableElement: VillageTableElement) {
        const headerElement = villageTableElement.Header.Coordinates.Element;
        const innerText = headerElement.innerText;

        headerElement.innerHTML = CopyVillageCoordinatesTemplate.populateTemplate(innerText);

        const element = document.getElementById(CopyVillageCoordinatesTemplate.ELEMENT_ID);
        element.onclick = async () => await this.handleElementClick(villageTableElement.Rows);
    }

    private static async handleElementClick(tableRows: VillageTableRowElement[]) {
        let coordinates = [];

        for (const row of tableRows) {
            let coordinate = row.Coordinates;
            coordinates.push(coordinate);
        }

        await navigator.clipboard.writeText(coordinates.join('\n'));

        UIMessageService.SuccessMessage('Village coordinates copied to clipboard!');
    }
}