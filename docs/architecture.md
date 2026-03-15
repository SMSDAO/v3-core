# Architecture

## Overview

SMSDAO v3-core is a fork of the [Uniswap V3 Core](https://github.com/Uniswap/uniswap-v3-core) protocol — a non-custodial, permissionless, and immutable automated market maker (AMM) for the Ethereum blockchain.

---

## Contract Architecture

### Core Contracts

```
contracts/
├── UniswapV3Factory.sol          # Factory for deploying pool contracts
├── UniswapV3Pool.sol             # Core AMM pool logic
├── UniswapV3PoolDeployer.sol     # Helper for deterministic pool deployment
├── NoDelegateCall.sol            # Guard against delegatecall attacks
├── interfaces/
│   ├── IUniswapV3Factory.sol     # Factory interface
│   ├── IUniswapV3Pool.sol        # Pool interface (aggregated)
│   ├── IUniswapV3PoolDeployer.sol
│   ├── IERC20Minimal.sol         # Minimal ERC20 interface
│   ├── callback/                 # Callback interfaces for flash/swap/mint
│   └── pool/                     # Pool sub-interfaces (actions, events, etc.)
└── libraries/
    ├── BitMath.sol               # Bit manipulation utilities
    ├── FixedPoint96.sol          # Q96 fixed-point arithmetic
    ├── FixedPoint128.sol         # Q128 fixed-point arithmetic
    ├── FullMath.sol              # 512-bit precision math (MIT)
    ├── LiquidityMath.sol         # Liquidity addition/subtraction
    ├── LowGasSafeMath.sol        # Gas-optimized overflow-checked math
    ├── Oracle.sol                # TWAP oracle observations
    ├── Position.sol              # Per-position state management
    ├── SafeCast.sol              # Safe type casting
    ├── SqrtPriceMath.sol         # √Price ↔ token-amount conversions
    ├── SwapMath.sol              # Swap step computation
    ├── Tick.sol                  # Per-tick state management
    ├── TickBitmap.sol            # Compressed tick bitmap
    ├── TickMath.sol              # Tick ↔ √Price conversions
    ├── TransferHelper.sol        # Safe ERC20 transfer wrappers
    └── UnsafeMath.sol            # Unchecked division for performance
```

### Inheritance / Dependency Graph

```
UniswapV3Factory
  └── IUniswapV3Factory
  └── NoDelegateCall
  └── UniswapV3PoolDeployer

UniswapV3Pool
  └── IUniswapV3Pool (→ pool/*, callback/*)
  └── NoDelegateCall
  └── libraries:
        BitMath, FixedPoint128, FixedPoint96,
        FullMath, LiquidityMath, LowGasSafeMath,
        Oracle, Position, SafeCast, SqrtPriceMath,
        SwapMath, Tick, TickBitmap, TickMath,
        TransferHelper, UnsafeMath
```

---

## Pool Design

Each `UniswapV3Pool` is a singleton contract representing a trading pair at a fixed fee tier.

| Component        | Description |
|------------------|-------------|
| **Price**        | Stored as √(token1/token0) in Q64.96 format |
| **Ticks**        | Discrete price breakpoints; active ticks tracked via `TickBitmap` |
| **Positions**    | LP positions keyed by `(owner, tickLower, tickUpper)` |
| **Oracle**       | Ring buffer of time-weighted price/liquidity observations (up to 65,535) |
| **Fee Growth**   | Global fee accumulators enable O(1) fee collection |
| **Flash Loans**  | Atomic token borrows within a single transaction |

---

## Factory Design

`UniswapV3Factory` maps `(token0, token1, fee)` → `pool address`.

Supported fee tiers (at deployment):

| Fee    | Tick Spacing |
|--------|-------------|
| 0.05%  | 10          |
| 0.30%  | 60          |
| 1.00%  | 200         |

The owner may enable additional fee tiers.

---

## Licensing

| Component               | License         |
|-------------------------|-----------------|
| `contracts/interfaces/` | GPL-2.0-or-later |
| `contracts/libraries/`  | GPL-2.0-or-later (select files) |
| `contracts/libraries/FullMath.sol` | MIT |
| All other contracts     | BUSL-1.1        |
