import React, { useEffect } from "react";
import AppLayout from "./layout/AppLayout";
import { sleep } from "../lib/sleep";
import { IPropsLogin } from "../types/UserType";
import { loginSchema } from "../schema/user";
import { LoginFormComponent } from "../components/LoginFormComponent";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux";
import { loginUserAsync } from "../redux/user";
import Router from "next/router";

interface LoginFormContainerProps {}

export const LoginFormContainer: React.FC<LoginFormContainerProps> = ({}) => {
  const dispatch = useDispatch(); // 디스패치 함수를 가져옵니다
  const { data } = useSelector((state: RootState) => state.user.userProfile);

  useEffect(() => {
    if (data) {
      Router.push("/");
    }
  }, [data]);

  const login = (props: IPropsLogin) => {
    sleep(1000);
    dispatch(loginUserAsync.request(props));
    return true;
  };
  return (
    <AppLayout>
      <LoginFormComponent onSubmit={login} loginSchema={loginSchema} />
    </AppLayout>
  );
};
