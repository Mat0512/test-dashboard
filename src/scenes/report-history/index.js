import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    TableHead,
    Button,
    Typography,
} from "@mui/material";
import LoadingNotif from "../../components/LoadingNotif";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { useContext } from "react";
import { useHistoryReports } from "../../services/useHistoryReports";
import { ReportsContext } from "../../global-state/useReportsData";

const History = () => {
    const { reports } = useContext(ReportsContext);
    const { historyReports, isHistoryLoading } = useHistoryReports(reports);
    const navigate = useNavigate();

    console.log("history: ", historyReports);
    return (
        <>
            {isHistoryLoading ? (
                <LoadingNotif />
            ) : (
                <div>
                    <Header title="Reports History" />
                    <TableContainer
                        component={Box}
                        sx={{
                            marginTop: "20px",
                            border: "1px solid #dcdcdc",
                            height: "400px",
                        }}
                    >
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">Date</TableCell>
                                    <TableCell align="left">Address</TableCell>
                                    <TableCell align="left">
                                        Contact Person
                                    </TableCell>
                                    <TableCell align="left">
                                        Contact Number
                                    </TableCell>
                                    <TableCell align="left">Status</TableCell>
                                    <TableCell align="left">Action </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {historyReports.map((row) => (
                                    <TableRow key={row.id}>
                                        <TableCell align="left">
                                            {row.date}
                                        </TableCell>
                                        <TableCell align="left">
                                            {row.address}
                                        </TableCell>
                                        <TableCell align="left">
                                            {row.fname}
                                        </TableCell>
                                        <TableCell align="left">
                                            {row.con}
                                        </TableCell>
                                        <TableCell align="left">
                                            {row.status || "-"}
                                        </TableCell>
                                        <TableCell align="left">
                                            <Button
                                                variant="contained"
                                                onClick={() => {
                                                    navigate(
                                                        `/report-details/${row.id}`
                                                    );
                                                }}
                                            >
                                                <Typography fontSize="12px">
                                                    View
                                                </Typography>
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            )}
        </>
    );
};

export default History;
