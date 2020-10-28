import React from "react";
import LoginForm from "./loginform";
import AppLayout from "../../containers/layout/AppLayout";

interface LoginProps {}

const Login: React.FC<LoginProps> = ({}) => {
  return (
    <AppLayout>
      <LoginForm />
    </AppLayout>
  );
};
export default Login;
