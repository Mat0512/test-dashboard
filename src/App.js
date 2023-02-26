import "./index.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./scenes/dashboard";
import Login from "./scenes/login";
import Users from "./scenes/users";
import Layout from "./scenes/global";
import ReportDetails from "./scenes/report-details";
import History from "./scenes/report-history";
import { ReportsContext, useReportsData } from "./global-state/useReportsData";
import Reports from "./scenes/reports";

function App() {
    const { reports, setReports } = useReportsData();

    return (
        <ReportsContext.Provider value={{ reports, setReports }}>
            <div className="app">
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Dashboard />} />
                        <Route path="users" element={<Users />} />
                        <Route path="reports" element={<Reports />} />
                        <Route path="report-history" element={<History />} />
                        <Route
                            path="report-history/report-details/:id"
                            element={<ReportDetails />}
                        />
                        <Route
                            path="report-details/:id"
                            element={<ReportDetails />}
                        />
                    </Route>
                </Routes>
            </div>
        </ReportsContext.Provider>
    );
}

export default App;
