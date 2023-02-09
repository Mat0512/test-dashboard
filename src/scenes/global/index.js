import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidenav from "./Sidenav";
import useCheckUser from "../../services/useCheckUser";

const Layout = () => {
    const user = useCheckUser();
    return (
        <>
            <Sidenav user={user} />
            <div className="content">
                <Outlet />
            </div>
        </>
    );
};

export default Layout;
