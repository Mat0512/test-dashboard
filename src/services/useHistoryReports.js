import { useEffect, useState } from "react";

export const useHistoryReports = (reports) => {
    const [historyReports, sethistoryReports] = useState([]);
    const [historyCount, setHistoryCount] = useState(0);
    const [isHistoryLoading, setIsHistoryLoading] = useState(false);

    useEffect(() => {
        setIsHistoryLoading(true);
        console.log("Reports: ", reports);

        const evaluatedRep = reports.filter(
            (report) => report.status !== "pending"
        );

        console.log("filtered history: ", evaluatedRep);
        sethistoryReports(evaluatedRep);
        setHistoryCount(evaluatedRep.length);
        setIsHistoryLoading(false);
    }, [reports]);

    return { historyReports, historyCount, isHistoryLoading };
};
