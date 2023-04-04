import { ReactNode } from "react";
import LoginForm from "./LoginForm";

const LoginLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      {children}
      <LoginForm />
    </div>
  );
};

export default LoginLayout;
