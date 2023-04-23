// import * as React from "react";
import { useState } from "react";
import { Box } from "@mui/material";
import { green300, black600 } from "../../config/colors";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import RestaurantMenuOutlinedIcon from "@mui/icons-material/RestaurantMenuOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import LegendToggleOutlinedIcon from "@mui/icons-material/LegendToggleOutlined";
import Typography from "@mui/material/Typography";

const Hamburger = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [activeNav, setActiveNav] = useState("false");

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setActiveNav("true");
  };
  const handleClose = () => {
    setAnchorEl(null);
    setActiveNav("false");
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ margin: "5px" }}
      >
        {activeNav === "true" ? (
          <RestaurantMenuOutlinedIcon sx={{ color: green300 }} />
        ) : (
          <WidgetsOutlinedIcon sx={{ color: "black" }} />
        )}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        PaperProps={{
          style: {
            width: "250px",
            margin: "0.3rem 0 0 -1rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <MenuItem
          onClick={handleClose}
          sx={{ margin: "0.8rem 0", padding: "10px" }}
        >
          <span style={{ marginRight: "0.8rem" }}>
            <AddCircleOutlinedIcon sx={{ fontSize: "1rem" }} />
          </span>
          Add New Item
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{ margin: "0.8rem 0", padding: "10px" }}
        >
          <span style={{ marginRight: "0.8rem" }}>
            <VisibilityOutlinedIcon sx={{ fontSize: "1rem" }} />
          </span>
          View all Items
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{ margin: "0.8rem 0", padding: "10px" }}
        >
          <span style={{ marginRight: "0.8rem" }}>
            <BorderColorOutlinedIcon sx={{ fontSize: "1rem" }} />
          </span>
          Update Price List
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{ margin: "0.8rem 0", padding: "10px" }}
        >
          <span style={{ marginRight: "0.8rem" }}>
            <FileCopyOutlinedIcon sx={{ fontSize: "1rem" }} />
          </span>
          Generate Invoice
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{ margin: "0.8rem 0", padding: "10px" }}
        >
          <span style={{ marginRight: "0.8rem" }}>
            <LegendToggleOutlinedIcon sx={{ fontSize: "1rem" }} />
          </span>
          Track Supply Orders
        </MenuItem>
      </Menu>
      <Box
        sx={{
          display: {
            xs: "none",
            sm: "flex",
            flexDirection: "column",
          },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: "0.9rem",
            fontWeight: 600,
            marginBottom: "-2px",
            color: black600,
          }}
        >
          Vita
        </Typography>
        <Typography variant="body2" sx={{ color: "gray" }}>
          Inventory
        </Typography>
      </Box>
    </Box>
  );
};
export default Hamburger;
