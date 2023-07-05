import styled from 'styled-components';

export const Button = styled.button`
    border: none;
    width: 3rem;
    height: 3rem;
    border-radius: 1.5rem;
    font-size: 2rem;
    font-weight: bold;
    background-color: ${({color}) => color};
    color: #fff;
    cursor: pointer;
    &:hover{
        opacity: 0.8;
    }
`