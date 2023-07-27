import TxList from 'components/Decorators/TxList';
import { Wrapper, Button, Input} from './PaymentForm.styled';
import { WalletTitle } from 'components/userAccount/userAccount.styled';

const PaymentForm = ({ handleSubmit, txs }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Wrapper>
          <WalletTitle>Send ETH payment</WalletTitle>

          <div>
            <Input type="text" name="addr" placeholder="Recipient Address" />
          </div>
          <div className="my-3">
            <Input name="ether" type="text" placeholder="Amount in ETH" />
          </div>

          <Button type="submit">Pay now</Button>
          <TxList txs={txs} />
        </Wrapper>
      </form>
    </>
  );
};

export default PaymentForm;
