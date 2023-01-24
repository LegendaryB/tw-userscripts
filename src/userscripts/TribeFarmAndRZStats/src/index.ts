import { sleep, requestPageAndParse, getInADayInfo, InADayTypes } from "../../shared";

(async () => {
    const getPlayers = async (allyInfoLink): Promise<string[]> => {
        let doc = await requestPageAndParse(allyInfoLink);

        let playerItems = Array.from(doc.querySelectorAll('[class=userimage-tiny]'));

        let playerNames = playerItems.map(memberImageElement => {
            let member = memberImageElement.nextElementSibling as HTMLAnchorElement;

            return member.innerText.trim();
        });

        return playerNames;
    }

    let table = document.getElementById('ally_ranking_table');
    let allyInfoLinks = Array.from(table.querySelectorAll('[href*="game.php"]')) as HTMLAnchorElement[];

    let headers = `
        <th>Farm</th>
        <th>Raubzug</th>
        <th>Gesamt</th>`;

    let tableHead = table.querySelector('tbody').firstElementChild as HTMLTableRowElement;
    tableHead.insertAdjacentHTML('beforeend', headers);

    for (const allyInfoLink of allyInfoLinks) {
        let playerNames = await getPlayers(allyInfoLink);
        let allyFarm = 0;
        let allyRz = 0;

        for (const playerName of playerNames) {
            let farm = await getInADayInfo(playerName, 'loot_res');
            let rz = await getInADayInfo(playerName, 'scavenge');

            allyFarm += farm.Points;
            allyRz += rz.Points;
        }

        let allyTotal = allyFarm + allyRz;

        let allyRow = allyInfoLink.closest('tr');

        let allyFarmCell = allyRow.insertCell(-1);
        let allyRzCell = allyRow.insertCell(-1);
        let allyTotalCell = allyRow.insertCell(-1);

        allyFarmCell.innerText = allyFarm.toLocaleString();
        allyRzCell.innerText = allyRz.toLocaleString();
        allyTotalCell.innerText = allyTotal.toLocaleString();

        await sleep(100);
    }
})();