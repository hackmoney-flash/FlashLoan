import { useState } from "react";
import styled from "styled-components";
import { Card, Button, Input, Balance, CardHeader } from "../elements";
import { TokenSelect } from "../TokenSelect";

import { useContract, useSigner } from "wagmi";
import {
  CONTRACT_ADDRESS,
  DAITOKEN,
  EIGHTEENZERO,
  USDCTOKEN,
  SIXZERO,
} from "../../constants";

import contractABI from "../../contracts/flash.json";

export const Withdrawl = () => {
  const { data: signerData } = useSigner();

  const [inputAmount, setInputAmount] = useState(0);

  const flashContract = useContract({
    addressOrName: CONTRACT_ADDRESS,
    contractInterface: contractABI,
    signerOrProvider: signerData,
  });

  // console.log("flashContract", flashContract);

  const handleButton = async () => {
    console.log("inputAmount", inputAmount);
    const amount = inputAmount * SIXZERO;
    // console.log("amount", amount);

    const tx = await flashContract.withdrawCollateral(
      DAITOKEN,
      amount.toString(),
      {
        gasLimit: "1000000",
      }
    );
    tx.wait(1).then((res) => {
      console.log("res", res);
      setInputAmount(0);
    });
  };

  const handleOnChange = (e) => {
    // console.log("handleOnChange", e.target.value);
    setInputAmount(e.target.value);
  };
  return (
    <Card>
      <CardHeader>Withdrawl</CardHeader>
      <InputContainer>
        <Input
          type="number"
          placeholder="0.0"
          onChange={(e) => handleOnChange(e)}
        />
        <TokenSelect />
      </InputContainer>

      <Button onClick={() => handleButton()}>withdrawl</Button>
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
