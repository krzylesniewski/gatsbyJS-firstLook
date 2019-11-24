import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    display: flex;
    width: 80%;
`;

const index = ({children}) => {
    return (
        <StyledWrapper>
            {children}
        </StyledWrapper>
    )
}

export default index
