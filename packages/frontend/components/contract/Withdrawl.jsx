import { Card, Button } from "../elements";

import { useAccount, useContract, useSigner, erc20ABI } from "wagmi";
import { CONTRACT_ADDRESS, DAITOKEN } from "../../constants";

import contractABI from "../../contracts/flash.json";

export const Withdrawl = () => {
  const { data: signerData } = useSigner();
  const { data: accountData } = useAccount();

  const flashContract = useContract({
    addressOrName: CONTRACT_ADDRESS,
    contractInterface: contractABI,
    signerOrProvider: signerData,
  });

  //   console.log("flashContract", flashContract);

  const daiContract = useContract({
    addressOrName: DAITOKEN,
    contractInterface: erc20ABI,
    signerOrProvider: signerData,
  });

  //   console.log("daiContract", daiContract);
  return (
    <Card>
      <div>Withdrawl</div>
    </Card>
  );
};
