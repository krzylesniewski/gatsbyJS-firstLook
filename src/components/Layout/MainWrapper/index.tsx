import React from 'react';
import styled from 'styled-components';
import { variables } from '../../../utils/variables';

const StyledWrapper = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: ${variables.colorPrimary};
`;

const index = ({children}) => {
    return (
        <StyledWrapper>
            {children}
        </StyledWrapper>
    )
}

export default index
