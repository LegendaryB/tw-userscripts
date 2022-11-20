import { render } from "./ui";
import { DefenceTableRow, UIMessageService, UnitScreen } from "tw-framework";

(() => {

    const markSupportsByPlayer = (playerName: string, tableRowElements: DefenceTableRow[]): void => {
        let msg = `Selected all supports of player '${playerName}'!`;

        for (const tableRow of tableRowElements) {
            if (tableRow.element.style.display != '') {
                // ignore not displayed rows
                continue; 
            }

            let checkbox = tableRow.element.firstElementChild.firstElementChild as HTMLInputElement;


            if (tableRow.data.playerName == playerName) {
                checkbox.checked = !checkbox.checked;

                if (!checkbox.checked) {
                    msg = `Deselected all supports of player '${playerName}'!`;
                }
            }
            else {
                checkbox.checked = false;
            }
        }

        UIMessageService.showSuccessMessage(msg);
    }

    let defenceTableRows = UnitScreen.getDefenceTableRows();

    if (defenceTableRows.length == 0) {
        return;
    }

    const onclickFn = (defenceTableRow: DefenceTableRow) => markSupportsByPlayer(defenceTableRow.data.playerName, defenceTableRows);

    render(defenceTableRows, onclickFn);

})();