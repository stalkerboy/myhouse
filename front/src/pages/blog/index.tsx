import React, { useEffect } from "react";
import PhotoCardList from "../../containers/PhotoCardList";
import AppLayout from "../../containers/layout/AppLayout";
import { getBlogListAsync } from "../../redux/blog";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux";

interface BlogProps {}

const Blog: React.FC<BlogProps> = ({}) => {
  const dispatch = useDispatch(); // 디스패치 함수를 가져옵니다
  useEffect(() => {
    dispatch(getBlogListAsync.request(0));
  }, []);
  const { data } = useSelector((state: RootState) => state.blog.blogList);
  return (
    <AppLayout>
      <PhotoCardList type="blog" photos={data} />
    </AppLayout>
  );
};
export default Blog;
