import { requestPageAndParse } from "../../shared";

const ALARM_BEFORE_MINS = 2;

(async () => {
    const $ = (unsafeWindow as any).$;
    const TribalWars = (unsafeWindow as any).TribalWars;
    const game_data = (unsafeWindow as any).game_data;

    const toMilliseconds = (hrs: number, min: number, sec: number) => (hrs * 60 * 60 + min * 60 + sec) * 1000;
    const toTime = (ms: number) => {
        const seconds = Math.floor(ms / 1000) % 60;
        const minutes = Math.floor((ms / 1000 / 60) % 60);
        const hours = Math.floor((ms / 1000 / 60 / 60) % 24);

        const formattedTime = [ 
            hours.toString().padStart(1, "0"),
            minutes.toString().padStart(2, "0"),
            seconds.toString().padStart(2, "0")
        ].join(":");

        return formattedTime;
    }

    const getRemainingTime = async () => {
        let page: Document = document;

        if (game_data.screen != 'overview_villages' && game_data.mode != 'incomings') {
            page = await requestPageAndParse(`/game.php?village=${game_data.village.id}&screen=overview_villages&mode=incomings&subtype=attacks`);
        }

        const remainingTime = page.querySelector<HTMLSpanElement>('#incomings_table tbody > tr:nth-child(2) > td:nth-child(7) > span').innerText.trim();
        const remaining = remainingTime.split(':').map(v => Number(v));
        const remainingTimeMs = toMilliseconds(remaining[0], remaining[1], remaining[2]);

        return {
            raw: remainingTime,
            ms: remainingTimeMs
        }
    }

    let ticks = 0;

    const main = async () => {
        ticks = 0;

        const remainingTime = await getRemainingTime();
        document.title = `INC in: ${remainingTime.raw}`;

        $(TribalWars).off().on("global_tick", () => {
            let timestamp = remainingTime.ms - (ticks * 1000);
            document.title = `INC in: ${toTime(timestamp)}`;

            ticks++;
        });

        setTimeout(() => {
            TribalWars.playSound("chat");

            setTimeout(async () => {
                await main();
            }, remainingTime.ms);
            
        }, remainingTime.ms - toMilliseconds(0, ALARM_BEFORE_MINS * 1000, 0))
    }

    await main();
})();