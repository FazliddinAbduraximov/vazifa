import React from "react";
import { Box, Typography } from "@mui/material";

export default function Footer() {
    return (
        <Box sx={{ bgcolor: "#f0f0f0", py: 4, mt: 6, textAlign: "center" }}>
            <Typography variant="body2" color="text.secondary">
                © 2025 BAYAN SÜLU. Все права защищены.
            </Typography>
        </Box>
    );
}
