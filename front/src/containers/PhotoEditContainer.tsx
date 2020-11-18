import { Button, Card, Divider, Input, Tooltip } from "antd";
import React, { FC, useState } from "react";
import FabricCanvas from "../components/fabric/Canvas";
import { FabricContextProvider } from "../components/fabric/FabricContext";
import FabricLine from "../components/fabric/FabricLine";
import AppLayout from "./layout/AppLayout";
import { SearchOutlined, FileImageOutlined } from "@ant-design/icons";

interface Tag {
  left: number;
  top: number;
  descripte: string;
}

interface EditArea {
  type: string;
  context?: string;
  tags?: Tag[];
}

export const PhotoEditContainer: FC = () => {
  const [editAreaList, setEditAreaList] = useState<EditArea[]>([{ type: "text" }]);
  const onClickAddEditArea = (type: string) => {
    if (type == "text") setEditAreaList([...editAreaList, { type: "text" }]);
    else setEditAreaList([...editAreaList, { type: "canvas" }]);
  };
  return (
    <AppLayout>
      <Card title="Photo Edit" extra={<a href="#">등록</a>}>
        <Input placeholder="제목을 입력하세요" />
        <Divider />
        <div style={{ display: "flex", padding: 10, margin: 5, backgroundColor: "lightblue" }}>
          <Tooltip title="search">
            <Button type="primary" style={{ marginRight: 10 }} shape="circle" icon={<FileImageOutlined />} onClick={() => onClickAddEditArea("canvas")} />
            <Button type="primary" style={{ marginRight: 10 }} shape="circle" onClick={() => onClickAddEditArea("text")}>
              글
            </Button>
            <Button type="primary" style={{ marginRight: 10 }} shape="circle" icon={<SearchOutlined />} />
          </Tooltip>
        </div>
        {editAreaList.map((area: EditArea) => {
          if (area.type == "text") {
            return <Input></Input>;
          } else {
            return <PhotoEditArea />;
          }
        })}
      </Card>
    </AppLayout>
  );
};

const PhotoEditArea: FC = () => {
  return (
    <div>
      <FabricContextProvider>
        <FabricCanvas />
        <FabricLine />
      </FabricContextProvider>
    </div>
  );
};
