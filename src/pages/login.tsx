import { ReactNode } from "react";
import LoginLayout from "../../components/Login/LoginLayout"
import LoginForm from "../../components/Login/LoginForm";

const Login = () => {
  return (
    <div>
      <LoginLayout>
        <LoginForm />
      </LoginLayout>
    </div>
  );
};

export default Login;
