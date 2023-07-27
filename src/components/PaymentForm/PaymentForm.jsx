import TxList from 'components/Decorators/TxList';
import { Wrapper, Button, Input } from './PaymentForm.styled';
import { WalletTitle } from 'components/userAccount/userAccount.styled';

const PaymentForm = ({ handleSubmit, txs }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Wrapper>
          <WalletTitle>Send ETH payment</WalletTitle>

          <Input type="text" name="addr" placeholder="Recipient Address" />

          <Input name="ether" type="text" placeholder="Amount in ETH" />

          <Button type="submit">Pay now</Button>
          <TxList txs={txs} />
        </Wrapper>
      </form>
    </>
  );
};

export default PaymentForm;
