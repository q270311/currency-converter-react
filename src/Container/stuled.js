import styled from "styled-components";

export const Main = styled.main`
    max-width: 1100px;
    padding: 10px;
    margin: 20px;
    background-color: rgba(229, 234, 240, 0.91);
    box-shadow: 5px 5px 24px -10px rgb(31, 32, 44);
    border-radius: 20px;

    @media (max-width: 767px) {    
        width: 100%;
    }
`;