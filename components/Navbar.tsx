import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

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
        <Box>111</Box>
        <Box sx={{ marginLeft: "1.5rem" }}>
          <Typography
            variant="h6"
            sx={{ fontSize: "0.9rem", fontWeight: 600, marginBottom: "-2px" }}
          >
            Vita Corner Cafe
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
