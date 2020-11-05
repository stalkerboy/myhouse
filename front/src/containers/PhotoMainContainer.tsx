import React, { useEffect, useState } from "react";
import AppLayout from "./layout/AppLayout";
import PhotoCardList from "../components/PhotoCardListComponent";
import { photos } from "../dummy/photos";
import { sleep } from "../lib/sleep";
import { PhotoProps } from "react-photo-gallery";

export function PhotoMainContainer() {
  const [photoList, setPhotoList] = useState<Array<PhotoProps> | null>(null);

  useEffect(() => {
    sleep(1000);
    setPhotoList(photos);
  }, []);

  useEffect(() => {}, []);

  return (
    <AppLayout>
      <PhotoCardList photos={photoList} />
    </AppLayout>
  );
}
