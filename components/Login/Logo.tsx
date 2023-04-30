import { Container, Typography } from "@mui/material"
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import { black700 } from "../../config/colors";
const Logo = () => {
  return (
    <Container sx={{
      display: "flex",
      justifyContent: "center",
      gap: "10px",
      alignItems: "center"
    }}>
      <WidgetsOutlinedIcon sx={{ color: black700 }} />
      <Typography color={black700} variant="h5">Vita POS</Typography>
    </Container>
  );
}

export default Logo
