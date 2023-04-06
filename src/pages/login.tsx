import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import LoginForm from "../../components/Login/LoginForm";
import Logo from "../../components/Login/Logo";
import LoginSvgs from "../../components/Login/LoginSvgs";
import { Container } from "@mui/material";

type loginLayout = NextPage & {
  getLayout: (page: ReactElement) => ReactNode;
};

const Login: loginLayout = () => {
  return (
    <div>
      <LoginForm />
    </div>
  );
};

Login.getLayout = function (page: ReactElement) {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "500px",
        height: "88vh",
        marginY: "20px",
      }}
    >
      <Logo />
      {page}
      <LoginSvgs />
    </Container>
  );
};

export default Login;
