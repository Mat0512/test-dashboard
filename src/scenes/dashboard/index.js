import React, { useState, useEffect, useContext } from "react";
import Header from "../../components/Header";
import { Box, Typography } from "@mui/material";
import ReportTable from "./ReportTable";
import LoadingNotif from "../../components/LoadingNotif";
import { ReportsContext } from "../../global-state/useReportsData";
import { useIncomingReports } from "../../global-state/services/useIncomingReports";
import { useAggregatedByTimeReports } from "../../global-state/services/useAggregatedByTimeReport";
import BarChart from "../reports/BarChart";

const Dashboard = () => {
    const { reports } = useContext(ReportsContext);
    const { incomingReports, incomingCount, isReportLoading } =
        useIncomingReports(reports);

    const { monthlyReports, annualReports, isTotalReportsLoading } =
        useAggregatedByTimeReports(reports);

    return (
        <>
            {!reports || isReportLoading || isTotalReportsLoading ? (
                <LoadingNotif />
            ) : (
                <Box display="flex" flexDirection="column" gap={2}>
                    <Header title="Dashboard" />
                    <Box
                        display="flex"
                        height="250"
                        justifyContent="space-between"
                        gap={2}
                    >
                        <Box height="300px" width="50%">
                            <Typography variant="h6">Yearly Reports</Typography>
                            <Box
                                height="100%"
                                width="100%"
                                display="flex"
                                justifyContent="space-between"
                                p="10px"
                                backgroundColor="#f2f3f5"
                            >
                                <BarChart
                                    data={annualReports}
                                    index="year"
                                    dashboard
                                />
                            </Box>
                        </Box>
                        <Box height="300px" width="50%">
                            <Typography variant="h6">
                                Monthly Reports
                            </Typography>
                            <Box
                                height="100%"
                                width="100%"
                                display="flex"
                                justifyContent="space-between"
                                p="10px"
                                backgroundColor="#f2f3f5"
                            >
                                <BarChart
                                    data={monthlyReports}
                                    index="month"
                                    dashboard
                                />
                            </Box>
                        </Box>
                    </Box>
                    <Box mt="50px">
                        <Header title="Incoming Reports" />
                        <ReportTable data={reports} />
                    </Box>
                </Box>
            )}
        </>
    );
};

export default Dashboard;
