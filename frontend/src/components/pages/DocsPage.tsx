'use client'
import { useState } from 'react'

const DOC_SECTIONS = [
  {
    id: 'architecture',
    title: 'Architecture',
    icon: '⬡',
    content: `## Contract Architecture

SMSDAO v3-core is a fork of Uniswap V3 Core — a non-custodial, permissionless AMM.

### Core Contracts
- **UniswapV3Factory** — deploys and tracks pool contracts
- **UniswapV3Pool** — core AMM logic with concentrated liquidity
- **UniswapV3PoolDeployer** — CREATE2-based deterministic pool deployment
- **NoDelegateCall** — protects against delegatecall attacks

### Fee Tiers
| Fee    | Tick Spacing |
|--------|-------------|
| 0.05%  | 10          |
| 0.30%  | 60          |
| 1.00%  | 200         |

### Libraries
BitMath, FixedPoint96/128, FullMath (MIT), LiquidityMath, LowGasSafeMath, Oracle, Position, SafeCast, SqrtPriceMath, SwapMath, Tick, TickBitmap, TickMath, TransferHelper, UnsafeMath`,
  },
  {
    id: 'deployment',
    title: 'Deployment',
    icon: '🚀',
    content: `## Deployment Guide

### Prerequisites
- Node.js ≥ 16, Yarn ≥ 1.22
- Infura API key

### Install & Compile
\`\`\`bash
yarn install --frozen-lockfile
yarn compile
\`\`\`

### Deploy to Goerli
\`\`\`bash
npx hardhat run scripts/deploy.ts --network goerli
\`\`\`

### Deploy to Mainnet
\`\`\`bash
npx hardhat run scripts/deploy.ts --network mainnet
\`\`\`

> Always audit before mainnet deployment.`,
  },
  {
    id: 'env-vars',
    title: 'Environment Variables',
    icon: '⚙',
    content: `## Environment Variables

### Hardhat
| Variable            | Description |
|---------------------|-------------|
| INFURA_API_KEY      | Infura project API key |
| ETHERSCAN_API_KEY   | Etherscan verification key |

### Frontend
| Variable                  | Description |
|---------------------------|-------------|
| NEXT_PUBLIC_RPC_URL       | Public RPC endpoint |
| NEXT_PUBLIC_API_URL       | Backend API base URL |
| NEXT_PUBLIC_ENV           | Environment label |

### Authentication
| Variable      | Description |
|---------------|-------------|
| JWT_SECRET    | JWT signing secret |
| JWT_EXPIRES_IN| Token expiry (default: 7d) |
| BCRYPT_ROUNDS | bcrypt rounds (default: 12) |`,
  },
  {
    id: 'user-guide',
    title: 'User Guide',
    icon: '👤',
    content: `## User Guide

### Connect Your Wallet
1. Click **Connect Wallet** in the top navigation bar
2. Select your wallet provider (MetaMask, WalletConnect)
3. Approve the connection request

### Perform a Swap
1. Go to **Dashboard → Swap**
2. Select input and output tokens
3. Enter amount and review price impact
4. Click **Swap** and confirm in wallet

### Add Liquidity
1. Go to **Dashboard → Positions → New Position**
2. Select token pair and fee tier
3. Set price range (tick lower/upper)
4. Enter token amounts and confirm`,
  },
  {
    id: 'admin-guide',
    title: 'Admin Guide',
    icon: '🔐',
    content: `## Admin Guide

### RBAC Roles
| Role        | Access |
|-------------|--------|
| Admin       | Full access |
| Developer   | Contract console, API, env |
| User        | Dashboard, swap, liquidity |
| Auditor     | Read-only, audit logs |

### User Management
- Create users via **Admin → Users → Create User**
- Assign roles via **Admin → Role Management**
- View audit trail via **Admin → Audit Logs**

### Contract Monitoring
- View pool stats via **Admin → Contract Monitor**
- Monitor events and TVL in real-time`,
  },
  {
    id: 'developer-guide',
    title: 'Developer Guide',
    icon: '🛠',
    content: `## Developer Guide

### Local Setup
\`\`\`bash
git clone https://github.com/SMSDAO/v3-core.git
cd v3-core
yarn install --frozen-lockfile
cp .env.example .env
yarn compile
yarn test
\`\`\`

### Writing Tests
Tests use Mocha + Chai + Ethereum Waffle.

\`\`\`typescript
import { expect } from 'chai'
import { ethers } from 'hardhat'

describe('UniswapV3Factory', () => {
  it('deploys correctly', async () => {
    const Factory = await ethers.getContractFactory('UniswapV3Factory')
    const factory = await Factory.deploy()
    expect(await factory.owner()).to.be.properAddress
  })
})
\`\`\`

### CI Pipelines
- ci.yml — compile + test + lint
- security.yml — audit + secret scan
- release.yml — npm publish on release`,
  },
]

export default function DocsPage() {
  const [activeDoc, setActiveDoc] = useState('architecture')
  const active = DOC_SECTIONS.find((d) => d.id === activeDoc)!

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Documentation</h1>
        <p className="page-subtitle">Guides, references, and architecture documentation</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 20 }}>
        {/* Sidebar */}
        <div className="card" style={{ height: 'fit-content' }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 12 }}>
            Documentation
          </div>
          {DOC_SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveDoc(s.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                width: '100%',
                padding: '8px 10px',
                background: activeDoc === s.id ? 'rgba(108, 99, 255, 0.15)' : 'transparent',
                border: activeDoc === s.id ? '1px solid rgba(108, 99, 255, 0.3)' : '1px solid transparent',
                borderRadius: 'var(--radius-sm)',
                color: activeDoc === s.id ? 'var(--accent-primary)' : 'var(--text-secondary)',
                fontSize: 13,
                cursor: 'pointer',
                textAlign: 'left',
                marginBottom: 4,
                transition: 'all var(--transition-fast)',
              }}
              aria-pressed={activeDoc === s.id}
            >
              <span aria-hidden="true">{s.icon}</span>
              {s.title}
            </button>
          ))}
          <div className="divider"></div>
          <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>
            <div style={{ marginBottom: 8 }}>External</div>
            <a href="https://uniswap.org/whitepaper-v3.pdf" target="_blank" rel="noopener noreferrer"
              style={{ display: 'block', color: 'var(--accent-secondary)', textDecoration: 'none', marginBottom: 6 }}>
              Uniswap V3 Whitepaper ↗
            </a>
            <a href="https://github.com/SMSDAO/v3-core" target="_blank" rel="noopener noreferrer"
              style={{ display: 'block', color: 'var(--accent-secondary)', textDecoration: 'none' }}>
              GitHub Repository ↗
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="card">
          <div style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            {active.icon} {active.title}
          </div>
          <div style={{
            whiteSpace: 'pre-wrap',
            fontSize: 13,
            lineHeight: 1.8,
            color: 'var(--text-primary)',
            fontFamily: 'inherit',
          }}>
            {active.content.split('\n').map((line, i) => {
              if (line.startsWith('## ')) {
                return <h2 key={i} style={{ fontSize: 20, fontWeight: 700, margin: '0 0 16px', color: 'var(--text-primary)' }}>{line.slice(3)}</h2>
              }
              if (line.startsWith('### ')) {
                return <h3 key={i} style={{ fontSize: 15, fontWeight: 600, margin: '16px 0 8px', color: 'var(--accent-primary)' }}>{line.slice(4)}</h3>
              }
              if (line.startsWith('- **')) {
                const match = line.match(/- \*\*(.+?)\*\* — (.+)/)
                if (match) return <div key={i} style={{ marginBottom: 6 }}>• <strong style={{ color: 'var(--accent-secondary)' }}>{match[1]}</strong> — {match[2]}</div>
              }
              if (line.startsWith('```')) {
                return <div key={i} style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>{line}</div>
              }
              if (line.startsWith('|')) {
                return <div key={i} style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-secondary)', padding: '2px 0' }}>{line}</div>
              }
              return <div key={i} style={{ marginBottom: line === '' ? 8 : 2 }}>{line}</div>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
