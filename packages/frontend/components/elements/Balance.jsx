import { useState, useEffect } from "react";
import styled from "styled-components";
import { useAccount, useContract, useSigner, erc20ABI } from "wagmi";
import { DAITOKEN, EIGHTEENZERO, USDCTOKEN, SIXZERO } from "../../constants";

export const Balance = ({}) => {
  const { data: signerData } = useSigner();
  const { data: accountData } = useAccount();

  const [userBalance, setUserBalance] = useState(0);

  const daiContract = useContract({
    addressOrName: DAITOKEN,
    contractInterface: erc20ABI,
    signerOrProvider: signerData,
  });

  useEffect(() => {
    const getBalance = async () => {
      const balance = await daiContract.balanceOf(accountData.address);
      setUserBalance(balance.toString() / EIGHTEENZERO);
    };

    if (daiContract.signer && accountData.address) getBalance();
  }, [accountData, daiContract]);

  return (
    <Container>
      <H3>Balance : {userBalance}</H3>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin: 1rem 2rem;
`;

const H3 = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #444;
  margin: 0rem 1rem;
`;
