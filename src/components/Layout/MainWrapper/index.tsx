import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    display: flex;
    width: 100vw;
    justify-content: center;
    align-items: center;
    background-color: #000;
`;

const index = ({children}) => {
    return (
        <StyledWrapper>
            {children}
        </StyledWrapper>
    )
}

export default index
