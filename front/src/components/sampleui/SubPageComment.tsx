import React from 'react';
import styled from 'styled-components';
import { Input, Button, List, Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons';

const data = [
    {
      title: '더미유저1',
    },
    {
      title: '더미유저2',
    }
];

const SubPageContent = () => {
    return(
        <SubCommentWrapper>
            <div style={{margin : "20px 0", fontSize : "1.3em", fontWeight : 700}}>
                댓글 n개
            </div>
            <SubCommentInput>
                <Input placeholder="댓글을 작성해주세요" style={{width : "500px"}}/>
                <Button type="primary" style={{marginLeft : "10px"}}>등록</Button>
            </SubCommentInput>
            <SubComment>
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                        avatar={<Avatar icon={<UserOutlined />}/>}
                        title={item.title}
                        description="댓글 내용 들어갈 자리"
                        />
                    </List.Item>
                    )}
                />
            </SubComment>
        </SubCommentWrapper>
    )
}

const SubCommentWrapper = styled.div`
    margin-top : 40px;
    margin-left : 5%;
`

const SubCommentInput = styled.div`
    display : flex;
`

const SubComment = styled.div`
    margin-top : 40px;
    margin-bottom : 100px;
`

export default SubPageContent;