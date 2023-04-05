import { ReactNode } from "react";
import LoginSvgs from "./LoginSvgs";
import Logo from "./Logo";
import { Container } from "@mui/material";

const LoginLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "500px",
        height: "88vh",
        marginBottom: "40px"
      }}
    >
      <Logo />
      {children}
      <LoginSvgs />
    </Container>
  );
};

export default LoginLayout;
