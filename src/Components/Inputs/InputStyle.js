import styled from "styled-components";

export const Form = styled.form`
    display:flex ;
    justify-content:space-around;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
    width: 250px;
    height: 200px;
    border-radius: 50%;
    background-color: #fff3;
    padding: 40px;
    border: 1px solid #64644824;

` 
export const Input = styled.input`
    border: none;
    padding: 10px 15px;
    border-radius: 20px;
    flex-basis: 40%;
    text-align: center;
    text-transform: capitalize;
    outline: none;
    background-color: #ffffff40;
    border: 1px solid #64644824;
    font-weight: 600;
   color: #c54d4d;
`
export const Submit = styled.input`
    border: none;
    padding: 10px 15px;
    border-radius: 20px;
    flex-basis: 25%;
    cursor: pointer;
    color: #54549dd1;
    background-color: #ffffff40;
    font-weight: 600;
    border: 1px solid #64644824;
    &:hover{
        border:1px solid #ad626294;
        color: #6e9334;
    }

`