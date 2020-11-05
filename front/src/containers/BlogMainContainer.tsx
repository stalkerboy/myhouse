import React, { useEffect, useState } from "react";
import AppLayout from "./layout/AppLayout";
import PhotoCardList from "../components/PhotoCardListComponent";
import { PhotoProps } from "react-photo-gallery";
import { sleep } from "../lib/sleep";
import { photos } from "../dummy/photos";

interface BlogMainContainerProps {}

export const BlogMainContainer: React.FC<BlogMainContainerProps> = ({}) => {
  const [blogList, setBlogList] = useState<Array<PhotoProps> | null>(null);
  useEffect(() => {
    sleep(1000);
    setBlogList(photos);
  }, []);

  return (
    <AppLayout>
      <PhotoCardList type="blog" photos={blogList} />
    </AppLayout>
  );
};
