import React, { FC, useEffect, useState } from "react";
import AppLayout from "./layout/AppLayout";
import { IPropsPhotoItem, IStatePhotoList } from "../types/PhotoType";
import PhotoCardComponent from "../components/PhotoCardComponent";
import { dummyDataPhoto } from "../dummy/dummyPhoto";

export const PhotoMainContainer:FC = () => {
  const [iStatePhotoList, setIStatePhotoList] = useState<IStatePhotoList>();

  useEffect(() => {
    setIStatePhotoList({listItem : dummyDataPhoto});
  }, []);

  return (
    <AppLayout>
      <div>
      {iStatePhotoList && iStatePhotoList.listItem.map((data:IPropsPhotoItem) => {
          return (
              <PhotoCardComponent
                  key={data.id}
                  PhotoItem ={data}
              />
          )
      })}
      </div>
    </AppLayout>
  );
}
