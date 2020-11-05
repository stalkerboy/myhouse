import React from 'react';
import styled from 'styled-components';

const SubPageContent = () => {
    return(
        <SubPageWrapper>
            <SubPageTitleWrapper>
                <SubPageTitle>서브 타이틀 들어갈 자리</SubPageTitle>
            </SubPageTitleWrapper>
            <SubPageContentWrapper>
                {/* 작성된 포스트 내용이 여기 들어가면 될 것 같습니다 밑에는 예시*/}
                <img src="https://placeimg.com/600/600/any"/>
                <p>안에 작성할 내용</p>
                {/* 스크롤용도 */}
                <img src="https://placeimg.com/600/600/any"/>
                <SubInfo>시간, 조회수 등</SubInfo>
            </SubPageContentWrapper>
        </SubPageWrapper>
    )
}

const SubPageWrapper = styled.div`
    margin-top : 40px;
    margin-left : 5%;
`

const SubPageTitleWrapper = styled.div`
    margin : 10px 0;
`

const SubPageTitle = styled.h3`
    font-size : 1.6em;
    font-weight : 700;
`

const SubPageContentWrapper = styled.div`
    margin : 40px 0;

    & > p {
        margin : 20px 0;
    }
`

const SubInfo = styled.div`
    color : #777;
    margin : 60px 0;
`

export default SubPageContent;