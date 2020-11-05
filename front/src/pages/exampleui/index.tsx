import React from 'react';
import PhotoCardUI from '../../components/PhotoCardUI';
import BlogCardUI from '../../components/BlogCardUI';
import AppLayout from '../../containers/layout/AppLayout'

const example = () => {
    return (
        <AppLayout>
            <div style={{display : "flex"}}>
                <PhotoCardUI/>
                <PhotoCardUI/>
                <PhotoCardUI/>
                <PhotoCardUI/>
            </div>
            <div style={{display : "flex"}}>
                <BlogCardUI/>
                <BlogCardUI/>
                <BlogCardUI/>
            </div>
        </AppLayout>
    )
}

export default example;