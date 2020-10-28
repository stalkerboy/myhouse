import React from "react";
import Gallery, { PhotoProps } from "react-photo-gallery";
import PhotoCard from "../components/PhotoCard";
// import { photos } from "./photos";
React.useLayoutEffect = React.useEffect;
interface PhotoCardListProps {
  type?: string;
  photos: Array<PhotoProps> | null;
}

const PhotoCardList: React.FC<PhotoCardListProps> = ({ type, photos }) => {
  const imageRenderer = ({ index, left, top, key, photo }: any) => <PhotoCard key={key} margin={"10px"} index={index} photo={photo} left={left} top={top} type={type} />;
  // const imageRenderer = useCallback(({ index, left, top, key, photo }: any) => <PhotoCard key={key} margin={"10px"} index={index} photo={photo} left={left} top={top} type={type} />, [false]);
  const cardStyle = type == "blog" ? { direction: "column", columns: 1 } : {};

  return <div>{photos && <Gallery photos={photos} renderImage={imageRenderer} {...cardStyle} />}</div>;
};
export default PhotoCardList;
