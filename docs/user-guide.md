# User Guide

## Overview

This guide explains how to interact with SMSDAO v3-core pools through the frontend UI or directly via smart contracts.

---

## Connecting Your Wallet

1. Open the application in your browser.
2. Click **Connect Wallet** in the top navigation bar.
3. Select your wallet provider (MetaMask, WalletConnect, etc.).
4. Approve the connection request in your wallet.

---

## Viewing Pool Information

Navigate to the **Dashboard** tab to see:

- Connected wallet address and network
- Token balances
- Active liquidity positions
- Historical swap activity
- Fee earnings

---

## Performing a Swap

1. Navigate to **Home** or **Dashboard → Swap**.
2. Select the input token and output token.
3. Enter the amount you wish to swap.
4. Review the price impact and estimated output.
5. Click **Swap** and confirm the transaction in your wallet.

---

## Adding Liquidity

1. Go to **Dashboard → Positions**.
2. Click **New Position**.
3. Select token pair and fee tier (0.05%, 0.30%, or 1.00%).
4. Set your price range (tick lower and tick upper).
5. Enter the desired token amounts.
6. Click **Add Liquidity** and confirm in your wallet.

---

## Removing Liquidity

1. Go to **Dashboard → Positions**.
2. Select an active position.
3. Click **Remove Liquidity** and choose the percentage to remove.
4. Confirm the transaction in your wallet.
5. Collect fees by clicking **Collect Fees** on the position.

---

## Account Settings

Navigate to **Settings** to:

- Update notification preferences
- Manage connected wallets
- Configure slippage tolerance
- Set transaction deadline

---

## Viewing Transaction History

In the **Dashboard** under **Activity**, you can see:

- Swap history with timestamps and amounts
- Liquidity add/remove events
- Fee collection history

---

## Supported Networks

| Network       | Chain ID |
|---------------|----------|
| Ethereum      | 1        |
| Arbitrum      | 42161    |
| Optimism      | 10       |
| Polygon       | 137      |
| BNB Chain     | 56       |
| Goerli (test) | 5        |

---

## Troubleshooting

**Transaction fails:**
- Check that you have sufficient ETH/native token for gas fees.
- Increase slippage tolerance if price moved.
- Ensure the pool has sufficient liquidity.

**Wallet not connecting:**
- Ensure your wallet extension is unlocked.
- Try refreshing the page and reconnecting.
- Ensure you are on a supported network.
