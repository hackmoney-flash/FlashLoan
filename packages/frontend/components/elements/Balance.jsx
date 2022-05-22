import { useState, useEffect } from "react";
import styled from "styled-components";
import { useAccount, useContract, useSigner, erc20ABI } from "wagmi";
import { DAITOKEN, EIGHTEENZERO, USDCTOKEN, SIXZERO } from "../../constants";

export const Balance = ({}) => {
  const { data: signerData } = useSigner();
  const { data: accountData } = useAccount();

  const [userBalance, setUserBalance] = useState(0);

  const daiContract = useContract({
    addressOrName: USDCTOKEN,
    contractInterface: erc20ABI,
    signerOrProvider: signerData,
  });

  useEffect(() => {
    const getBalance = async () => {
      const balance = await daiContract.balanceOf(accountData.address);
      setUserBalance(balance.toString() / SIXZERO);
    };

    if (daiContract.signer && accountData.address) getBalance();
  }, [accountData, daiContract]);

  return (
    <Container>
      <H3>balance : {userBalance} USDC</H3>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const H3 = styled.h3`
  font-weight: bold;
  color: #444;

  margin: 1rem auto;

  font-size: 1rem;
  @media only screen and (min-width: 640px) {
    font-size: 1.25rem;
  }
  @media only screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
`;
