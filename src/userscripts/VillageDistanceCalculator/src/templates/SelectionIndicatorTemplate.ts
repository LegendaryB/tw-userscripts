export const createSelectionIndicator = (villageId: string, left: string, top: string) => `
    <div class="SelectionIndicator" id="SelectionIndicator_${villageId}"
        style="outline: 2px dashed gold; width:52px; height:37px; position: absolute; z-index: 50; left: ${left}; top: ${top};">
    </div>
`;