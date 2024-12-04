import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import ExpandMore from "@mui/icons-material/ExpandMore";

import React from "react";
import DataTableComponent from "./DataTableComponent";

const CollapsableTable = ({QUESTIONS_LIST}) => {
  return (
    <Box sx={{ maxWidth: "1200px", margin: "50px auto" }}>
      {QUESTIONS_LIST?.map((accordionItem, acc_index) => {
        return (
          <Box
            key={acc_index}
            sx={{
              my: 1,
              borderRadius: "14px",
              overflow: "hidden",
              border: "1px solid #d5d5d5",
              background: "rgba(255, 255, 255, 0.7)",
            }}
          >
            <Accordion sx={{ background: "transparent", p: 1 }}>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Typography variant="h6" color="#000">
                    {" "}
                    Module {acc_index + 1}:{" "}
                    <span style={{ fontWeight: "bold" }}>
                      {accordionItem?.module}
                    </span>
                  </Typography>
                  <Box
                    sx={{
                      border: "1px solid #d5d5d5",
                      p: "2px 4px",
                      borderRadius: "4px",
                      mr: 1,
                    }}
                  >
                    <Typography
                      variant="body2"
                      color="#000"
                      sx={
                        {
                          // fontWeight: "bold"
                        }
                      }
                    >
                      1/{accordionItem?.problems?.length}
                    </Typography>
                  </Box>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <DataTableComponent data={accordionItem?.problems} />
              </AccordionDetails>
            </Accordion>
          </Box>
        );
      })}
    </Box>
  );
};

export default CollapsableTable;
