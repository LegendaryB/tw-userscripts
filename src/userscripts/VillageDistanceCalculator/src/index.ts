import { createUnitTable, createUnitTableHeader, createUnitTableCell, createSelectionIndicator } from './templates';
import { getTWMap, UIMessageService, getUnitInfo, calcUnitTravelTimeBetweenVillages, TWMapVillage, TWMapHandler } from 'tw-framework';

const TABLE_ID = 'VillageDistanceCalculatorTable';
const TABLE_HEADER_ID = 'VillageDistanceCalculatorHeaders';
const TABLE_BODY_AREA_ID = 'VillageDistanceCalculatorBody'

const map = getTWMap();
const mapHandler = map.mapHandler as MapHandler;
const travelTimeTable = createUnitTable();

let scriptActive = false;
let selectedVillages: TWMapVillage[] = [];

interface MapHandler extends TWMapHandler {
    integratedSpawnSector: any;
    integratedClickFunction: any;
}

const renderSelectionIndicator = (village: TWMapVillage, villageElement: HTMLElement) => {
    let template = createSelectionIndicator(village.id, villageElement.style.left, villageElement.style.top);
    villageElement.insertAdjacentHTML('afterend', template);
}

const insertTravelTimeTable = () => {
    let anchor = document.getElementById('map_whole');
    anchor.insertAdjacentHTML('afterend', travelTimeTable);
}

const insertUnitTableHeader = (unit: string) => {
    const tableHeaderElement = document.getElementById(TABLE_HEADER_ID) as HTMLTableRowElement;
    const header = createUnitTableHeader(`https://dsde.innogamescdn.com/asset/f6f54c14/graphic/unit/unit_${unit.toLowerCase()}.png`)

    tableHeaderElement.insertAdjacentHTML('beforeend', header);
}

const insertUnitTableCell = (unit: string, value: string) => {
    const tableBodyAreaElement = document.getElementById(TABLE_BODY_AREA_ID) as HTMLTableRowElement;
    const cell = createUnitTableCell(unit.toLowerCase(), value);

    tableBodyAreaElement.insertAdjacentHTML('beforeend', cell);
}

const renderTravelTimeTable = async () => {
    const unitInfo = await getUnitInfo();
    const startVillage = selectedVillages[0];
    const targetVillage = selectedVillages[1];

    insertTravelTimeTable();

    for (const key in unitInfo) {
        const travelTime = calcUnitTravelTimeBetweenVillages(startVillage, targetVillage, unitInfo[key]);

        insertUnitTableHeader(key);
        insertUnitTableCell(key, convertTime(travelTime));
    }
}

const customSpawnSector = (data: any, sector: any) => {
    mapHandler.integratedSpawnSector(data, sector);

    for (const village of selectedVillages) {
        let mapVillageElement = document.getElementById(`map_village_${village.id}`);

        if (!mapVillageElement) {
            continue;
        }

        renderSelectionIndicator(village, mapVillageElement);
    }
}

const handleTWMapVillageClick = async (x: number, y: number) => {
    let village = map.villages[(x) * 1000 + y];

    if (!village) {
        return;
    }

    if (selectedVillages.length == 2) {
        resetSelectedVillages();
    }

    UIMessageService.SuccessMessage(`Selected village: ${x}|${y}`);

    let indexInSelectedVillagesArray = selectedVillages.findIndex(sv => sv.id == village.id);

    if (indexInSelectedVillagesArray != -1) {
        selectedVillages.splice(indexInSelectedVillagesArray, 1);
    }
    else {
        selectedVillages.push(village);
    }

    map.reload();

    if (selectedVillages.length == 2) {
        await renderTravelTimeTable();
    }
}

const customClickFunction = (x: number, y: number, e: Event) => {
    handleTWMapVillageClick(x, y);
    return false;
}

const enableVillageSelection = () => {
    UIMessageService.InfoMessage('VillageDistanceCalculator active');

    scriptActive = true;

    mapHandler.integratedSpawnSector = mapHandler.spawnSector;
    mapHandler.spawnSector = customSpawnSector;

    mapHandler.integratedClickFunction = mapHandler.onClick;
    mapHandler.onClick = customClickFunction;

    map.reload();
};

const disableVillageSelection = () => {
    UIMessageService.InfoMessage('VillageDistanceCalculator inactive');

    scriptActive = false;

    mapHandler.spawnSector = mapHandler.integratedSpawnSector;
    mapHandler.onClick = mapHandler.integratedClickFunction;

    resetSelectedVillages();
};

const resetSelectedVillages = () => {
    selectedVillages = [];
    removeTravelTimeTable();

    map.reload();
}

const removeTravelTimeTable = () => {
    let table = document.getElementById(TABLE_ID);

    if (table) {
        table.remove();
    }
}

const formatTime = (input: number) => {
    return input < 10 ? `0${input}` : input;
}

const convertTime = (input: number) => {
    let input1 = Math.round(input * 60);
    let seconds = (input1 % 60);
    let input2 = Math.floor(input1 / 60);
    let minutes = input2 % 60;
    let input3 = Math.floor(input2 / 60);
    let hours = input3 % 24;
    let days = Math.floor(input3 / 24);

    if (days > 0) {
        hours += days * 24;
    }

    return `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

document.addEventListener('keydown', (event) => {
    if (event.isComposing || event.key === 'd') {
        if (!scriptActive) {
            enableVillageSelection();
        }
        else {
            disableVillageSelection();
        }
    }
});