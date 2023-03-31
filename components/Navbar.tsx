import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { black600 } from "../config/colors";
import Hamburger from "./Hamburger";

const Navbar = () => {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flex: 1,
          backgroundColor: "aqua",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Hamburger />
        </Box>
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
      <Box
        sx={{
          flex: 3,
          backgroundColor: "teal",
        }}
      >
        2
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
