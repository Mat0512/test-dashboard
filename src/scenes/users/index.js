import { Box, Typography, IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Header from "../../components/Header";
import { useState, useEffect } from "react";
import { get, ref, remove, onValue } from "firebase/database";
import { db } from "../../config/firebase";
import { parseResult } from "../helper/parseResult";
import EditForm from "./EditForm";
const usersRef = ref(db, "Registered Users");

const Users = () => {
    const [data, setData] = useState([]);
    const [selected, setSelected] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    // const [message, setMessage] = useState("");
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        onValue(usersRef, (snapshot) => {
            const users = snapshot.val();
            console.log("res: ", users);

            const parsedRes = parseResult(users);
            setData(parsedRes);
            console.log("parse: ", parsedRes);
        });
        // .then((snapshot) => {
        //     const users = snapshot.val();
        //     console.log("res: ", users);

        //     const parsedRes = parseResult(users);
        //     setData(parsedRes);
        //     console.log("parse: ", parsedRes);
        // })
        // .catch((err) => console.log(err))
        // .finally(() => {
        //     setIsLoading(false);
        // });
    }, []);

    const editUser = (row) => {
        console.log("data in edit:  ", data);
        const matchUser = data.filter((d) => d.id === row.id);
        console.log(matchUser);
        setSelected(matchUser[0]);
        setOpen(true);
    };

    const deleteUser = (row) => {
        console.log(row.id);
        const deleteUserRef = ref(db, `Registered Users/${data.id}`);
        remove(deleteUserRef)
            .then(() => alert("Deleted"))
            .catch((err) => alert("Error occured on deleting."));
    };
    const columns = [
        { field: "id", headerName: "ID", width: 100, editable: true },
        {
            field: "fname",
            headerName: "Name",
            width: 80,
            editable: true,
        },
        {
            field: "ename1",
            headerName: "Username",
            width: 100,
            editable: true,
        },
        {
            field: "address",
            headerName: "Address",
            width: 140,
            editable: true,
        },
        {
            field: "dob",
            headerName: "Birthdate",
            flex: 1,
            editable: true,
        },
        {
            field: "number",
            headerName: "Contact",
            flex: 1,
            editable: true,
        },

        {
            field: "usertype",
            headerName: "Role",
            sortable: false,
            flex: 1,
            editable: true,
        },
        {
            field: "action",
            headerName: "Action",
            sortable: false,
            flex: 1,
            renderCell: ({ row }) => {
                return (
                    <Box display="flex" gap={1}>
                        <div
                            onClick={() => {
                                editUser(row);
                            }}
                        >
                            <IconButton children={<EditOutlinedIcon />} />
                        </div>
                        <div
                            onClick={() => {
                                deleteUser(row);
                            }}
                        >
                            <IconButton
                                children={<DeleteOutlineOutlinedIcon />}
                            />
                        </div>
                    </Box>
                );
            },
        },
    ];

    return (
        <div>
            <Typography variant="h5" component="h1">
                Users
            </Typography>
            <Typography component="h2" sx={{ fontSize: "16px" }}>
                Manage Users
            </Typography>
            <Box sx={{ height: "400px", width: "100%", marginTop: "20px" }}>
                <DataGrid
                    rows={data}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    disableSelectionOnClick
                    experimentalFeatures={{ newEditingApi: true }}
                />
            </Box>

            <EditForm
                data={selected}
                open={open}
                setOpen={setOpen}
                setData={setSelected}
                usersRef={usersRef}
            />
        </div>
    );
};
export default Users;