import { styled } from 'styled-components';

export const WalletContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
`;

export const WalletTitle = styled.h2`
  font-size: 30px;
  color: #333;
  margin-bottom: 35px;
`;

export const ConnectButton = styled.button`
  padding: 12px 24px;
  font-size: 16px;
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


 export const InfoTitle = styled.span`
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
  font-weight: bold;
`;