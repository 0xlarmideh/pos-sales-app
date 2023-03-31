import { Box } from "@mui/material";
import Hamburger from "./Hamburger";
import NavAvatar from "./NavAvatar";

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
          flex: 3,
        }}
      >
        <NavAvatar />
      </Box>
      <Box
        sx={{
          flex: 1,
          backgroundColor: "orange",
        }}
      >
        3
      </Box>
    </Box>
  );
};
export default Navbar;
