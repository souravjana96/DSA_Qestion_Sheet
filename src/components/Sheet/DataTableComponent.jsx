import { YouTube } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import DataTable from "react-data-table-component";
import { FaYoutube } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import Checkbox from "@mui/material/Checkbox";
import Image from "next/image";
import { PLATFORM_LOGO } from "@/constants/sheetConstants";
const columns = [
  {
    name: "Title",
    minWidth: "200px",

    selector: (row) => {
      return (
        <Typography
          variant="body1"
          color="#000"
          sx={{
            letterSpacing: "1px",
          }}
        >
          {row?.title}
        </Typography>
      );
    },
  },
  {
    name: "Youtube",
    maxWidth: "150px",
    center: true,
    selector: (row) => {
      return (
        <Box>
          {row?.youtube_link && (
            <Link
              href={row?.youtube_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube size={32} color="#f00" />{" "}
            </Link>
          )}
        </Box>
      );
    },
  },
  {
    name: "Article",
    maxWidth: "150px",
    center: true,
    selector: (row) => {
      return (
        <Box>
          <Link
            href={row?.article_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoDocumentTextOutline size={32} color="#6495ED" />{" "}
          </Link>
        </Box>
      );
    },
  },
  {
    name: "Practice",
    maxWidth: "150px",
    center: true,
    selector: (row) => {
      return (
        <Box>
          {row?.practice_link && (
            <Link
              href={row?.practice_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={PLATFORM_LOGO[row.platform]}
                height={35}
                width={35}
                alt={PLATFORM_LOGO[row.platform]}
              />
            </Link>
          )}
        </Box>
      );
    },
  },
];
const customStyles = {
  rows: {
    style: {
      minHeight: "64px",
    },
  },
  headCells: {
    style: {
      paddingLeft: "16px",
      paddingRight: "16px",
      fontWeight: "bold",
      fontSize: "16px",
      backgroundColor: "#f5f5f5",
      borderRight: "1px solid #d5d5d5",
    },
  },
  cells: {
    style: {
      paddingLeft: "16px",
      paddingRight: "16px",
      fontSize: "14px",
      wordBreak: "break-word",
      borderRight: "1px solid #d5d5d5",
    },
  },
};
const selectProps = { status: (status) => status };

const DataTableComponent = ({ data }) => {
  return (
    <Box sx={{ border: "1px solid #d5d5d5", borderRadius: "10px" }}>
      <DataTable
        columns={columns}
        data={data}
        customStyles={customStyles}
        selectableRows
      />
    </Box>
  );
};

export default DataTableComponent;
