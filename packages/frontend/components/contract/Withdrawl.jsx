import { useState, useEffect } from "react";
import styled from "styled-components";
import { Card, Button, Balance, CardHeader, Loading } from "../elements";
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
  const [submitting, setSubmitting] = useState(false);
  const [transactionComplete, setTransactionComplete] = useState("");

  const { data: signerData } = useSigner();

  const flashContract = useContract({
    addressOrName: CONTRACT_ADDRESS,
    contractInterface: contractABI,
    signerOrProvider: signerData,
  });

  // console.log("flashContract", flashContract);

  const handleButton = async () => {
    setSubmitting(true);
    setTransactionComplete("");

    try {
      const tx = await flashContract.withdrawToken(USDCTOKEN, {
        gasLimit: "1000000",
      });
      tx.wait(1).then(() => {
        setInputAmount(0);
        setTransactionComplete("Withdrawl Completed");
        setSubmitting(false);
      });
    } catch (e) {
      setTransactionComplete("Withdrawl Failed");
      setSubmitting(false);
    }
  };

  if (submitting)
    return (
      <Card>
        {/* <CardHeader>withdrawl</CardHeader> */}
        <Loading />

        {/* <Button onClick={() => handleButton()}>withdrawl</Button> */}
        <Balance />
      </Card>
    );

  return (
    <Card>
      {/* <CardHeader>withdrawl</CardHeader> */}
      {/* <div>in contract : </div> */}
      {/* <TokenSelect /> */}
      <Button onClick={() => handleButton()}>withdrawl</Button>
      <Balance />
      <Completed>{transactionComplete}</Completed>
    </Card>
  );
};

const Completed = styled.div`
  color: rgba(93, 95, 239);
  font-weight: bold;
  font-size: 1.2rem;
  text-align: center;
`;
