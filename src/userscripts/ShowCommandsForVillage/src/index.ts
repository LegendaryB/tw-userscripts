import { UIMessageService } from "tw-framework";
import { requestPageAndParse } from "../../shared";

(async() => {
    const incomingsTableHeaderId = 'ShowAttacksOnVillageHeader';

    const incomingsTableTemplate = `
        <table class="vis">
            <tbody>
                <tr id="${incomingsTableHeaderId}">
                    <th colspan="2">
                        Ankommende Truppen
                    </th>
                </tr>
            </tbody>
        </table>`;

    const getCommandsOnTargetVillage = async (target: string) => {
        const targetDocument = await requestPageAndParse(target);
        const commands = targetDocument.querySelectorAll<HTMLTableRowElement>('.command-row');

        return commands;
    }

    const target = document.querySelector('.village_anchor').querySelector('a').href;
    const commands = await getCommandsOnTargetVillage(target);

    if (commands.length === 0) {
        UIMessageService.InfoMessage('Keine Befehle für das Zieldorf gefunden');
        return;
    }

    const container = document.getElementById('command-data-form').querySelector('div') as HTMLDivElement;
    container.style.display = 'table-row';

    const commandTable = container.querySelector('table');
    commandTable.style.float = "left";

    container.insertAdjacentHTML('beforeend', incomingsTableTemplate);

    const incomingsTableRow = document.getElementById(incomingsTableHeaderId) as HTMLTableRowElement;

    let anchor = incomingsTableRow;

    for (const command of commands) {
        command.removeChild(command.cells[command.cells.length-1]);
        anchor.after(command);

        anchor = command;
    }

    UIMessageService.SuccessMessage('Befehle für das Zieldorf geladen');
})();
