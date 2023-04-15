import { Container, Typography } from "@mui/material"
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";

const Logo = () => {
  return (
    <Container sx={{
      display: "flex",
      justifyContent: "center",
      gap: "10px",
      alignItems: "center"
    }}>
      <WidgetsOutlinedIcon sx={{ color: "black" }} />
      <Typography variant="h5">Vita OS</Typography>
    </Container>
  );
}

export default Logo
