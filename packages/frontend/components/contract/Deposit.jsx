import { Card, Button } from "../elements";

import { useAccount, useContract, useSigner, erc20ABI } from "wagmi";

const contractAddress = "0x93e6587f96c3a3D4A77Eb44d5ef3Fe1c0B34AB61";
import contractABI from "../../contracts/flash.json";

// const DAI = "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063";
const DAITOKEN = "0x4aAded56bd7c69861E8654719195fCA9C670EB45";

export const Deposit = () => {
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

  return (
    <Card>
      <div>Deposit</div>
    </Card>
  );
};
