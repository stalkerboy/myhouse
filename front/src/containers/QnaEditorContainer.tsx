import React from "react";
import AppLayout from "./layout/AppLayout";
import QnaEditorFormComponents from "../components/QnaEditorFormComponents"

const QnaEditContainer = () => {
    return (
        <AppLayout>
            <div style ={{width : "60%", margin : "0 auto", padding : "40px 0"}}>
                <QnaEditorFormComponents/>
            </div>
        </AppLayout>
    )
}

export default QnaEditContainer;