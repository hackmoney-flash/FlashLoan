const hre = require("hardhat");

async function main() {

  // Kovan Lending pool provider : 0x88757f2f99175387ab4c6a4b3067c77a695b0349
  const Flash = await hre.ethers.getContractFactory("FlashLoan");
  const flash = await Flash.deploy("0x178113104fEcbcD7fF8669a0150721e231F0FD4B"); //pool addres provider mumbai v2 0x178113104fEcbcD7fF8669a0150721e231F0FD4B

  await flash.deployed();

  console.log("FlashLoan deployed to:", flash.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
