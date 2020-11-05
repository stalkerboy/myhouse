import React from 'react';
import SubPageContent from '../components/sampleui/SubPageContent';
import SubPageComment from '../components/sampleui/SubPageComment';
import SubPageUser from '../components/sampleui/SubPageUser';

const Subpageex = () => {
    return (
        <div style={{display : "flex"}}>
            <div style={{flex : 2}}>
                <SubPageContent/>
                <SubPageComment/>
            </div>
            <div style={{flex : 1}}>
                <SubPageUser/>
            </div>
        </div>
    )
}

export default Subpageex;