'use client'
import { useState } from 'react'

const WALLET_ADDRESS = '0x742d35Cc6634C0532925a3b8D4C9E5C4a2b8a7F3'
const POSITIONS = [
  { id: 1, pair: 'USDC/ETH', fee: '0.05%', range: '$1,580 – $2,100', liquidity: '$12,450', fees: '$234.50', status: 'In Range' },
  { id: 2, pair: 'WBTC/ETH', fee: '0.30%', range: '$0.058 – $0.072', liquidity: '$8,900', fees: '$127.30', status: 'In Range' },
  { id: 3, pair: 'DAI/USDC', fee: '0.05%', range: '$0.999 – $1.001', liquidity: '$25,000', fees: '$52.80', status: 'Out of Range' },
]
const ACTIVITY = [
  { type: 'Swap', pair: 'ETH → USDC', amount: '2.5 ETH', value: '$4,750', time: '2 min ago' },
  { type: 'Add Liq', pair: 'USDC/ETH', amount: '$5,000', value: '$5,000', time: '1 hr ago' },
  { type: 'Collect', pair: 'WBTC/ETH', amount: '0.003 ETH', value: '$5.70', time: '3 hr ago' },
  { type: 'Swap', pair: 'USDC → WBTC', amount: '$2,000', value: '$2,000', time: '5 hr ago' },
]

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="page-container">
      <div className="page-header" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div>
          <h1 className="page-title">User Dashboard</h1>
          <p className="page-subtitle">Your account overview and activity</p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div className="address">{WALLET_ADDRESS.slice(0,6)}…{WALLET_ADDRESS.slice(-4)}</div>
          <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 4 }}>Ethereum Mainnet</div>
        </div>
      </div>

      {/* Sub navigation */}
      <div className="sub-tabs">
        {['overview', 'positions', 'activity', 'notifications', 'settings'].map((t) => (
          <button
            key={t}
            className={`sub-tab${activeTab === t ? ' active' : ''}`}
            onClick={() => setActiveTab(t)}
            aria-selected={activeTab === t}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {activeTab === 'overview' && (
        <>
          {/* Token Balances */}
          <div className="grid-4" style={{ marginBottom: 24 }}>
            <div className="stat-card">
              <div className="stat-icon" style={{ background: 'rgba(108, 99, 255, 0.15)' }}>Ξ</div>
              <div className="stat-label">ETH Balance</div>
              <div className="stat-value">12.45</div>
              <div className="stat-change positive">↑ +0.32 today</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon" style={{ background: 'rgba(0, 212, 255, 0.1)' }}>$</div>
              <div className="stat-label">USDC Balance</div>
              <div className="stat-value">8,420</div>
              <div className="stat-change positive">↑ +$420 today</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon" style={{ background: 'rgba(0, 230, 118, 0.1)' }}>◈</div>
              <div className="stat-label">Total Liquidity</div>
              <div className="stat-value">$46,350</div>
              <div className="stat-change positive">↑ +2.1% 24h</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon" style={{ background: 'rgba(255, 171, 0, 0.1)' }}>⚡</div>
              <div className="stat-label">Fee Earnings (30d)</div>
              <div className="stat-value">$414.60</div>
              <div className="stat-change positive">↑ +$12.30 today</div>
            </div>
          </div>

          {/* Positions summary */}
          <div className="card" style={{ marginBottom: 24 }}>
            <div className="card-header">
              <div className="card-title">Active Positions</div>
              <button className="btn btn-primary btn-sm">+ New Position</button>
            </div>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Pair</th>
                    <th>Fee</th>
                    <th>Price Range</th>
                    <th>Liquidity</th>
                    <th>Fees Earned</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {POSITIONS.map((p) => (
                    <tr key={p.id}>
                      <td style={{ fontWeight: 600 }}>{p.pair}</td>
                      <td><span className="tag">{p.fee}</span></td>
                      <td style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }}>{p.range}</td>
                      <td>{p.liquidity}</td>
                      <td style={{ color: 'var(--accent-success)' }}>{p.fees}</td>
                      <td>
                        <span className={`badge ${p.status === 'In Range' ? 'badge-active' : 'badge-inactive'}`}>
                          {p.status}
                        </span>
                      </td>
                      <td>
                        <button className="btn btn-ghost btn-sm">Manage</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="card">
            <div className="card-header">
              <div className="card-title">Recent Activity</div>
              <button className="btn btn-ghost btn-sm" onClick={() => setActiveTab('activity')}>View all</button>
            </div>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Pair</th>
                    <th>Amount</th>
                    <th>Value</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {ACTIVITY.map((a, i) => (
                    <tr key={i}>
                      <td><span className="tag">{a.type}</span></td>
                      <td>{a.pair}</td>
                      <td style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }}>{a.amount}</td>
                      <td>{a.value}</td>
                      <td style={{ color: 'var(--text-muted)' }}>{a.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {activeTab === 'positions' && (
        <div className="card">
          <div className="card-header">
            <div className="card-title">All Positions</div>
            <button className="btn btn-primary btn-sm">+ New Position</button>
          </div>
          <div className="table-container">
            <table>
              <thead>
                <tr><th>Pair</th><th>Fee</th><th>Price Range</th><th>Liquidity</th><th>Fees Earned</th><th>Status</th><th></th></tr>
              </thead>
              <tbody>
                {POSITIONS.map((p) => (
                  <tr key={p.id}>
                    <td style={{ fontWeight: 600 }}>{p.pair}</td>
                    <td><span className="tag">{p.fee}</span></td>
                    <td style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }}>{p.range}</td>
                    <td>{p.liquidity}</td>
                    <td style={{ color: 'var(--accent-success)' }}>{p.fees}</td>
                    <td><span className={`badge ${p.status === 'In Range' ? 'badge-active' : 'badge-inactive'}`}>{p.status}</span></td>
                    <td>
                      <div style={{ display: 'flex', gap: 6 }}>
                        <button className="btn btn-ghost btn-sm">Add</button>
                        <button className="btn btn-danger btn-sm">Remove</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'activity' && (
        <div className="card">
          <div className="card-header">
            <div className="card-title">Transaction History</div>
          </div>
          <div className="table-container">
            <table>
              <thead>
                <tr><th>Type</th><th>Pair</th><th>Amount</th><th>Value</th><th>Time</th><th>Tx Hash</th></tr>
              </thead>
              <tbody>
                {[...ACTIVITY, ...ACTIVITY].map((a, i) => (
                  <tr key={i}>
                    <td><span className="tag">{a.type}</span></td>
                    <td>{a.pair}</td>
                    <td style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }}>{a.amount}</td>
                    <td>{a.value}</td>
                    <td style={{ color: 'var(--text-muted)' }}>{a.time}</td>
                    <td><span className="address">0x{Math.random().toString(16).slice(2, 8)}…</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'notifications' && (
        <div style={{ maxWidth: 600 }}>
          {[
            { title: 'Position out of range', msg: 'Your DAI/USDC position is out of price range. Consider adjusting.', unread: true, time: '5 min ago' },
            { title: 'Fees collected', msg: 'Successfully collected $52.80 in fees from WBTC/ETH pool.', unread: true, time: '3 hr ago' },
            { title: 'Price alert', msg: 'ETH price crossed $1,800 threshold.', unread: false, time: '1 day ago' },
            { title: 'New feature available', msg: 'Developer dashboard now includes contract interaction console.', unread: false, time: '2 days ago' },
          ].map((n, i) => (
            <div key={i} className="notification">
              <div className={`notification-dot ${n.unread ? 'unread' : 'read'}`}></div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 4 }}>{n.title}</div>
                <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{n.msg}</div>
                <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 4 }}>{n.time}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'settings' && (
        <div className="card" style={{ maxWidth: 500 }}>
          <div className="card-header"><div className="card-title">Account Settings</div></div>
          <div className="form-group">
            <label className="form-label">Display Name</label>
            <input className="form-input" defaultValue="0x742d…a7F3" />
          </div>
          <div className="form-group">
            <label className="form-label">Slippage Tolerance (%)</label>
            <input className="form-input" type="number" defaultValue="0.5" step="0.1" />
          </div>
          <div className="form-group">
            <label className="form-label">Transaction Deadline (minutes)</label>
            <input className="form-input" type="number" defaultValue="20" />
          </div>
          <div className="form-group">
            <label className="form-label">Default Network</label>
            <select className="form-input">
              <option>Ethereum Mainnet</option>
              <option>Arbitrum</option>
              <option>Optimism</option>
              <option>Polygon</option>
            </select>
          </div>
          <button className="btn btn-primary">Save Settings</button>
        </div>
      )}
    </div>
  )
}
