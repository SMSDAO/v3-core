'use client'
import { useState } from 'react'

const USERS = [
  { id: 1, address: '0x742d35Cc6634C0532925a3b8D4C9E5C4a2b8a7F3', name: 'Alice', role: 'admin', status: 'active', joined: '2024-01-15', lastSeen: '2 min ago' },
  { id: 2, address: '0xAbC123def456789012345678901234567890abcd', name: 'Bob', role: 'developer', status: 'active', joined: '2024-02-10', lastSeen: '1 hr ago' },
  { id: 3, address: '0x1234567890abcdef1234567890abcdef12345678', name: 'Carol', role: 'user', status: 'active', joined: '2024-03-05', lastSeen: '3 hr ago' },
  { id: 4, address: '0xFedCba9876543210fedcba9876543210FedCba98', name: 'Dave', role: 'auditor', status: 'active', joined: '2024-03-12', lastSeen: '1 day ago' },
  { id: 5, address: '0x9999888877776666555544443333222211110000', name: 'Eve', role: 'user', status: 'inactive', joined: '2024-01-20', lastSeen: '30 days ago' },
]
const AUDIT_LOGS = [
  { user: 'Alice', action: 'User role updated', target: 'Dave → Auditor', time: '10 min ago' },
  { user: 'Alice', action: 'Feature flag enabled', target: 'developer_console', time: '1 hr ago' },
  { user: 'Bob', action: 'Environment config changed', target: 'RPC_URL', time: '2 hr ago' },
  { user: 'Alice', action: 'User deactivated', target: 'Eve', time: '2 days ago' },
  { user: 'Alice', action: 'User created', target: 'Dave', time: '3 days ago' },
]
const POOL_STATS = [
  { pair: 'USDC/ETH', fee: '0.05%', tvl: '$125.4M', volume24h: '$18.2M', fees24h: '$9.1K' },
  { pair: 'WBTC/ETH', fee: '0.30%', tvl: '$84.7M', volume24h: '$12.5M', fees24h: '$37.5K' },
  { pair: 'DAI/USDC', fee: '0.05%', tvl: '$210.8M', volume24h: '$45.2M', fees24h: '$22.6K' },
]

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="page-container">
      <div className="page-header" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div>
          <h1 className="page-title">Admin Dashboard</h1>
          <p className="page-subtitle">System administration and control center</p>
        </div>
        <span className="badge badge-admin">Admin Access</span>
      </div>

      <div className="sub-tabs">
        {['overview', 'users', 'roles', 'billing', 'contracts', 'api', 'audit', 'config'].map((t) => (
          <button key={t} className={`sub-tab${activeTab === t ? ' active' : ''}`} onClick={() => setActiveTab(t)}>
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {activeTab === 'overview' && (
        <>
          <div className="grid-4" style={{ marginBottom: 24 }}>
            <div className="stat-card">
              <div className="stat-icon" style={{ background: 'rgba(108, 99, 255, 0.15)' }}>👥</div>
              <div className="stat-label">Total Users</div>
              <div className="stat-value">5</div>
              <div className="stat-change positive">↑ +2 this month</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon" style={{ background: 'rgba(0, 212, 255, 0.1)' }}>◈</div>
              <div className="stat-label">Active Pools</div>
              <div className="stat-value">3</div>
              <div className="stat-change positive">↑ All healthy</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon" style={{ background: 'rgba(0, 230, 118, 0.1)' }}>$</div>
              <div className="stat-label">Total TVL</div>
              <div className="stat-value">$420.9M</div>
              <div className="stat-change positive">↑ +3.2% 24h</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon" style={{ background: 'rgba(255, 171, 0, 0.1)' }}>📋</div>
              <div className="stat-label">Audit Events (24h)</div>
              <div className="stat-value">12</div>
              <div className="stat-change">No anomalies</div>
            </div>
          </div>

          <div className="grid-2" style={{ marginBottom: 24 }}>
            <div className="card">
              <div className="card-header"><div className="card-title">User Role Distribution</div></div>
              {[
                { role: 'Admin', count: 1, color: 'var(--accent-primary)', pct: 20 },
                { role: 'Developer', count: 1, color: 'var(--accent-secondary)', pct: 20 },
                { role: 'User', count: 2, color: 'var(--accent-success)', pct: 40 },
                { role: 'Auditor', count: 1, color: 'var(--accent-warning)', pct: 20 },
              ].map((r) => (
                <div key={r.role} style={{ marginBottom: 12 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                    <span style={{ fontSize: 13 }}>{r.role}</span>
                    <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{r.count} user{r.count !== 1 ? 's' : ''}</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${r.pct}%`, background: r.color }}></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="card">
              <div className="card-header"><div className="card-title">Recent Audit Events</div></div>
              {AUDIT_LOGS.slice(0, 3).map((l, i) => (
                <div key={i} className="metric-row">
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 500 }}>{l.action}</div>
                    <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{l.user} → {l.target}</div>
                  </div>
                  <div style={{ fontSize: 11, color: 'var(--text-muted)', textAlign: 'right' }}>{l.time}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <div className="card-title">Contract Monitor — Active Pools</div>
              <span className="badge badge-active">All Healthy</span>
            </div>
            <div className="table-container">
              <table>
                <thead><tr><th>Pair</th><th>Fee</th><th>TVL</th><th>24h Volume</th><th>24h Fees</th><th>Status</th></tr></thead>
                <tbody>
                  {POOL_STATS.map((p, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight: 600 }}>{p.pair}</td>
                      <td><span className="tag">{p.fee}</span></td>
                      <td>{p.tvl}</td>
                      <td>{p.volume24h}</td>
                      <td style={{ color: 'var(--accent-success)' }}>{p.fees24h}</td>
                      <td><span className="badge badge-active">Healthy</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {activeTab === 'users' && (
        <div className="card">
          <div className="card-header">
            <div className="card-title">User Management</div>
            <button className="btn btn-primary btn-sm">+ Create User</button>
          </div>
          <div className="table-container">
            <table>
              <thead><tr><th>User</th><th>Wallet Address</th><th>Role</th><th>Status</th><th>Joined</th><th>Last Seen</th><th>Actions</th></tr></thead>
              <tbody>
                {USERS.map((u) => (
                  <tr key={u.id}>
                    <td style={{ fontWeight: 600 }}>{u.name}</td>
                    <td><span className="address">{u.address.slice(0,6)}…{u.address.slice(-4)}</span></td>
                    <td><span className={`badge badge-${u.role}`}>{u.role.charAt(0).toUpperCase()+u.role.slice(1)}</span></td>
                    <td><span className={`badge badge-${u.status}`}>{u.status.charAt(0).toUpperCase()+u.status.slice(1)}</span></td>
                    <td style={{ color: 'var(--text-muted)' }}>{u.joined}</td>
                    <td style={{ color: 'var(--text-muted)' }}>{u.lastSeen}</td>
                    <td>
                      <div style={{ display: 'flex', gap: 6 }}>
                        <button className="btn btn-ghost btn-sm">Edit</button>
                        <button className="btn btn-danger btn-sm">{u.status === 'active' ? 'Deactivate' : 'Activate'}</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'roles' && (
        <div className="card">
          <div className="card-header"><div className="card-title">Role Management</div></div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { role: 'Admin', badge: 'badge-admin', perms: ['All permissions', 'User management', 'Billing controls', 'System configuration', 'Contract monitoring'] },
              { role: 'Developer', badge: 'badge-developer', perms: ['Contract console', 'API monitoring', 'Log viewer', 'Environment management', 'Integration testing'] },
              { role: 'User', badge: 'badge-user', perms: ['Dashboard access', 'Swap execution', 'Liquidity management', 'Account settings', 'Notifications'] },
              { role: 'Auditor', badge: 'badge-auditor', perms: ['Read-only access', 'Audit log viewing', 'Contract monitoring', 'User activity review', 'Export reports'] },
            ].map((r) => (
              <div key={r.role} style={{ background: 'var(--bg-secondary)', borderRadius: 'var(--radius-sm)', padding: 16, border: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <span className={`badge ${r.badge}`}>{r.role}</span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {r.perms.map((p) => <span key={p} className="tag">{p}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'billing' && (
        <>
          <div className="grid-3" style={{ marginBottom: 24 }}>
            <div className="stat-card">
              <div className="stat-label">Monthly Revenue</div>
              <div className="stat-value">$12,450</div>
              <div className="stat-change positive">↑ +8.3% vs last month</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Active Subscriptions</div>
              <div className="stat-value">4</div>
              <div className="stat-change">0 overdue</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">API Calls (30d)</div>
              <div className="stat-value">2.4M</div>
              <div className="stat-change positive">↑ +12% MoM</div>
            </div>
          </div>
          <div className="card">
            <div className="card-header"><div className="card-title">Usage by User</div></div>
            <div className="table-container">
              <table>
                <thead><tr><th>User</th><th>Plan</th><th>API Calls</th><th>Usage %</th><th>Next Billing</th></tr></thead>
                <tbody>
                  {USERS.filter(u => u.status === 'active').map((u) => (
                    <tr key={u.id}>
                      <td>{u.name}</td>
                      <td><span className={`badge badge-${u.role}`}>{u.role.charAt(0).toUpperCase()+u.role.slice(1)}</span></td>
                      <td>{Math.floor(Math.random() * 500000 + 100000).toLocaleString()}</td>
                      <td>
                        <div className="progress-bar" style={{ width: 80 }}>
                          <div className="progress-fill" style={{ width: `${Math.floor(Math.random() * 80 + 10)}%` }}></div>
                        </div>
                      </td>
                      <td style={{ color: 'var(--text-muted)' }}>2026-04-01</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {activeTab === 'contracts' && (
        <div className="card">
          <div className="card-header">
            <div className="card-title">Contract Monitor</div>
            <span className="badge badge-active">Live</span>
          </div>
          <div className="table-container">
            <table>
              <thead><tr><th>Pair</th><th>Fee</th><th>Address</th><th>TVL</th><th>24h Volume</th><th>Fees</th><th>Status</th></tr></thead>
              <tbody>
                {POOL_STATS.map((p, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: 600 }}>{p.pair}</td>
                    <td><span className="tag">{p.fee}</span></td>
                    <td><span className="address">0x{Math.random().toString(16).slice(2, 10)}…</span></td>
                    <td>{p.tvl}</td>
                    <td>{p.volume24h}</td>
                    <td style={{ color: 'var(--accent-success)' }}>{p.fees24h}</td>
                    <td><span className="badge badge-active">Healthy</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'api' && (
        <>
          <div className="grid-4" style={{ marginBottom: 24 }}>
            <div className="stat-card">
              <div className="stat-label">Req/min (avg)</div>
              <div className="stat-value">284</div>
              <div className="stat-change positive">↑ Normal</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Error Rate</div>
              <div className="stat-value" style={{ color: 'var(--accent-success)' }}>0.12%</div>
              <div className="stat-change positive">↓ Low</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Avg Latency</div>
              <div className="stat-value">42ms</div>
              <div className="stat-change positive">✓ Fast</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Rate Limited (24h)</div>
              <div className="stat-value">7</div>
              <div className="stat-change">Normal</div>
            </div>
          </div>
          <div className="card">
            <div className="card-header"><div className="card-title">Top Endpoints</div></div>
            <div className="table-container">
              <table>
                <thead><tr><th>Endpoint</th><th>Method</th><th>Calls/min</th><th>Avg Latency</th><th>Error Rate</th></tr></thead>
                <tbody>
                  {[
                    { ep: '/api/pools', m: 'GET', cpm: 92, lat: '22ms', err: '0%' },
                    { ep: '/api/swap', m: 'POST', cpm: 45, lat: '58ms', err: '0.3%' },
                    { ep: '/api/positions', m: 'GET', cpm: 38, lat: '31ms', err: '0%' },
                    { ep: '/api/users', m: 'GET', cpm: 21, lat: '18ms', err: '0%' },
                    { ep: '/api/factory/events', m: 'GET', cpm: 15, lat: '42ms', err: '0.1%' },
                  ].map((r, i) => (
                    <tr key={i}>
                      <td><span className="code-block" style={{ padding: '2px 6px', display: 'inline', fontSize: 12 }}>{r.ep}</span></td>
                      <td><span className="tag">{r.m}</span></td>
                      <td>{r.cpm}</td>
                      <td>{r.lat}</td>
                      <td style={{ color: r.err === '0%' ? 'var(--accent-success)' : 'var(--accent-warning)' }}>{r.err}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {activeTab === 'audit' && (
        <div className="card">
          <div className="card-header">
            <div className="card-title">Audit Log</div>
            <button className="btn btn-ghost btn-sm">Export CSV</button>
          </div>
          <div className="table-container">
            <table>
              <thead><tr><th>User</th><th>Action</th><th>Target</th><th>Time</th><th>IP</th></tr></thead>
              <tbody>
                {[...AUDIT_LOGS, ...AUDIT_LOGS].map((l, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: 600 }}>{l.user}</td>
                    <td>{l.action}</td>
                    <td><span className="tag">{l.target}</span></td>
                    <td style={{ color: 'var(--text-muted)' }}>{l.time}</td>
                    <td style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)' }}>192.168.1.{Math.floor(Math.random()*255)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'config' && (
        <div className="card" style={{ maxWidth: 600 }}>
          <div className="card-header"><div className="card-title">System Configuration</div></div>
          <div className="form-group">
            <label className="form-label">Maintenance Mode</label>
            <select className="form-input"><option>Disabled</option><option>Enabled</option></select>
          </div>
          <div className="form-group">
            <label className="form-label">Max Login Attempts</label>
            <input className="form-input" type="number" defaultValue="5" />
          </div>
          <div className="form-group">
            <label className="form-label">Session Timeout (minutes)</label>
            <input className="form-input" type="number" defaultValue="60" />
          </div>
          <div className="form-group">
            <label className="form-label">Rate Limit (requests/minute)</label>
            <input className="form-input" type="number" defaultValue="100" />
          </div>
          <div className="form-group">
            <label className="form-label">Default Network</label>
            <select className="form-input">
              <option>Ethereum Mainnet</option>
              <option>Arbitrum</option>
              <option>Optimism</option>
            </select>
          </div>
          <button className="btn btn-primary">Save Configuration</button>
        </div>
      )}
    </div>
  )
}
