import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { IPropsQNAItem, IStateQNAList } from '../types/qnaType';
import QnaCard from '../components/QnaCard';
import AppLayout from '../containers/layout/AppLayout';
import { Button } from 'antd';

import { dummyDataQNA } from "../containers/dummyqnas";


export const QnaListPageContainer:FC = () => {
    const [iStateQNAList, setIStateQNAList] = useState<IStateQNAList>();

    useEffect(()=>{
        setIStateQNAList({listItem:dummyDataQNA}) ;
    },[]);
    
    return (
        <AppLayout>
            <TitleWrapper>
            <QnaTitle>질문과 답변</QnaTitle>
            <QnaTitleExplain>질문과 답변 페이지에 대한 간단한 설명</QnaTitleExplain>
            <Button type="primary" style={{margin : "20px 0 0 0", width : 150, height : 45, fontSize : "18px", fontWeight : 600, float : "right"}}>질문하기</Button>
            </TitleWrapper>
            {iStateQNAList && iStateQNAList.listItem.map((data:IPropsQNAItem) => {
                return (
                    <QnaCard
                        key={data.id}
                        QnaItem ={data}
                    />
                )
            })}
        </AppLayout>
    )
}

const TitleWrapper = styled.div`
    margin : 0 auto;
    padding : 50px 0 75px;
    border-bottom : 3px solid #eee;
    width : 80%;
`

const QnaTitle = styled.h2`
    text-align : center;
    font-size : 2em;
    font-weight : 700;
    margin : 0;
`

const QnaTitleExplain = styled.p`
    text-align : center;
    color : #333;
    margin : 5px 0 0 0;
`
