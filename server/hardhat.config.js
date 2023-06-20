require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/z4WpA8UKgqnwbTYmrZu15yCOiijBKaRv",
      accounts: [
        "7d74e253562ae73e8c3dc4b057942feb895065040093ac1c844458a6aee47d4d",
      ],
    },
  },
};
