import React from "react";
import { Box, Typography } from "@mui/material";

const StatCard = ({ icon, count, countLabel }) => {
    return (
        <Box
            display="flex"
            my="20px"
            alignItems="center"
            width="100%"
            p="15px"
            backgroundColor="#B33F40"
            color="#ffffff"
            borderRadius="10px"
        >
            {icon}
            <Typography ml="10px" fontSize="18px" lineHeight={1}>
                {`${count} ${countLabel}`}
            </Typography>
        </Box>
    );
};

export default StatCard;
