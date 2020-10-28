import React, { useEffect } from "react";
import AppLayout from "../../containers/layout/AppLayout";
import PhotoCardList from "../../containers/PhotoCardList";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux";
import { getPhotoListAsync } from "../../redux/photo";

interface PhotoProps {}

const Photo: React.FC<PhotoProps> = ({}) => {
  const dispatch = useDispatch(); // 디스패치 함수를 가져옵니다
  useEffect(() => {
    dispatch(getPhotoListAsync.request(0));
  }, []);
  const { data } = useSelector((state: RootState) => state.photo.photoList);
  return (
    <AppLayout>
      <PhotoCardList photos={data} />
    </AppLayout>
  );
  // return (
  //   <AppLayout>
  //     <div></div>
  //     {loading && console.log(data)}
  //   </AppLayout>
  // );
};
export default Photo;
