/*import { render } from "./ui";
import { getWorldConfiguration, getGameData, Translator, UIMessageService } from "tw-framework";

import * as germanTranslations from "./i18n/de.json";
import * as englishTranslations from "./i18n/en.json";

(() => {

    Translator.registerTranslationProvider('en', englishTranslations);
    Translator.registerTranslationProvider('de', germanTranslations);

    const markSupportsByPlayer = (playerName: string, tableRowElements: DefenceTableRow[]): void => {
        let msg = Translator.translate('SelectionMessage').replace('%PLAYER%', playerName);

        for (const tableRow of tableRowElements) {
            if (tableRow.element.style.display != '') {
                // ignore not displayed rows
                continue; 
            }

            let checkbox = tableRow.element.firstElementChild.firstElementChild as HTMLInputElement;


            if (tableRow.data.playerName == playerName) {
                checkbox.checked = !checkbox.checked;

                if (!checkbox.checked) {
                    msg = Translator.translate('DeselectionMessage').replace('%PLAYER%', playerName);
                }
            }
            else {
                checkbox.checked = false;
            }
        }

        UIMessageService.InfoMessage(msg);
    }

    let defenceTableRows = UnitScreen.getDefenceTableRows();

    if (defenceTableRows.length == 0) {
        return;
    }

    const onclickFn = (defenceTableRow: DefenceTableRow) => markSupportsByPlayer(defenceTableRow.data.playerName, defenceTableRows);

    render(defenceTableRows, onclickFn);

})();
*/