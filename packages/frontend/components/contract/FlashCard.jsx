import { useState } from "react";
import styled from "styled-components";
import { useContract, useSigner } from "wagmi";
import {
  CONTRACT_ADDRESS,
  DAITOKEN,
  EIGHTEENZERO,
  USDCTOKEN,
  SIXZERO,
} from "../../constants";

import contractABI from "../../contracts/flash.json";

import { Card, Button, Balance, Input, CardHeader, Loading } from "../elements";
import { TokenSelect } from "../TokenSelect";

export const FlashCard = ({ children, className }) => {
  const [inputAmount, setInputAmount] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [transactionComplete, setTransactionComplete] = useState("");

  const { data: signerData } = useSigner();

  const flashContract = useContract({
    addressOrName: CONTRACT_ADDRESS,
    contractInterface: contractABI,
    signerOrProvider: signerData,
  });

  const handleButton = async () => {
    setSubmitting(true);
    setTransactionComplete("");
    const amount = inputAmount * SIXZERO;
    // console.log("amount", amount);
    try {
      const tx = await flashContract.createFlashLoan(
        [USDCTOKEN],
        [amount.toString()],
        {
          gasLimit: "1000000",
        }
      );
      tx.wait(1).then(() => {
        setInputAmount(0);
        setTransactionComplete("Swap Completed");
        setSubmitting(false);
      });
    } catch (e) {
      setTransactionComplete("Swap Failed");
      setSubmitting(false);
    }
  };

  if (submitting)
    return (
      <Card>
        {/* <CardHeader>swap position</CardHeader> */}
        <Loading />

        {/* <Button onClick={() => handleButton()}>swap</Button> */}
        <Balance />
      </Card>
    );

  return (
    <Card>
      {/* <CardHeader>swap position</CardHeader> */}
      <InputContainer>
        <Input
          type="number"
          placeholder="0.0"
          onChange={(e) => setInputAmount(e.target.value)}
        />
        <TokenSelect />
      </InputContainer>

      <Button onClick={() => handleButton()}>swap</Button>
      <Balance />
      <Completed>{transactionComplete}</Completed>
    </Card>
  );
};

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  background-color: #fff;
  border-color: #e6e6e6;
  border-radius: 20px;
  box-shadow: 0 0.5rem 0.5rem 0 rgba(93, 95, 239, 0.1),
    0 2rem 2rem 0 rgba(93, 95, 239, 0.06);
  &:hover {
    background-color: rgba(93, 95, 239, 0.05);
    border-color: rgba(93, 95, 239, 0.2);
  }
`;

const Completed = styled.div`
  color: rgba(93, 95, 239);
  font-weight: bold;
  font-size: 1.2rem;
  text-align: center;
`;
