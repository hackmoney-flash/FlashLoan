import styled from "styled-components";
import { useState } from "react";
import { useAccount, useContract, useSigner, erc20ABI } from "wagmi";
import { CONTRACT_ADDRESS, DAITOKEN } from "../../constants";

import contractABI from "../../contracts/flash.json";

export const FlashPlayground = () => {
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

  // console.log("flashContract", flashContract);

  //   console.log(contractABI);
  const handleGetOwner = async () => {
    // const owner = await flashContract.owner();
    //   console.log("owner", owner);
    // console.log(getContractAt);

    console.log("daiContract", daiContract);
    console.log(accountData.address);

    const balance = await daiContract.balanceOf(accountData.address);
    console.log("balance", balance.toString());

    const amount = 1 * 10 ** 18;
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
    });
  };
  return (
    <Container>
      <div>flash playground</div>
      <button onClick={() => handleGetOwner()}>get owner</button>
    </Container>
  );
};

const Container = styled.div`
  margin: 2rem 5rem;
`;
