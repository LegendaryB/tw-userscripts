(async () => {
    const sleep = ms => new Promise(r => setTimeout(r, ms));

    const requestPageAndParse = async (link: string) => {
        try {
            let response = await fetch(link);
            let html = await response.text();

            let parser = new DOMParser();
            let doc = parser.parseFromString(html, 'text/html');

            return doc;
        }
        catch (err) {
            debugger;
            return undefined;
        }
    }

    const getPlayers = async (allyInfoLink) => {
        let doc = await requestPageAndParse(allyInfoLink);

        let playerItems = Array.from(doc.querySelectorAll('[class=userimage-tiny]'));

        let playerNames = playerItems.map(memberImageElement => {
            let member = memberImageElement.nextElementSibling as HTMLAnchorElement;

            return member.innerText.trim();
        });

        return playerNames;
    }

    const getInADayInfo = async (playerName: string, type: string) => {
        try {
            let url = `/game.php?screen=ranking&mode=in_a_day&type=${type}&name=${encodeURIComponent(playerName)}`;

            let doc = await requestPageAndParse(url);
            let table = doc.getElementById('in_a_day_ranking_table');
            let row = table.querySelector('[class=userimage-tiny]').closest('tr');
            let points = Number(row.cells[3].innerText.replace('.', ''));

            return points;
        }
        catch (err) {
            return 0;
        }
    }

    let table = document.getElementById('ally_ranking_table');
    let allyInfoLinks = Array.from(table.querySelectorAll('[href*="game.php"]')) as HTMLAnchorElement[];

    let headers = `
        <th>Farm</th>
        <th>Raubzug</th>
        <th>Gesamt</th>`;

    let tableHead = table.querySelector('tbody').firstElementChild;
    tableHead.insertAdjacentHTML('beforeend', headers);

    for (const allyInfoLink of allyInfoLinks) {
        let playerNames = await getPlayers(allyInfoLink);
        let allyFarm = 0;
        let allyRz = 0;

        for (const playerName of playerNames) {
            let farm = await getInADayInfo(playerName, "loot_res");
            let rz = await getInADayInfo(playerName, "scavenge");

            allyFarm += farm;
            allyRz += rz;
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