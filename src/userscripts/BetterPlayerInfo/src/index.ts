import { PlayerInfoScreenScraper } from 'tw-framework';
import { CopyVillageCoordinates } from './modules';
import { FarmAndRZStats } from './modules/FarmAndRZStats';

(async () => {
    const playerInfoTable = PlayerInfoScreenScraper.getPlayerInfoTable();
    const villageTable = PlayerInfoScreenScraper.getVillageTable();

    CopyVillageCoordinates.attach(villageTable);
    await FarmAndRZStats.attach(playerInfoTable);
})();
