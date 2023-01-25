import { getGameData, PlayerInfoTableElement } from "tw-framework";

import { getInADayInfo } from "../../../shared";
import { FarmAndRZTemplate } from "../templates/FarmAndRZTemplate";

interface InfoPlayer {
    player_id: number;
}

declare global {
    interface Window {
        InfoPlayer: InfoPlayer;
    }
}

const InfoPlayer = window.InfoPlayer as InfoPlayer;
const game_data = getGameData();

export class FarmAndRZStats {
    public static async attach(playerInfoTable: PlayerInfoTableElement) {
        let playerName = document.querySelector('h2').innerText;

        if (InfoPlayer.player_id == game_data.player.player_id) {
            playerName = game_data.player.name;
        }

        let farm = await getInADayInfo(playerName, 'loot_res');
        let rz = await getInADayInfo(playerName, 'scavenge');

        let anchor = playerInfoTable.Bashpoints.Element;

        let farmElementHTML = FarmAndRZTemplate.populateTemplate('Farm', `${farm.Points.toLocaleString()} (${farm.Rank}.)`);
        let rzElementHTML = FarmAndRZTemplate.populateTemplate('Raubzug', `${rz.Points.toLocaleString()} (${rz.Rank}.)`);

        anchor.insertAdjacentHTML('afterend', farmElementHTML);
        anchor.insertAdjacentHTML('afterend', rzElementHTML);
    }
}