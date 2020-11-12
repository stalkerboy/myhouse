import React, { FC } from 'react';
import { IPropsBlogItem } from "../types/BlogType";
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { BsBookmark } from 'react-icons/bs'

interface BlogCardProps {
    BlogItem : IPropsBlogItem;
}

const BlogCardComponent:FC<BlogCardProps> = ( props ) => {
    const { title, coverImage, user } = props.BlogItem;
    return (
        <div style={{width : 400, margin : "10px 10px", cursor : "pointer", float : "left", border : "1px solid #eeeeee"}}>
            <div style={{overflow : "hidden", width : 400, height : 200, position : "relative"}}>
                <div style={{position : "absolute", bottom : "0px", right : "10px"}}>
                    <BsBookmark size="30" style={{color : "white"}}/>
                </div>
                <img src={coverImage}/>
            </div>
            <div>
                <p style={{fontSize : "1.4em", fontWeight : 700, textAlign : "center", margin : "10px 0 0"}}>{title}</p>
                <div style={{display : "flex", margin : "5px auto", justifyContent: "center"}}>
                    <Avatar icon={<UserOutlined />} size="small"/>
                    <p style={{margin: "0 5px", padding : "2px 0"}}>{user}</p>
                </div>
            </div>
        </div>
    )
}

export default BlogCardComponent;