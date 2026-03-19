# Deployment Guide

## Prerequisites

- Node.js ≥ 16
- Yarn ≥ 1.22
- An Ethereum wallet with sufficient ETH for deployment
- An Infura (or compatible) API key

---

## Local Development

### 1. Install dependencies

```bash
yarn install --frozen-lockfile
```

### 2. Compile contracts

```bash
yarn compile
```

This generates TypeChain bindings in `typechain/` and compiled artifacts in `artifacts/`.

### 3. Run tests

```bash
yarn test
```

---

## Network Deployment

### Environment setup

Copy `.env.example` to `.env` and populate all required variables:

```bash
cp .env.example .env
```

See [env-vars.md](./env-vars.md) for a full description of each variable.

### Deploy to a testnet

The factory contract is the entry point. Using Hardhat scripts (add your own deploy script to `scripts/`):

```typescript
import { ethers } from 'hardhat'

async function main() {
  const Factory = await ethers.getContractFactory('UniswapV3Factory')
  const factory = await Factory.deploy()
  await factory.deployed()
  console.log('UniswapV3Factory deployed to:', factory.address)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
```

Run with:

```bash
npx hardhat run scripts/deploy.ts --network sepolia
```

### Deploy to mainnet

```bash
npx hardhat run scripts/deploy.ts --network mainnet
```

> ⚠️ Always audit and test thoroughly before mainnet deployment.

---

## Using the npm artifact

Install the published package:

```bash
npm install @uniswap/v3-core
# or
yarn add @uniswap/v3-core
```

Import the factory artifact:

```typescript
import {
  abi as FACTORY_ABI,
  bytecode as FACTORY_BYTECODE,
} from '@uniswap/v3-core/artifacts/contracts/UniswapV3Factory.sol/UniswapV3Factory.json'
```

---

## Network Configurations

| Network          | Chain ID | Environment Variable Prefix |
|------------------|----------|-----------------------------|
| Mainnet          | 1        | `mainnet`                   |
| Sepolia          | 11155111 | `sepolia`                   |
| Arbitrum         | 42161    | `arbitrum`                  |
| Optimism         | 10       | `optimism`                  |
| Polygon          | 137      | `polygon`                   |
| BNB Chain        | 56       | `bnb`                       |

---

## Reproducible Builds

This project ensures deterministic compilation:

- Solidity `0.7.6` pinned
- Optimizer: 800 runs
- `metadata.bytecodeHash: 'none'` — excludes machine-specific metadata from bytecode
