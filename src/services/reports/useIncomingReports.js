import { useEffect, useState } from "react";

export const useIncomingReports = (reports) => {
    const [incomingReports, setIncomingReports] = useState([]);
    const [incomingCount, setIncomingCount] = useState(0);
    const [isReportLoading, setIsReportLoading] = useState(false);

    useEffect(() => {
        setIsReportLoading(true);

        const incomingRep = reports.filter(
            (report) => report.status == "pending"
        );
        console.log("pendings: ", incomingRep);
        setIncomingReports(incomingRep);
        setIncomingCount(incomingRep.length);
        setIsReportLoading(false);
    }, [reports]);

    return { incomingReports, incomingCount, isReportLoading };
};
