import React from 'react';
import { Card, Avatar, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { BsBookmark, BsHeart, BsChat } from 'react-icons/bs'

const PhotoCardUI = () => {
    const { Meta } = Card;
    return(
        <Card
            title= {
                <div style={{display : "flex"}}>
                <Avatar icon={<UserOutlined />} />
                <p style={{margin : "3px 0 0 10px"}}>더미유저</p>
                </div>
            }
            style={{ width: 300, margin : "10px 10px" }}
            cover={
            <img
                alt="example"
                src="https://placeimg.com/300/300/any"
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
            description="필요할 시 여기에 description or tag"
            />
        </Card>
    )
}

export default PhotoCardUI;