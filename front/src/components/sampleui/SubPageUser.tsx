import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const SubPageUser = () => {
    return (
        <div style={{width : "100%", border : "1px solid blue", margin : "60px 0"}}>
            <div style={{width : "30%"}}>
                <div style={{display : "flex", margin : "5px 0", justifyContent: "center"}}>
                    <Avatar icon={<UserOutlined />} />
                    <p style={{margin: "0 10px", padding : "2px 0", fontSize:"1.2em"}}>더미유저</p>
                </div>
            </div>
        </div>
    )
}

export default SubPageUser;