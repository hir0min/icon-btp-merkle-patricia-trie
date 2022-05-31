# Merkle Patricia Trie for ICON BTP
This is an implementation of the modified merkle patricia tree as specified in the [ICON BTP Relay System](https://github.com/icon-project/btp), supporting Solidity **0.8.x**

**Features:** It's used to verify and decode block hash and event roots from block tries in BTP messagages (cross-chain transfer messages) between ICON and EVM-compatible chains that add support for precompiled SHA3-256 and EcRecover (Moonbeam, Avalanche, BSC, etc.)
## Set up
Node >= 10.x && yarn > 1.x
```
$ node --version
v16.15.0

$ npm install --global yarn

$ yarn --version
1.22.18
```

Install dependencies
```
$ yarn
```
## Test
1. Run latest moonbeam development node in a background process or seperate terminal window
```
$ docker run --rm -p 9933:9933 -p 9944:9944 purestake/moonbeam:v0.23.0 --dev --ws-external --rpc-external
```
2. Compile contracts
```
$ yarn compile
```
3. Run unit tests
```
$ yarn test
```