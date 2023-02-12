import { useEffect, useState, useContext } from "react";
import { ReportsContext } from "../global-state/useReportsData";

export const useIncomingReports = (reports) => {
    const [incomingReports, setIncomingReports] = useState([]);
    const [incomingCount, setIncomingCount] = useState(0);
    const [isReportLoading, setIsReportLoading] = useState(false);

    useEffect(() => {
        setIsReportLoading(true);
        console.log("Reports: ", reports);

        const incomingRep = reports.filter(
            (report) => report.status == "pending"
        );
        setIncomingReports(incomingRep);
        setIncomingCount(incomingRep.length);
        setIsReportLoading(false);
    }, [reports]);

    return { incomingReports, incomingCount, isReportLoading };
};
