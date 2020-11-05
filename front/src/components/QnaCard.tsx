import React, { FC } from 'react';
import { List, Row, Col, Avatar, Divider } from 'antd';
import styled from 'styled-components';
import { UserOutlined } from '@ant-design/icons';
import { IPropsQNAItem } from '../types/qnaType';

interface QnaCardProps {
    QnaItem : IPropsQNAItem;
}

const QnaCard:FC<QnaCardProps> = ( props ) => {
    const { title, coverImage, content, user} = props.QnaItem;
    return (
        <QnaCardWrapper>
            <Row>
            <Col flex={6}>
            <QnaListLeft>
                <QnaListTitle>{title}</QnaListTitle>
                <QnaListContent>{content}</QnaListContent>
                <div style={{display : "flex"}}>
                    <Avatar size="small" icon={<UserOutlined />} />
                    <p style={{display : "block", marginLeft : 5}}>{user}</p>
                </div>
            </QnaListLeft>
            </Col>
            <Col flex={1}>
                <ImageCover>
                    <img src ={coverImage}/>
                </ImageCover>
            </Col>
            </Row>
        </QnaCardWrapper>
    )
}

const QnaCardWrapper = styled.div`
    border-bottom : 1px solid #eee;
    padding : 20px;
    width : 80%;
    margin : 0 auto;
`

const QnaListTitle = styled.h3`
    font-size : 18px;
    font-weight : 700;
`

const QnaListContent = styled.p`
    color : #555;
`

const QnaListLeft = styled.div`
    padding-top : 10px;
`

const ImageCover = styled.div`
    width : 120px;
    height : 120px;
    float : right;
`

export default QnaCard;