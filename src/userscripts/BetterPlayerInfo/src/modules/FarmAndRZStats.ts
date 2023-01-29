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

/**
 * Function to wait for properties
 * @param {object} object - the object
 * @param {string} property - name of the property to wait for
 * @param {number} timeout - optional, maximum waiting time in ms
 */
function waitForProperty(object: any, property: string, timeout: number): Promise<void> {
    return new Promise((resolve, reject) => {
        let isWaiting = true;

        // Waiting loop
        const checkForProperty = () => {
            if (object[property]) {
                isWaiting = false;
                resolve();
            } else {
                setTimeout(() => {
                    if (isWaiting) checkForProperty();
                }, 100);
            }
        };
        checkForProperty();

        // Stop waiting if timed out
        if (timeout) {
            setTimeout(() => {
                if (isWaiting) {
                    isWaiting = false;
                    reject();
                }
            }, timeout);
        }
    })
}

const InfoPlayer = window.InfoPlayer as InfoPlayer;
const game_data = getGameData();

export class FarmAndRZStats {
    public static async attach(playerInfoTable: PlayerInfoTableElement) {
        let playerName = document.querySelector('h2').innerText;

        await waitForProperty(window.InfoPlayer, 'player_id', 4000);

        if (InfoPlayer.player_id == game_data.player.id) {
            playerName = game_data.player.name;
        }

        let farm = await getInADayInfo(playerName, 'loot_res');
        let rz = await getInADayInfo(playerName, 'scavenge');

        let anchor = playerInfoTable.Bashpoints.Element;

        let farmDisplayValue = farm.Points > 0 ? `${farm.Points.toLocaleString()} (${farm.Rank}.)` : farm.Points.toLocaleString();
        let rzDisplayValue = rz.Points > 0 ? `${rz.Points.toLocaleString()} (${rz.Rank}.)` : rz.Points.toLocaleString();

        let farmElementHTML = FarmAndRZTemplate.populateTemplate('Geplündert', farmDisplayValue);
        let rzElementHTML = FarmAndRZTemplate.populateTemplate('Gesammelt', rzDisplayValue);

        anchor.insertAdjacentHTML('afterend', farmElementHTML);
        anchor.insertAdjacentHTML('afterend', rzElementHTML);
    }
}