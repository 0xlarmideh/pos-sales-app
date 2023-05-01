import { Box } from "@mui/material";
import Hamburger from "./Hamburger";
import NavAvatar from "./NavAvatar";
import Profile from "../profile";

const Navbar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        marginTop: "10px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flex: 1,
        }}
      >
        <Hamburger />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          flex: 3,
        }}
      >
        <NavAvatar />
      </Box>

      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Profile />
      </Box>
    </Box>
  );
};
export default Navbar;
