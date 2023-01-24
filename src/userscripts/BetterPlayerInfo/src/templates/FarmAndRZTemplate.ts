export class FarmAndRZTemplate {
    public static populateTemplate = (title: string, value: string) => `
        <tr>
            <td>${title}:</td>
            <td>${value}</td>
        </tr>
    `;
}