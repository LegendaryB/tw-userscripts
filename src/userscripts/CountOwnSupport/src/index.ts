import { getGameData } from "tw-framework";
import { sleep } from "../../shared";

(async () => {
    const customTableRowId = 'CountOwnSupportsRow';
    const customButtonId = 'CountOwnSupportBtn';
    const customButtonTemplate = `<button id="${customButtonId}" class="btn">Eigene zählen</button>`;

    const createTableRowForOwnSupports = () => {
        document.getElementById(customTableRowId)?.remove();

        const tableBody = document.querySelector('#support_sum').querySelector('tbody');
        const tableRow = tableBody.querySelector('tr');

        let tableRowClone = tableRow.cloneNode(true) as HTMLTableRowElement;
        tableRowClone.id = customTableRowId;

        tableBody.appendChild(tableRowClone);

        const clonedTableRow = document.getElementById(customTableRowId) as HTMLTableRowElement;

        for (const cell of clonedTableRow.cells) {
            cell.innerHTML = "0";
        }

        return clonedTableRow;
    }

    const countUnits = async () => {
        const incomingCommandElements = document.querySelectorAll('[class=command_hover_details][data-command-type=support]');

        let units = {};

        for (let element of incomingCommandElements) {
            let commandRowElement = element.closest('tr');
            let commandLabelElement = commandRowElement.querySelector('.quickedit-label') as HTMLSpanElement;

            let commandId = element.getAttribute('data-command-id');
            let commandFetchURL = `/game.php?village=${getGameData().village.id}&screen=info_command&ajax=details&id=${commandId}`;

            const response = await fetch(commandFetchURL);
            const json = await response.json();

            for (const unit in json.units) {
                units[unit] = units[unit] || 0;
                units[unit] += Number(json.units[unit].count);
            }

            commandLabelElement.style.color = 'green';
            await sleep(Math.floor((Math.random()*50)+200));
        }

        return units;
    };

    const countOwnSupportsButtonHandler = async () => {
        const tableRow = createTableRowForOwnSupports();
        const units = await countUnits();

        for (const [key, value] of Object.entries(units)) {
            const selector = `[data-unit="${key}"]`;
            const element = tableRow.querySelector(selector) as HTMLTableCellElement;

            if (!element) {
                continue;
            }

            element.innerHTML = value.toString();
            element.style.backgroundColor = '#AFE1AF';
        }

        let populationElement = tableRow.querySelector('[data-unit="pop"]') as HTMLTableCellElement;
        populationElement.innerHTML = "0";
        populationElement.style.backgroundColor = '#AFE1AF';
    }

    const commandsContainer = document.querySelector('#commands_outgoings');

    if (!commandsContainer) {
        return;
    }

    const commandsTable = commandsContainer.querySelector('table');
    const commandsTableHeader = commandsTable.querySelector('th');

    commandsTableHeader.insertAdjacentHTML('beforeend', customButtonTemplate);

    const countOwnSupportBtn = document.querySelector(`#${customButtonId}`) as HTMLButtonElement;

    countOwnSupportBtn.onclick = async () => await countOwnSupportsButtonHandler();
})();
