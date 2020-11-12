import React, { useState, useCallback } from "react";
import { Input, Button } from "antd";

const QnaEditorFormComponents = () => {

    const [title, setTitle] = useState('');
    const content = "";

    const onChangeTitle = (e : React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const onChangeContent = useCallback((e : any) => {
        const inputValue: string = e.target.innerText;
        window.localStorage.setItem('content', inputValue);
        //setContent(e.target.innerText);
    }, []);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(title);
        console.log(window.localStorage.getItem('content'));
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2 style={{fontSize : "2.5em", fontWeight : 700}}>Q & A</h2>
            <Input size="large" placeholder = "제목을 적어주세요" style={{marginBottom : "20px"}} value={title} onChange={onChangeTitle}/>
            <div style={{position : "relative"}}>
                {/* <Button type="primary" icon={<DownloadOutlined />} size={size} /> */}
                <div style={{padding : "20px", width : "100%", height : "500px", border : "1px solid #cccccc", outline : "none"}} contentEditable={true} onInput={onChangeContent} suppressContentEditableWarning={true}>{content}</div>
                </div>
            <Button type="primary" style={{width : "250px", height : "70px", margin : "30px auto 0", fontSize : "1.5em", fontWeight : 700, display : "block"}}  htmlType="submit">질문하기</Button>
        </form>
    )
}

export default QnaEditorFormComponents;