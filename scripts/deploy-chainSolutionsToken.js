const hre = require("hardhat");

async function main() {
  const chainSolutionsToken = await hre.ethers.getContractFactory("ChainSolutionsToken");
  const token = await chainSolutionsToken.deploy();

  await token.deployed();

  console.log("ChainSolutionsToken Deployed At : ", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });