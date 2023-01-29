export const sleep = ms => new Promise(r => setTimeout(r, ms));

export const requestPageAndParse = async (link: string) => {
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

export type InADayTypes = 'kill_att' | 'kill_def' | 'kill_sup' | 'loot_res' | 'loot_vil' | 'scavenge' | 'conquer'

// todo: move to framework?
export const getInADayInfo = async (playerName: string, type: InADayTypes): Promise<any> => {
    try {
        let url = `/game.php?screen=ranking&mode=in_a_day&type=${type}&name=${encodeURIComponent(playerName)}`;

        let doc = await requestPageAndParse(url);

        let noStatsElement = doc.querySelectorAll('em');

        if (noStatsElement.length > 0) {
            return {
                Rank: 0,
                Points: 0
            }
        }

        let table = doc.getElementById('in_a_day_ranking_table');
        let row = table.querySelector('[class=userimage-tiny]').closest('tr');

        return {
            Rank: Number(row.cells[0].innerText),
            Points: Number(row.cells[3].innerText.replace('.', ''))
        };
    }
    catch (err) {
        return {
            Rank: 0,
            Points: 0
        }
    }
}