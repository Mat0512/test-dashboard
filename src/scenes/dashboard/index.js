import React, { useState, useEffect, useContext } from "react";
import Header from "../../components/Header";
import ReportIcon from "@mui/icons-material/Report";
import { Box } from "@mui/material";
import StatCard from "../../components/StatCard";
import ReportTable from "./ReportTable";
import LoadingNotif from "../../components/LoadingNotif";
import HistoryIcon from "@mui/icons-material/History";
import { ReportsContext } from "../../global-state/useReportsData";
import { useIncomingReports } from "../../services/useIncomingReports";
import { useHistoryReports } from "../../services/useHistoryReports";

const Dashboard = () => {
    const { reports } = useContext(ReportsContext);
    const { incomingReports, incomingCount, isReportLoading } =
        useIncomingReports(reports);
    const { historyCount, isHistoryLoading } = useHistoryReports(reports);

    return (
        <>
            {!reports || isReportLoading || isHistoryLoading ? (
                <LoadingNotif />
            ) : (
                <Box display="flex" flexDirection="column" gap={2}>
                    <Header title="Dashboard" />
                    <Box display="flex" gap={2}>
                        <StatCard
                            count={incomingCount}
                            countLabel="Incoming Reports"
                            icon={
                                <ReportIcon
                                    sx={{
                                        fontSize: "30px",
                                    }}
                                />
                            }
                            bgColor="#c40233"
                        />
                        <StatCard
                            count={historyCount}
                            countLabel="Reports History"
                            icon={
                                <HistoryIcon
                                    sx={{
                                        fontSize: "30px",
                                    }}
                                />
                            }
                            bgColor="#e26313"
                        />
                    </Box>

                    <Header title="Incoming Reports" />
                    <ReportTable data={incomingReports} />
                </Box>
            )}
        </>
    );
};

export default Dashboard;
