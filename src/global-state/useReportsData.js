import { createContext, useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../config/firebase";
import { parseResult } from "../scenes/helper/parseResult";

export const ReportsContext = createContext({});

const reportRef = ref(db, "Incoming report");

export const useReportsData = () => {
    const [reports, setReports] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        onValue(reportRef, (snapshot) => {
            const data = snapshot.val();
            console.log("data at hook: ", data);
            const parsedData = parseResult(data);
            console.log(parsedData);
            setReports(parsedData);
            setIsLoading(false);
        });
    }, []);

    return { reports, setReports, isLoading };
};
