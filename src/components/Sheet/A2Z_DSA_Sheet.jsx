import { Box, Typography } from "@mui/material";
import React from "react";
import CollapsableTable from "./CollapsableTable";
import { A2Z_QUESTIONS_LIST } from "@/constants/sheetConstants";

const A2Z_DSA_Sheet = () => {
  return (
    <Box
      sx={{
        backgroundImage: "linear-gradient(-225deg, #7DE2FC 0%, #B9B6E5 100%)",
        width: "100vw",
        minHeight: "100vh",
        p: 1,
      }}
    >
      <Box sx={{ maxWidth: "1200px", margin: "50px auto" }}>
        <Typography
          variant="h3"
          color="#000"
          align="center"
          sx={{ fontWeight: "bold" }}
        >
          A2Z DSA Sheet
        </Typography>
        <Typography variant="h6" color="#000">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil illum
          ratione alias aliquam, asperiores ducimus id expedita aut pariatur,
          quidem sit vero unde. Nisi ut iste et dicta incidunt debitis possimus
          fugit eius quia fuga!
        </Typography>
        <CollapsableTable QUESTIONS_LIST={A2Z_QUESTIONS_LIST} />
      </Box>
    </Box>
  );
};

export default A2Z_DSA_Sheet;
