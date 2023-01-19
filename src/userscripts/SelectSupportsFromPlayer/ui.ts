/*import { DefenceTableRow, UnitScreen } from "tw-framework";
import { createElement } from "tw-framework";

import { Translator } from "tw-framework";

const ID_PREFIX = 'SelectSupportsByPlayer';
const PLAYER_NAME_CONTAINER_ID = `${ID_PREFIX}_playerNameSelection`;
const FILTER_TABLE_ID = `${ID_PREFIX}_filterTable`;
const FILTER_TABLE_HEADER_ID = `${ID_PREFIX}_filterTableHeader`;
const FILTER_BUTTON_ID = `${ID_PREFIX}_applyFilterBtn`;

const FILTER_UNIT_ID_PREFIX = `${ID_PREFIX}_filterRow_%UNIT%`;
const FILTER_UNIT_OPERAND_ID = `${FILTER_UNIT_ID_PREFIX}_Operand`;
const FILTER_UNIT_VALUE_ID = `${FILTER_UNIT_ID_PREFIX}_Value`;

const UI_ELEMENT_TEMPLATE = `
        <div>
            <div>
                <h4 style="font-style: normal;">{{Header}}</h4>
                <select>
                    <option value=""></option>
                    <option value="No Game No Life">No Game No Life</option>
                </select>
                <div id="${PLAYER_NAME_CONTAINER_ID}"></div>
            </div>

            <div>
                <div style="margin: 16px 0px 16px 0px;">
                    <table id="${FILTER_TABLE_ID}">
                        <tbody>
                            <tr id="${FILTER_TABLE_HEADER_ID}">
                                <th colspan="2">{{FilterHeader}}</th>
                            </tr>
                        </tbody>
                    </table>

                    <table align="left">
                        <tbody>
                            <tr>
                                <td>
                                    <input id="${FILTER_BUTTON_ID}" class="btn" type="submit" value="{{FilterApplyButton}}">
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>`;

const PLAYER_NAME_ELEMENT_TEMPLATE = `<a style="cursor: pointer;" target="_self"></a>`;

const FILTER_TABLE_ROW_ELEMENT_TEMPLATE = `
        <tr id="%UNIT%">
            <td>
                <label>
                    <input type="checkbox">
                    {{Unit%UNIT%}}
                </label>
            </td>
            <td>
                <select id="${FILTER_UNIT_OPERAND_ID}">
                    <option value=">">&gt;</option>
                    <option value="<">&lt;</option>
                    <option value="=">=</option>
                    <option value=">=">>=</option>
                    <option value="<="><=</option>
                    <option value="!=">!=</option>
                </select>
                <input id="${FILTER_UNIT_VALUE_ID}" type="number"> 
            </td>
        </tr>
`;

const renderLayout = () => {
    const CONTENT_ROOT_ELEMENT_ID = 'content_value';
    const ANCHOR_ELEMENT = document.getElementById(CONTENT_ROOT_ELEMENT_ID).querySelector('h3');

    let template = Translator.translateAndReplace(UI_ELEMENT_TEMPLATE);

    ANCHOR_ELEMENT.after(
        createElement(template));
}

const createPlayerNameElement = (playerName: string) => {
    let element = createElement(PLAYER_NAME_ELEMENT_TEMPLATE) as HTMLAnchorElement;
    element.innerText = playerName;

    return element;
}

const renderPlayerNameSelectionInterface = (items: DefenceTableRow[], onclickFn: (defenceTableRow: DefenceTableRow) => void): void => {
    const ANCHOR_ELEMENT = document.getElementById(PLAYER_NAME_CONTAINER_ID) as HTMLDivElement;

    let presentPlayerNames: string[] = [];

    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        let playerName = item.data.playerName;

        if (presentPlayerNames.includes(playerName)) {
            continue;
        }

        let element = createPlayerNameElement(playerName);
        element.onclick = () => onclickFn(item);

        presentPlayerNames.push(item.data.playerName);
        ANCHOR_ELEMENT.appendChild(element);
    }
}

class Filter {
    Unit: string;
    Operand: string;
    Value: number;
}

const getFilter = (row: HTMLTableRowElement) => {
    let data = new Filter();
    data.Unit = row.id;

    let operand = row.querySelector(`#${FILTER_UNIT_OPERAND_ID.replace('%UNIT%', data.Unit)}`) as HTMLSelectElement;
    let value = row.querySelector(`#${FILTER_UNIT_VALUE_ID.replace('%UNIT%', data.Unit)}`) as HTMLInputElement;

    data.Operand = operand.value;
    data.Value = Number(value.value)

    return data;
}

const getActiveFilters = () => {
    let table = document.getElementById(FILTER_TABLE_ID);
    let rows = Array.from(table.querySelectorAll('input[type="checkbox"]:checked')).map(input => input.closest('tr'));
    let filters: Filter[] = [];

    for (const row of rows) {
        let filter = getFilter(row);
        filters.push(filter);
    }

    return filters;
}

const operatorToFn = {
    '<': (x: number, y: number) => x < y,
    '>': (x: number, y: number) => x > y,
    '=': (x: number, y: number) => x == y,
    '>=': (x: number, y: number) => x >= y,
    '<=': (x: number, y: number) => x <= y,
    '!=': (x: number, y: number) => x != y
}​​​​​​​;

const resetFilterOnDefenceTable = (rows: DefenceTableRow[]) => {
    for (const row of rows) {
        if (row.element.style.display == 'none') {
            row.element.style.display = '';
        }
    }
}

const handleFilterButtonClick = () => {
    let filters = getActiveFilters();
    let rows = UnitScreen.getDefenceTableRows();

    resetFilterOnDefenceTable(rows);

    for (const row of rows) {
        for (const filter of filters) {
            let fn = operatorToFn[filter.Operand];
            let unit = row.data.units.get(filter.Unit);

            let result = fn(unit, filter.Value);

            if (!result) {
                row.element.style.display = 'none';
            }
        }
    }
}

const renderFilterInterface = (items: DefenceTableRow[]) => {
    let filterTable = document.getElementById(FILTER_TABLE_ID);
    let filterTableBody = filterTable.querySelector('tbody');

    for (const key of items[0].data.units.keys()) {
        let template = FILTER_TABLE_ROW_ELEMENT_TEMPLATE.replaceAll('%UNIT%', key);
        template = Translator.translateAndReplace(template);

        let filterItemElement = createElement(template) as HTMLTableRowElement;

        filterTableBody.appendChild(filterItemElement);
    }

    let filterBtn = document.getElementById(FILTER_BUTTON_ID) as HTMLInputElement;
    filterBtn.onclick = () => handleFilterButtonClick();
}

export const render = (items: DefenceTableRow[], onclickFn: (defenceTableRow: DefenceTableRow) => void): void => {
    renderLayout();
    renderPlayerNameSelectionInterface(items, onclickFn);
    renderFilterInterface(items);
}*/