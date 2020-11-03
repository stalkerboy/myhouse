import { Card } from "antd";
import React from "react";

interface PhotoCardProps {
  title?: string;
  photo?: any;
  margin?: string;
  direction?: string;
  top?: string;
  left?: string;
  index?: string;
  type?: string;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ title, photo, margin, direction, top, left, type, children }) => {
  //calculate x,y scale

  return (
    <div>
      <Card title={photo.title} cover={<img src={photo.src} style={{ height: photo.height, width: photo.width }} />} style={{ margin, display: "flow" }}>
        {children}
      </Card>
    </div>
  );
};
export default PhotoCard;
