import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const useCheckUser = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        const redirectPath = "/";

        if (!loggedInUser && location !== redirectPath) {
            navigate(redirectPath);
        }

        setUser(JSON.parse(loggedInUser));
    }, []);

    return user;
};

export default useCheckUser;
