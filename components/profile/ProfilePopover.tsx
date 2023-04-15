import { useState } from "react";
import {
  Avatar,
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Popover,
} from "@mui/material";
import {
  RiLogoutBoxRLine,
  RiUserSettingsLine,
  RiLockPasswordLine,
  RiCamera2Line,
} from "react-icons/ri";

const ProfilePopover = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
  const handlePopoverOpen = (e: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Box>
      <Box onClick={handlePopoverOpen}>
        <Avatar alt="Profile picture" sx={{ cursor: "pointer" }}>
          JD
        </Avatar>
      </Box>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{
          sx: {
            marginTop: "10px",
            width: "220px",
          },
        }}
      >
        <List sx={{ width: "220px" }}>
          <ListItemButton>
            <ListItemIcon
              sx={{
                minWidth: "40px",
              }}
            >
              <RiUserSettingsLine />
            </ListItemIcon>
            <ListItemText primary="Edit Profile" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon
              sx={{
                minWidth: "40px",
              }}
            >
              <RiCamera2Line />
            </ListItemIcon>
            <ListItemText primary="Change Avatar" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon
              sx={{
                minWidth: "40px",
              }}
            >
              <RiLockPasswordLine />
            </ListItemIcon>
            <ListItemText primary="Change Password" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon
              sx={{
                minWidth: "40px",
              }}
            >
              <RiLogoutBoxRLine />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </List>
      </Popover>
    </Box>
  );
};

export default ProfilePopover;
