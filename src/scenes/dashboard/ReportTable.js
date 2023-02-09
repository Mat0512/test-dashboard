import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    TableHead,
} from "@mui/material";

const ReportTable = ({ data }) => {
    console.log("data: ", data);
    return (
        //    <Box width="100%" height="350px">
        //        <DataGrid
        //            columns={columns}
        //            rows={rows}
        //            pageSize={10}
        //            rowsPerPageOptions={[10]}
        //            //  getRowClassName={  }
        //        />
        //    </Box>

        <TableContainer
            component={Box}
            sx={{
                border: "1px solid #dcdcdc",
                height: "400px",
            }}
        >
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Date</TableCell>
                        <TableCell align="left">Address</TableCell>
                        <TableCell align="left">Coordinates</TableCell>
                        <TableCell align="left">Contact Person</TableCell>
                        <TableCell align="left">Contact Number</TableCell>
                        <TableCell align="left">Contact Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell align="left">{row.date}</TableCell>
                            <TableCell align="left">{row.address}</TableCell>
                            <TableCell align="left">
                                {`Latitude: ${row.lat}
                              Longitude: ${row.lng}`}
                            </TableCell>
                            <TableCell align="left">{row.fname}</TableCell>
                            <TableCell align="left">{row.con}</TableCell>
                            <TableCell align="left">{row.emais}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ReportTable;
