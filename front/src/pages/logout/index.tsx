import React, { useEffect } from "react";
import Router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { logoutUserAsync } from "../../redux/user";
import { RootState } from "../../redux";

interface LogoutProps {}

const Logout: React.FC<LogoutProps> = ({}) => {
  const dispatch = useDispatch();
  const { data } = useSelector((state: RootState) => state.user.userProfile);

  useEffect(() => {
    if (data) {
      dispatch(logoutUserAsync.request(data.token));
    }
    Router.push("/");
  }, []);
  return null;
};
export default Logout;
