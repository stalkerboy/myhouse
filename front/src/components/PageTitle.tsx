import React, { FC } from 'react';
import styled from 'styled-components';

const PageTitleStyle = styled.h2`
    font-size : 2em;
    font-weight : 700;
    margin : 40px 0;
`

type PropTypes = {
    title : string;
};

const PageTitle: FC<PropTypes> = props => {
    const { title } = props;
    return (
        <div>
            <PageTitleStyle>{title}</PageTitleStyle>
        </div>
    )
}

export default PageTitle;