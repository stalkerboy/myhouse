import React, { FC } from 'react';
import { Row, Col, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { IPropsQNAItem } from '../types/qnaType';

interface QnaCardProps {
    QnaItem : IPropsQNAItem;
}

const QnaCard:FC<QnaCardProps> = ( props ) => {
    const { title, coverImage, content, user} = props.QnaItem;
    return (
        <div style={{border : "1px solid black", padding : 20}}>
            <Row>
            <Col flex={6}>
            <div style={{border  : "1px solid green"}}>
                <h3>{title}</h3>
                <p>{content}</p>
                <div>
                    <Avatar size="small" icon={<UserOutlined />} style={{float : "left", display : "block"}} />
                    <p style={{float : "left", display : "block"}}>{user}</p>
                </div>
            </div>
            </Col>
            <Col flex={1} style={{border : "1px solid blue"}}>
                <div style={{width : 200, height : 200, float : "right"}}>
                    <img src ={coverImage}/>
                </div>
            </Col>
            </Row>
        </div>
    )
}

export default QnaCard;