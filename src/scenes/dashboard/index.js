import React, { useState, useEffect, useCallback } from "react";
import Header from "../../components/Header";
import ReportIcon from "@mui/icons-material/Report";
import { Box } from "@mui/material";
import StatCard from "../../components/StatCard";
import ReportTable from "./ReportTable";
import Map from "./Map";
import LoadingNotif from "../../components/LoadingNotif";
import { db } from "../../config/firebase";
import { ref, get, onValue } from "firebase/database";
import { parseResult } from "../helper/parseResult";

const reportsRef = ref(db, "Incoming report");

const Dashboard = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        onValue(reportsRef, (snapshot) => {
            const reports = snapshot.val();

            const parsedRes = parseResult(reports);
            setData(parsedRes);
            setIsLoading(false);
        });
        // .then((snapshot) => {
        //     const reports = snapshot.val();

        //     const parsedRes = parseResult(reports);
        //     setData(parsedRes);
        // })
        // .catch((err) => console.log(err))
        // .finally(() => {
        //     setIsLoading(false);
        // });
    }, []);

    return (
        <>
            {isLoading ? (
                <LoadingNotif />
            ) : (
                <Box display="flex" flexDirection="column" gap={2}>
                    <Header title="Incident Reports" />
                    <StatCard
                        count="3"
                        countLabel="Incoming Incidents"
                        icon={
                            <ReportIcon
                                sx={{
                                    fontSize: "30px",
                                }}
                                data={data}
                            />
                        }
                    />

                    <ReportTable data={data} />

                    <Header title="Incident Location" />
                    <Map data={data} />
                </Box>
            )}
        </>
    );
};

export default Dashboard;
