import { Box, Typography } from "@mui/material";
// import * as React from "react";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";

const data = [
  {
    id: 1,
    name: "Jessica S.",
    avatar: "/0.jpg",
  },
  {
    id: 2,
    name: "Jasmine T.",
    avatar: "/1.jpg",
  },
  {
    id: 3,
    name: "Anna K.",
    avatar: "/50.jpg",
  },
];
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "80%",
      height: "80%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2)",
      opacity: 0,
    },
  },
}));

const NavAvatar = () => {
  return (
    <>
      {data.map((item: any) => (
        <Box
          key={item.id}
          sx={{
            border: "1px solid #cccccc",
            borderRadius: 10,
            width: "fit-content",
            height: 30,
            padding: "0 10px",
            display: {
              xs: "none",
              sm: "flex",
            },
            alignItems: "center",
            gap: "0.2rem",
          }}
        >
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar
              alt={item.name}
              src={item.avatar}
              sx={{ width: 24, height: 24 }}
            />
          </StyledBadge>
          <Typography variant="body2" sx={{ fontSize: 12 }}>
            {item.name}
          </Typography>
        </Box>
      ))}
    </>
  );
};

export default NavAvatar;
