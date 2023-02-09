import React from "react";
import { Box, Typography } from "@mui/material";

const Header = ({ title, subtitle }) => {
    return (
        <Box>
            <Typography variant="h5" component="h2">
                {title}
            </Typography>
            <Typography variant="h6" component="h3">
                {subtitle}
            </Typography>
        </Box>
    );
};

export default Header;
