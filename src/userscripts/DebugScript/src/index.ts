import { getBuildingInfo, getUnitInfo, getWorldConfiguration } from "tw-framework";

(async() => {
    let unitInfo = await getUnitInfo();

    console.log(await getWorldConfiguration());
    console.log(await getBuildingInfo());
    console.log(unitInfo);

    console.log(unitInfo.Knight);
})();
