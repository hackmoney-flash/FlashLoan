import styled from "styled-components";
import { useState } from "react";
import { useAccount, useContract, useSigner, erc20ABI } from "wagmi";

import { ethers } from "ethers";

const contractAddress = "0x93e6587f96c3a3D4A77Eb44d5ef3Fe1c0B34AB61";
import contractABI from "../../contracts/flash.json";

const DAI = "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063";
const DAITOKEN = "0x4aAded56bd7c69861E8654719195fCA9C670EB45";

export const FlashPlayground = () => {
  const { data: signerData } = useSigner();
  const { data: accountData } = useAccount();

  const flashContract = useContract({
    addressOrName: contractAddress,
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
