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

import { Card, Button, Balance, Input, CardHeader } from "../elements";
import { TokenSelect } from "../TokenSelect";

export const FlashCard = ({ children, className }) => {
  const [inputAmount, setInputAmount] = useState(0);
  const { data: signerData } = useSigner();

  const flashContract = useContract({
    addressOrName: CONTRACT_ADDRESS,
    contractInterface: contractABI,
    signerOrProvider: signerData,
  });

  const handleButton = async () => {
    // console.log("button clicked");
    const amount = inputAmount * SIXZERO;
    // console.log("amount", amount);

    const tx = await flashContract.createFlashLoan(
      [USDCTOKEN],
      [amount.toString()],
      {
        gasLimit: "1000000",
      }
    ); // Borrow 1000 DAI in a Flash Loan with no upfront collateral
    tx.wait(1).then((res) => {
      console.log("res", res);
      setInputAmount(0);
    });
  };

  return (
    <Card className={`${className}`}>
      <CardHeader>swap position</CardHeader>
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
    </Card>
  );
};

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  background-color: #fff;
  border-color: #e6e6e6;
  border-radius: 20px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 3px 0 rgba(0, 0, 0, 0.06);
  &:hover {
    background-color: #f5f5f5;
    border-color: #d6d6d6;
  }
`;
