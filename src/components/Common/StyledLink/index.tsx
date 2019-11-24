import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

interface Props {
    to: string;
    text: string
}

const StyledLink = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
text-decoration: none;
color: #000;
background-color: #fff;
padding: 10px 20px;
margin: 10px 20px;
border-radius: 20px;
`;

const index = (props:Props) => {
    return (
        <>
            <StyledLink to={props.to}>{props.text}</StyledLink>
        </>
    )
}

export default index;