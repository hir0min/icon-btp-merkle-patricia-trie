import * as dotenv from "dotenv";

import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";

dotenv.config();

// Reference link https://github.com/PureStake/moonbeam#prefunded-development-addresses
const privKeys = process.env.PRIVATE_KEYS
  ? process.env.PRIVATE_KEYS.split(",")
  : [
      "0x5fb92d6e98884f76de468fa3f6278f8807c48bebc13595d45af5bdc4da702133", // Alith
      "0x8075991ce870b93a8870eca0c0f91913d12f47948ca0fd25b49c6fa7cdbeee8b", // Baltathar
      "0x0b6e18cafb6ed99687ec547bd28139cafdd2bffe70e6b688025de6b445aa5c5b", // Charleth
      "0x39539ab1876910bbf3a223d84a29e28f1cb4e2e456503e7e91ed39b2e7223d68", // Dorothy
      "0x7dce9bc8babb68fec1409be38c8e1a52650206a7ed90ff956ae8a6d15eeaaef4", // Ethan
      "0xb9d2ea9a615f3165812e8d44de0d24da9bbd164b65c4f0573e1ce2c8dbd9c8df", // Faith
      "0x96b8a38e12e1a31dee1eab2fffdf9d9990045f5b37e44d8cc27766ef294acf18", // Goliath
      "0x0d6dcaaef49272a5411896be8ad16c01c35d6f8c18873387b71fbc734759b0ab", // Heath
      "0x4c42532034540267bf568198ccec4cb822a025da542861fcb146a5fab6433ff8", // Ida
      "0x94c49300a58d576011096bcb006aa06f5a91b34b4383891e8029c21dc39fbb8b", // Judith
    ];

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const config: HardhatUserConfig = {
  solidity: "0.8.4",
  networks: {
    moonbeamlocal: {
      url: "http://localhost:9933",
      chainId: 1281,
      accounts: privKeys,
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};

export default config;
