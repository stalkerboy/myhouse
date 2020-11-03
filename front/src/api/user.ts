// import Axios from "axios";
import { sleep } from "../lib/sleep";
import { IPropsLogin, IPropsUserProfile } from "../types/UserType";

export async function getUserProfile(token: string) {
  // Generic 을 통해 응답 데이터의 타입을 설정 할 수 있습니다.
  // const response = await Axios.post<IPropsUserProfile>(`${process.env.NEXT_PUBLIC_API_URL}/user/login`, { email, password });
  // console.log(response.data);

  await sleep(2000);
  console.log("token", token);
  const userProfile: IPropsUserProfile = { email: "test@test.com", nickname: "test", token: "testtoken" };
  return userProfile;
}

export async function loginUser(props: IPropsLogin) {
  // Generic 을 통해 응답 데이터의 타입을 설정 할 수 있습니다.
  // const response = await Axios.post<UserProfile>(`${process.env.NEXT_PUBLIC_API_URL}/user/login`, { email, password });
  // console.log(response.data);

  await sleep(2000);

  const userProfile: IPropsUserProfile = { email: "test@test.com", nickname: "test", token: "testtoken" };
  return userProfile; // 데이터 값을 바로 반환하도록 처리합니다.
}
