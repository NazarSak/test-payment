import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  padding: 21px 138px;
  font-size: 20px;
  margin-top: 40px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Input = styled.input`
  box-sizing: border-box;
  color: lightblue;
  width: 350px;
  padding: 12px 12px 12px 40px;
  background: transparent;
  border-radius: 6px;
  border: 1px solid gray;
  outline: none;
  font-size: 14px;
  letter-spacing: -0.36px;
  margin-top: 20px;
  transition: border-color 0.3s ease-in-out;

  &:focus,
  &:hover {
    border: 1px solid gold;
  }
`;


