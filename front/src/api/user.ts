import Axios from "axios";

export async function getUser(email: string, password: string) {
  // Generic 을 통해 응답 데이터의 타입을 설정 할 수 있습니다.
  const response = await Axios.post<UserProfile>(`${process.env.NEXT_PUBLIC_API_URL}/user/login`, { email, password });
  console.log(response.data);
  return response.data; // 데이터 값을 바로 반환하도록 처리합니다.
}

export interface UserProfile {
  email: string;
  name: string;
}
