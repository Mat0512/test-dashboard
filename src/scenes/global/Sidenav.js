import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Box, IconButton, Typography } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";

import { Link } from "react-router-dom";

const Sidenav = ({ user }) => {
    const { collapseSidebar, collapsed } = useProSidebar();

    return (
        <Box height="100vh" display="flex" backgroundColor="#ffffed">
            <Sidebar>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    p="10px"
                    ml="10px"
                >
                    {!collapsed && (
                        <Typography variant="h6">Dashboard</Typography>
                    )}
                    <IconButton onClick={() => collapseSidebar()}>
                        <MenuIcon />
                    </IconButton>
                </Box>
                <Menu>
                    <MenuItem component={<Link to="/" />} icon={<HomeIcon />}>
                        <Typography>Dashboard</Typography>
                    </MenuItem>
                    <MenuItem
                        component={<Link to="/users" />}
                        icon={<GroupIcon />}
                    >
                        Users
                    </MenuItem>
                </Menu>
            </Sidebar>
        </Box>
    );
};

export default Sidenav;