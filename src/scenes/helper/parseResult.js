export const parseResult = (obj) => {
    const reportData = [];

    for (let id in obj) {
        reportData.push({
            id: id,
            ...obj[id],
        });
    }

    return reportData;
};
