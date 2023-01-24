import { PlayerInfoTableElement } from "tw-framework";

import { getInADayInfo } from "../../../shared";
import { FarmAndRZTemplate } from "../templates/FarmAndRZTemplate";

export class FarmAndRZStats {
    public static async attach(playerInfoTable: PlayerInfoTableElement) {
        let playerName = document.querySelector('h2').innerText;

        let farm = await getInADayInfo(playerName, 'loot_res');
        let rz = await getInADayInfo(playerName, 'scavenge');

        let anchor = playerInfoTable.Bashpoints.Element;

        let farmElementHTML = FarmAndRZTemplate.populateTemplate('Farm', `${farm.Points.toLocaleString()} (${farm.Rank}.)`);
        let rzElementHTML = FarmAndRZTemplate.populateTemplate('Raubzug', `${rz.Points.toLocaleString()} (${rz.Rank}.)`);

        anchor.insertAdjacentHTML('afterend', farmElementHTML);
        anchor.insertAdjacentHTML('afterend', rzElementHTML);
    }
}