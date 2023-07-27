import { useState } from 'react';
import { ethers } from 'ethers';
import PaymentForm from 'components/PaymentForm/PaymentForm';

import {
  WalletContainer,
  WalletTitle,
  ConnectButton,
  InfoTitle,
} from './userAccount.styled';

const startPayment = async ({ setError, setTxs, ether, addr }) => {
  try {
    if (!window.ethereum)
      throw new Error('No crypto wallet found. Please install it.');

    await window.ethereum.send('eth_requestAccounts');
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    ethers.utils.getAddress(addr);
    const tx = await signer.sendTransaction({
      to: addr,
      value: ethers.utils.parseEther(ether),
    });
    console.log({ ether, addr });
    console.log('tx', tx);
    setTxs([tx]);
  } catch (err) {
    setError(err.message);
  }
};

const UserAccount = () => {
  const [userAccount, setUserAccount] = useState('');
  const [balance, setBalance] = useState(0);
  const [error, setError] = useState();
  const [txs, setTxs] = useState([]);

  const handleSubmit = async e => {
    e.preventDefault();
    const data = new FormData(e.target);
    setError();
    await startPayment({
      setError,
      setTxs,
      ether: data.get('ether'),
      addr: data.get('addr'),
    });
  };

  const Conection = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then(account => {
          setUserAccount(account[0]);
          getBalance(account[0]);
        });
      window.ethereum.on('accountChanged', Conection);
      window.ethereum.on('chainChanged', ChangedAccount);
    } else {
      alert('Please');
    }
  };

  const getBalance = account => {
    window.ethereum
      .request({
        method: 'eth_getBalance',
        params: [account, 'latest'],
      })
      .then(balance => {
        setBalance(ethers.utils.formatEther(balance));
      });
  };

  const ChangedAccount = () => {
    window.location.reload();
  };

  return (
    <>
      {userAccount && balance ? (
        <main>
          <WalletContainer>
            <InfoTitle>Your Account: {userAccount}</InfoTitle>
            <InfoTitle>Your balance: {balance} ETH</InfoTitle>
          </WalletContainer>

          <PaymentForm handleSubmit={handleSubmit} txs={txs} error={error} />
        </main>
      ) : (
        <WalletContainer>
          <WalletTitle>Connect your wallet</WalletTitle>
          <ConnectButton onClick={Conection}>Connect wallet</ConnectButton>
        </WalletContainer>
      )}
    </>
  );
};

export default UserAccount;
