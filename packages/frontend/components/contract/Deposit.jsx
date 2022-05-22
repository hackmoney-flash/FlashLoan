import { useState } from "react";
import styled from "styled-components";
import { Card, Button, Input, Balance, CardHeader, Loading } from "../elements";
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

export const Deposit = () => {
  const { data: signerData } = useSigner();
  const [submitting, setSubmitting] = useState(false);
  const [inputAmount, setInputAmount] = useState(0);

  const flashContract = useContract({
    addressOrName: CONTRACT_ADDRESS,
    contractInterface: contractABI,
    signerOrProvider: signerData,
  });

  // console.log("flashContract", flashContract);

  const handleButton = async () => {
    setSubmitting(true);
    // console.log("inputAmount", inputAmount);
    const amount = inputAmount * SIXZERO;
    try {
      const tx = await flashContract.depositCollateral(
        USDCTOKEN,
        amount.toString(),
        {
          gasLimit: "1000000",
        }
      );
      tx.wait(1).then((res) => {
        setInputAmount(0);
        setSubmitting(false);
      });
    } catch (e) {
      setSubmitting(false);
    }
  };
  const handleOnChange = (e) => {
    // console.log("handleOnChange", e.target.value);
    setInputAmount(e.target.value);
  };

  if (submitting)
    return (
      <Card>
        <CardHeader>deposit</CardHeader>
        <Loading />
        {/* <Button onClick={() => handleButton()}>deposit</Button> */}
        <Balance />
      </Card>
    );

  return (
    <Card>
      <CardHeader>deposit</CardHeader>
      <InputContainer>
        <Input
          type="number"
          placeholder="0.0"
          onChange={(e) => handleOnChange(e)}
        />
        <TokenSelect />
      </InputContainer>

      <Button onClick={() => handleButton()}>deposit</Button>
      <Balance />
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
