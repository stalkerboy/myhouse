import React, { FC } from 'react';
import { IPropsPhotoItem } from '../types/PhotoType';
import { Card, Avatar, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { BsBookmark, BsHeart, BsChat } from 'react-icons/bs'

interface PhotoCardProps {
  PhotoItem : IPropsPhotoItem;
}

const PhotoCardComponent:FC<PhotoCardProps> = ( props ) => {
    const { content, coverImage, user } = props.PhotoItem;
    const { Meta } = Card;
    return(
        <Card
            title= {
                <div style={{display : "flex"}}>
                <Avatar icon={<UserOutlined />} />
                <p style={{margin : "3px 0 0 10px"}}>{user}</p>
                </div>
            }
            style={{ width: "300px", margin : "10px 8px", float : "left" }}
            cover={
            <img
                alt="example"
                src= {coverImage}
                style={{ height : 280 }}
            />
            }
            extra = {
                <Button shape="round" style={{marginTop : "3px"}}>팔로우</Button>
            }
            actions={[
            <BsHeart size="20" key="heart"/>,
            <BsBookmark size="20" key="edit"/>,
            <BsChat size="20" key="comment" />,
            ]}
            hoverable
        >
            <Meta
            description= {content}
            />
        </Card>
    )
}

export default PhotoCardComponent;