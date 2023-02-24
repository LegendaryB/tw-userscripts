(() => {
    const playerSelectId = 'SelectSupportingPlayer';
    const playerSelectTemplate = `<select style="float: right;" id="${playerSelectId}"></select>`;

    const getPlayerName = (row: HTMLTableRowElement) => {
        let source = row.cells[1].innerText;
        let matches = source.match(/\(([^()]*)\)/g);

        return matches[0].replace("(", "").replace(")", "");
    }

    const findPlayerNames = (rows: HTMLTableRowElement[]) => {
        let names = [];

        for (let i = 0; i < rows.length; i++) {
            let row = rows[i];
            let name = getPlayerName(row);

            if (!names.includes(name)) {
                names.push(name);
            }
        }

        return names;
    }

    const appendSelectOptionElement = (selectElement: HTMLSelectElement, value: string) => {
        let element = document.createElement('option');
        element.value = value;
        element.innerText = value;

        selectElement.add(element);
    }

    const fillPlayerSelectOptions = (selectElement: HTMLSelectElement, names: string[]) => {
        appendSelectOptionElement(selectElement, '');

        for (const name of names) {
            appendSelectOptionElement(selectElement, name);
        }
    }

    const executeOnSupportRows = (rows: HTMLTableRowElement[], action: (playerName: string, checkbox: HTMLInputElement) => void) => {
        for (const row of rows) {
            let playerName = getPlayerName(row);
            let checkbox = row.querySelector('[name^="id_"]') as HTMLInputElement;

            action(playerName, checkbox);
        }
    }

    const selectSupports = (value: string, rows: HTMLTableRowElement[]) => {
        executeOnSupportRows(rows, (playerName: string, checkbox: HTMLInputElement) => {
            if (playerName === value) {
                checkbox.checked = true;
            }
            else {
                checkbox.checked = false;
            }
        });
    }

    const clearSupports = (rows: HTMLTableRowElement[]) => {
        executeOnSupportRows(rows, (playerName: string, checkbox: HTMLInputElement) => {
            checkbox.checked = false;
        });
    }

    document.getElementById('units_home').parentElement.insertAdjacentHTML('beforebegin', playerSelectTemplate);

    let selectElement = document.getElementById(playerSelectId) as HTMLSelectElement;

    let elements = [...document.querySelectorAll<HTMLInputElement>('[name^="id_"]')];
    let rows = elements.map(e => e.closest('tr'));
    let playerNames = findPlayerNames(rows);

    fillPlayerSelectOptions(selectElement, playerNames);

    selectElement.onchange = (ev: Event) => {
        let value = selectElement.value;

        if (value.length > 0) {
            selectSupports(value, rows);
        }
        else {
            clearSupports(rows);
        }
    }
})();