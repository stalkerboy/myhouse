import React, { FC, useEffect, useState } from "react";
import AppLayout from "./layout/AppLayout";
import { IPropsBlogItem, IStateBlogList } from "../types/BlogType";
import BlogCardComponent from "../components/BlogCardComponents";
import { dummyDataBlog } from "../dummy/dummyBlog";

export const BlogMainContainer:FC = () => {
  const [iStateBlogList, setIStateBlogList] = useState<IStateBlogList>();

  useEffect(() => {
    setIStateBlogList({listItem : dummyDataBlog});
  }, []);

  return (
    <AppLayout>
      <div>
      {iStateBlogList && iStateBlogList.listItem.map((data:IPropsBlogItem) => {
          return (
              <BlogCardComponent
                  key={data.id}
                  BlogItem ={data}
              />
          )
      })}
      </div>
    </AppLayout>
  );
};
