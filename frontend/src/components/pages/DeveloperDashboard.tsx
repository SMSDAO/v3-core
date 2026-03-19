'use client'
import { useState } from 'react'

const CONSOLE_LOGS = [
  '> Connecting to Ethereum Mainnet...',
  '> Provider initialized: https://mainnet.infura.io/v3/***',
  '> UniswapV3Factory loaded at 0x1F98431c8aD98523631AE4a59f267346ea31F984',
  '> Ready.',
]
const NETWORKS = [
  { name: 'Ethereum Mainnet', chainId: 1, rpc: 'https://mainnet.infura.io/v3/...', status: 'connected' },
  { name: 'Sepolia Testnet', chainId: 11155111, rpc: 'https://sepolia.infura.io/v3/...', status: 'available' },
  { name: 'Arbitrum', chainId: 42161, rpc: 'https://arbitrum-mainnet.infura.io/v3/...', status: 'available' },
  { name: 'Optimism', chainId: 10, rpc: 'https://optimism-mainnet.infura.io/v3/...', status: 'available' },
]
const READ_METHODS = [
  { name: 'owner()', returns: 'address', description: 'Returns the owner of the factory' },
  { name: 'getPool(address,address,uint24)', returns: 'address', description: 'Returns pool address for given token pair and fee' },
  { name: 'feeAmountTickSpacing(uint24)', returns: 'int24', description: 'Returns tick spacing for given fee amount' },
]
const WRITE_METHODS = [
  { name: 'createPool(address,address,uint24)', description: 'Creates a new pool for token pair with fee tier' },
  { name: 'enableFeeAmount(uint24,int24)', description: 'Enables a new fee tier with given tick spacing' },
  { name: 'setOwner(address)', description: 'Transfers factory ownership' },
]

export default function DeveloperDashboard() {
  const [activeTab, setActiveTab] = useState('console')
  const [consoleInput, setConsoleInput] = useState('')
  const [logs, setLogs] = useState(CONSOLE_LOGS)

  const handleConsoleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!consoleInput.trim()) return
    setLogs([...logs, `> ${consoleInput}`, '  ← (simulated output)'])
    setConsoleInput('')
  }

  return (
    <div className="page-container">
      <div className="page-header" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div>
          <h1 className="page-title">Developer Dashboard</h1>
          <p className="page-subtitle">Contract interaction, API monitoring, and environment management</p>
        </div>
        <span className="badge badge-developer">Developer Access</span>
      </div>

      <div className="sub-tabs">
        {['console', 'api', 'logs', 'environment', 'testing', 'diagnostics'].map((t) => (
          <button key={t} className={`sub-tab${activeTab === t ? ' active' : ''}`} onClick={() => setActiveTab(t)}>
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {activeTab === 'console' && (
        <div className="grid-2">
          <div className="card">
            <div className="card-header"><div className="card-title">Contract Interaction Console</div></div>
            <div style={{ marginBottom: 12 }}>
              <div className="form-label" style={{ marginBottom: 6 }}>Contract</div>
              <select className="form-input">
                <option>UniswapV3Factory — 0x1F98431c8aD98523631AE4a59f267346ea31F984</option>
                <option>UniswapV3Pool (select from pool list)</option>
              </select>
            </div>
            <div className="code-block" style={{ marginBottom: 12 }}>
              {logs.map((l, i) => (
                <div key={i} className={l.startsWith('  ←') ? 'log-info' : ''}>{l}</div>
              ))}
            </div>
            <form onSubmit={handleConsoleSubmit} style={{ display: 'flex', gap: 8 }}>
              <input
                className="form-input"
                style={{ flex: 1, fontFamily: 'var(--font-mono)' }}
                value={consoleInput}
                onChange={(e) => setConsoleInput(e.target.value)}
                placeholder="Enter command..."
                aria-label="Console input"
              />
              <button type="submit" className="btn btn-primary btn-sm">Run</button>
            </form>
          </div>

          <div>
            <div className="card" style={{ marginBottom: 16 }}>
              <div className="card-header"><div className="card-title">Read Methods</div></div>
              {READ_METHODS.map((m) => (
                <div key={m.name}
                  className="metric-row"
                  style={{ padding: '10px 0' }}
                >
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--accent-secondary)' }}>{m.name}</div>
                    <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{m.description}</div>
                  </div>
                  <span className="tag" style={{ flexShrink: 0 }}>{m.returns}</span>
                </div>
              ))}
            </div>

            <div className="card">
              <div className="card-header"><div className="card-title">Write Methods</div></div>
              {WRITE_METHODS.map((m) => (
                <div key={m.name} className="metric-row" style={{ padding: '10px 0' }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--accent-warning)' }}>{m.name}</div>
                    <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{m.description}</div>
                  </div>
                  <button className="btn btn-ghost btn-sm">Call</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'api' && (
        <>
          <div className="grid-4" style={{ marginBottom: 24 }}>
            <div className="stat-card">
              <div className="stat-label">Requests (1h)</div>
              <div className="stat-value">17,284</div>
              <div className="stat-change positive">↑ Normal</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">P95 Latency</div>
              <div className="stat-value">87ms</div>
              <div className="stat-change positive">↓ Good</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Error Rate</div>
              <div className="stat-value" style={{ color: 'var(--accent-success)' }}>0.08%</div>
              <div className="stat-change positive">↓ Low</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Uptime</div>
              <div className="stat-value" style={{ color: 'var(--accent-success)' }}>99.98%</div>
              <div className="stat-change positive">↑ Excellent</div>
            </div>
          </div>
          <div className="card">
            <div className="card-header"><div className="card-title">API Endpoints</div></div>
            <div className="table-container">
              <table>
                <thead><tr><th>Endpoint</th><th>Method</th><th>Auth</th><th>Rate Limit</th><th>Status</th></tr></thead>
                <tbody>
                  {[
                    { ep: '/api/health', m: 'GET', auth: 'None', rl: '∞', ok: true },
                    { ep: '/api/pools', m: 'GET', auth: 'Bearer', rl: '100/min', ok: true },
                    { ep: '/api/pools/:id', m: 'GET', auth: 'Bearer', rl: '100/min', ok: true },
                    { ep: '/api/swap', m: 'POST', auth: 'Bearer', rl: '60/min', ok: true },
                    { ep: '/api/positions', m: 'GET', auth: 'Bearer', rl: '100/min', ok: true },
                    { ep: '/api/admin/users', m: 'GET', auth: 'Admin', rl: '30/min', ok: true },
                    { ep: '/api/factory/events', m: 'GET', auth: 'Bearer', rl: '60/min', ok: true },
                  ].map((r, i) => (
                    <tr key={i}>
                      <td><span className="code-block" style={{ padding: '2px 6px', display: 'inline', fontSize: 12 }}>{r.ep}</span></td>
                      <td><span className="tag">{r.m}</span></td>
                      <td style={{ color: 'var(--text-secondary)' }}>{r.auth}</td>
                      <td style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }}>{r.rl}</td>
                      <td><span className={`badge ${r.ok ? 'badge-active' : 'badge-inactive'}`}>{r.ok ? 'Online' : 'Down'}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {activeTab === 'logs' && (
        <div className="card">
          <div className="card-header">
            <div className="card-title">Application Log Viewer</div>
            <div style={{ display: 'flex', gap: 8 }}>
              <select className="form-input" style={{ width: 120, padding: '4px 10px', fontSize: 12 }}>
                <option>All levels</option>
                <option>ERROR</option>
                <option>WARN</option>
                <option>INFO</option>
              </select>
              <button className="btn btn-ghost btn-sm">Refresh</button>
            </div>
          </div>
          <div className="console-output">
            {[
              { level: 'INFO', msg: '2026-03-15T03:00:00Z [server] Listening on :3000' },
              { level: 'INFO', msg: '2026-03-15T03:01:12Z [pool] Pool USDC/ETH event: Swap' },
              { level: 'INFO', msg: '2026-03-15T03:02:44Z [pool] Pool WBTC/ETH event: Mint' },
              { level: 'WARN', msg: '2026-03-15T03:03:10Z [rate-limit] User 0x742d hit rate limit' },
              { level: 'INFO', msg: '2026-03-15T03:04:30Z [auth] User 0xAbC logged in' },
              { level: 'INFO', msg: '2026-03-15T03:05:15Z [pool] Pool DAI/USDC event: Swap' },
              { level: 'INFO', msg: '2026-03-15T03:06:00Z [health] Health check OK' },
              { level: 'ERROR', msg: '2026-03-15T03:06:55Z [rpc] RPC timeout on getBlockNumber (retrying)' },
              { level: 'INFO', msg: '2026-03-15T03:07:00Z [rpc] RPC reconnected successfully' },
            ].map((l, i) => (
              <div key={i} className={`log-${l.level.toLowerCase()}`}>
                <span style={{ opacity: 0.6 }}>[{l.level}]</span> {l.msg}
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'environment' && (
        <>
          <div className="card" style={{ marginBottom: 24 }}>
            <div className="card-header"><div className="card-title">Network Switcher</div></div>
            <div className="table-container">
              <table>
                <thead><tr><th>Network</th><th>Chain ID</th><th>RPC URL</th><th>Status</th><th>Actions</th></tr></thead>
                <tbody>
                  {NETWORKS.map((n) => (
                    <tr key={n.chainId}>
                      <td style={{ fontWeight: 600 }}>{n.name}</td>
                      <td><span className="tag">{n.chainId}</span></td>
                      <td style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }}>{n.rpc}</td>
                      <td><span className={`badge ${n.status === 'connected' ? 'badge-active' : 'badge-pending'}`}>{n.status}</span></td>
                      <td>
                        {n.status !== 'connected' && <button className="btn btn-primary btn-sm">Connect</button>}
                        {n.status === 'connected' && <span style={{ fontSize: 12, color: 'var(--accent-success)' }}>✓ Active</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="card" style={{ maxWidth: 500 }}>
            <div className="card-header"><div className="card-title">RPC Configuration</div></div>
            <div className="form-group">
              <label className="form-label">Custom RPC URL</label>
              <input className="form-input" placeholder="https://rpc.example.com" />
            </div>
            <div className="form-group">
              <label className="form-label">Gas Price Strategy</label>
              <select className="form-input"><option>Auto</option><option>Fast</option><option>Standard</option><option>Slow</option></select>
            </div>
            <div className="form-group">
              <label className="form-label">Gas Limit Override</label>
              <input className="form-input" placeholder="Leave blank for auto" type="number" />
            </div>
            <button className="btn btn-primary">Apply Config</button>
          </div>
        </>
      )}

      {activeTab === 'testing' && (
        <div className="grid-2">
          <div className="card">
            <div className="card-header"><div className="card-title">Integration Test Suite</div></div>
            {[
              { name: 'Factory deployment', status: 'pass' },
              { name: 'Pool creation — 0.05% fee', status: 'pass' },
              { name: 'Pool creation — 0.30% fee', status: 'pass' },
              { name: 'Swap execution (ETH→USDC)', status: 'pass' },
              { name: 'Liquidity add/remove', status: 'pass' },
              { name: 'Oracle observation', status: 'pass' },
              { name: 'Flash loan', status: 'pass' },
              { name: 'Fee collection', status: 'pass' },
            ].map((t) => (
              <div key={t.name} className="metric-row">
                <div style={{ fontSize: 13 }}>{t.name}</div>
                <span className={`badge ${t.status === 'pass' ? 'badge-active' : 'badge-inactive'}`}>{t.status}</span>
              </div>
            ))}
            <div style={{ marginTop: 16 }}>
              <button className="btn btn-primary">Run All Tests</button>
            </div>
          </div>
          <div className="card">
            <div className="card-header"><div className="card-title">Last Test Run</div></div>
            <div className="console-output">
              <div className="log-info">[INFO] Starting integration test suite...</div>
              <div>✓ Factory deployment passed (23ms)</div>
              <div>✓ Pool creation — 0.05% passed (156ms)</div>
              <div>✓ Pool creation — 0.30% passed (148ms)</div>
              <div>✓ Swap execution passed (312ms)</div>
              <div>✓ Liquidity add/remove passed (445ms)</div>
              <div>✓ Oracle observation passed (89ms)</div>
              <div>✓ Flash loan passed (201ms)</div>
              <div>✓ Fee collection passed (178ms)</div>
              <div className="log-info">[INFO] 8 tests passed, 0 failed. (1552ms total)</div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'diagnostics' && (
        <>
          <div className="grid-4" style={{ marginBottom: 24 }}>
            <div className="stat-card">
              <div className="stat-label">Node Version</div>
              <div className="stat-value" style={{ fontSize: 18 }}>v16.20</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Hardhat Version</div>
              <div className="stat-value" style={{ fontSize: 18 }}>2.x</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Solidity Compiler</div>
              <div className="stat-value" style={{ fontSize: 18 }}>0.7.6</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Contract Artifacts</div>
              <div className="stat-value" style={{ fontSize: 18, color: 'var(--accent-success)' }}>✓ Built</div>
            </div>
          </div>
          <div className="card">
            <div className="card-header"><div className="card-title">Deployment Diagnostics</div></div>
            {[
              { check: 'Solidity compiler available', ok: true },
              { check: 'Contract artifacts present', ok: true },
              { check: 'TypeChain bindings generated', ok: true },
              { check: 'RPC connection healthy', ok: true },
              { check: 'Wallet connected', ok: false },
              { check: 'Environment variables loaded', ok: true },
              { check: 'Hardhat network running', ok: true },
            ].map((d) => (
              <div key={d.check} className="metric-row">
                <div style={{ fontSize: 13 }}>{d.check}</div>
                <span style={{ color: d.ok ? 'var(--accent-success)' : 'var(--accent-danger)', fontWeight: 600 }}>
                  {d.ok ? '✓ Pass' : '✗ Fail'}
                </span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
