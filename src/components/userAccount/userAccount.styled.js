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
   position: fixed;  
   background-repeat: no-repeat; 
  background-size: cover;
  background-position: center;
  background-image: url("https://fintech.com.br/app/uploads/2023/07/closeup-de-bitcoins-dourados-em-uma-superficie-reflexiva-escura-e-o-histograma-de-criptografia-decrescente-scaled.jpg"); 
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`


export const Main = styled.main`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat; 
  background-size: cover;
  background-position: center;
  background-image: url("https://static.vecteezy.com/system/resources/previews/010/502/841/non_2x/light-and-dark-background-bitcoin-crypto-currency-illustration-for-page-logo-card-banner-web-and-printing-free-vector.jpg"); 
  position: absolute;
`

export const WalletTitle = styled.h2`
  font-size: 30px;
  color: gold;
  margin-bottom: 35px;
`;

export const ConnectButton = styled.button`
  padding: 15px 45px;
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
  color: peru;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const Line = styled.div`
  height: 5px;
  width: 100%;
  background-color: gray; 
  margin-bottom: 100px;
`;