import styled, { css } from "styled-components";

export const Shape = styled.form`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 20px;
    overflow-x: auto;

    @media (max-width: 767px) {    
        display: flex;
        flex-direction: column;
        flex-basis: 100%;
        align-items: center;
        justify-content: center;
    }
`;
export const Label = styled.label`
    display: flex;
    flex-direction: column;
    padding: 20px;
    overflow-x: auto;

    @media (max-width: 767px) {
        align-items: center;
        width: 95%; 
    };    
`;

export const Select = styled.select`
    color: #3c3d3f;
    width: 200px;
    border-radius: 10px;
    height: 35px;
    margin: 10px 0px;

    @media (max-width: 767px) {
        color: #3c3d3f;
        width: 95%;
        margin-left: 20px; 
    };    
`;
export const Input = styled.input`
    color: #3c3d3f;
    width: 200px;
    border-radius: 10px;
    height: 35px;
    margin: 10px 0px;

    @media (max-width: 767px) {
        color: #3c3d3f;
        width: 95%;
        margin-left: 20px; 
    }; 

    ${({ type }) => type === "submit" && css`
        background-color: #3434ec;
        margin-top: 50px;
        width: 100px;
        color: white;
        font-weight: 700;
        cursor: pointer; 
        
        &:hover{
            background-color: #8585f3;
            margin-top: 50px;
            color: white;
            font-weight: 700;
            cursor: pointer;
        };
    `};    
`;
const Span = ({ className }) => (
    <span className={`material-symbols-outlined ${className}`}>sync_alt</span>
);

export const CurrencyChangeSpan = styled(Span)`
    color: #3c3d3f;
    width: 200px;
    height: 35px;
    border: 3px solid #3434ec;
    border-radius: 10px;    
    margin: 50px 0px 10px 0px;
    padding-top: 5px;
    cursor: pointer;
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;
    text-align: center;
    vertical-align: middle;    

    @media (max-width: 767px) {
        width: 95%;
    }; 
    
    &:hover{
        background-color: #8585f3;
    };
`;

export const P = styled.p`
    font-size: 50px;
    text-align: center;
`;