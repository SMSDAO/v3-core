# Developer Guide

## Prerequisites

- **Node.js** ≥ 16 (LTS recommended)
- **Yarn** ≥ 1.22
- **Git** ≥ 2.30

---

## Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/SMSDAO/v3-core.git
cd v3-core
```

### 2. Install dependencies

```bash
yarn install --frozen-lockfile
```

### 3. Copy environment variables

```bash
cp .env.example .env
# Edit .env with your actual values
```

See [env-vars.md](./env-vars.md) for details on each variable.

### 4. Compile smart contracts

```bash
yarn compile
```

This compiles Solidity contracts and generates TypeChain bindings.

### 5. Run tests

```bash
yarn test
```

---

## Project Structure

```
v3-core/
├── contracts/           # Solidity smart contracts
│   ├── interfaces/      # Contract interfaces
│   ├── libraries/       # Shared library contracts
│   └── test/            # Test helper contracts
├── test/                # TypeScript test suite (Mocha/Chai/Waffle)
├── frontend/            # Next.js enterprise UI
├── docs/                # Project documentation
├── audits/              # Security audit reports
├── .github/workflows/   # CI/CD pipelines
├── hardhat.config.ts    # Hardhat configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project manifest
```

---

## Writing Tests

Tests use **Mocha**, **Chai**, and **Ethereum Waffle** with **ethers.js v5**.

### File naming

Test files live in `test/` and follow the pattern `<ContractName>.spec.ts`.

### Example test

```typescript
import { expect } from 'chai'
import { ethers } from 'hardhat'

describe('UniswapV3Factory', () => {
  it('deploys correctly', async () => {
    const Factory = await ethers.getContractFactory('UniswapV3Factory')
    const factory = await Factory.deploy()
    expect(await factory.owner()).to.eq(await (await ethers.getSigners())[0].getAddress())
  })
})
```

### Running a single test file

```bash
npx hardhat test test/UniswapV3Factory.spec.ts
```

---

## Contract Interaction Console

The **Developer Dashboard** in the frontend provides:

- **Read methods** — call view/pure functions
- **Write methods** — send transactions (requires connected wallet)
- **Event log viewer** — stream and filter contract events

---

## Environment Management

In the **Developer Dashboard → Environment**:
- Switch between network configurations (mainnet, testnet)
- Override RPC URL
- Set custom gas price/limit

---

## Fuzz Testing

This project uses [Echidna](https://github.com/crytic/echidna) for property-based fuzzing.

Run locally:

```bash
echidna-test . --contract TickBitmapEchidnaTest --config echidna.config.yml
```

---

## Linting

```bash
# Solidity linting
yarn solhint 'contracts/**/*.sol'

# Solidity formatting check
yarn prettier --check 'contracts/**/*.sol'

# Auto-format
yarn prettier --write 'contracts/**/*.sol'
```

---

## CI/CD Pipelines

| Workflow          | Trigger            | Description |
|-------------------|--------------------|-------------|
| `ci.yml`          | push, PR           | Compile + test + lint |
| `tests.yml`       | push to main, PR   | Hardhat unit tests |
| `lint.yml`        | push to main, PR   | Solhint + Prettier |
| `security.yml`    | push, PR, weekly   | Dependency audit + secret scanning |
| `fuzz-testing.yml`| push to main, PR   | Echidna fuzz tests |
| `release.yml`     | release published  | npm publish |
| `mythx.yml`       | manual             | Deep static analysis |

---

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feat/my-feature`
3. Make your changes, add tests.
4. Ensure all tests pass: `yarn test`
5. Ensure linting passes: `yarn solhint 'contracts/**/*.sol'`
6. Open a Pull Request against `main`.

---

## Security

See [bug-bounty.md](../bug-bounty.md) for the responsible disclosure policy.

> ⚠️ **Do not modify smart contract Solidity code** unless addressing a verified critical security vulnerability. All contract changes require security review.
