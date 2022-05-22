import { useState, useEffect } from "react";
import styled from "styled-components";
import { useAccount, useContract, useSigner, erc20ABI } from "wagmi";
import { CONTRACT_ADDRESS, DAITOKEN } from "../../constants";

import contractABI from "../../contracts/flash.json";

import { Card, Button } from "../elements";

export const FlashCard = ({ children, className }) => {
  const [inputAmount, setInputAmount] = useState(0);
  const [userBalance, setUserBalance] = useState(0);
  const { data: signerData } = useSigner();
  const { data: accountData } = useAccount();

  const flashContract = useContract({
    addressOrName: CONTRACT_ADDRESS,
    contractInterface: contractABI,
    signerOrProvider: signerData,
  });

  const daiContract = useContract({
    addressOrName: DAITOKEN,
    contractInterface: erc20ABI,
    signerOrProvider: signerData,
  });

  const handleButton = async () => {
    console.log("button clicked");
    const amount = inputAmount * 10 ** 18;
    console.log("amount", amount);

    const tx = await flashContract.createFlashLoan(
      [DAITOKEN],
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

  useEffect(() => {
    const getBalance = async () => {
      const balance = await daiContract.balanceOf(accountData.address);
      setUserBalance(balance.toString());
    };

    if (daiContract.signer && accountData.address) getBalance();
  }, [accountData, daiContract]);

  return (
    <Card className={`${className}`}>
      <Header>swap position</Header>
      <div>
        <InputContainer>
          <Input
            type="number"
            placeholder="0.0"
            onChange={(e) => setInputAmount(e.target.value)}
          />
          <H2>DAI</H2>
        </InputContainer>
        <H2>Balance : {userBalance}</H2>

        <Button onClick={() => handleButton()}>swap</Button>
      </div>
    </Card>
  );
};

const Header = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #444;
  text-align: left;
  margin: 1rem 0;
`;

const H2 = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #444;
  margin: 0rem 1rem;
`;

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

const Input = styled.input`
  border: 0px;
  outline: 0px;

  margin-top: 20px;
  margin-bottom: 20px;

  display: flex;
  flex-direction: column;
  padding: 10px 100px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #444;
`;
