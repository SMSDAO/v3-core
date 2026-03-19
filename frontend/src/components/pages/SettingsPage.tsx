'use client'
import { useState } from 'react'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('account')

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Settings</h1>
        <p className="page-subtitle">Configure your preferences and account settings</p>
      </div>

      <div className="sub-tabs">
        {['account', 'security', 'notifications', 'api-keys'].map((t) => (
          <button key={t} className={`sub-tab${activeTab === t ? ' active' : ''}`} onClick={() => setActiveTab(t)}>
            {t.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
          </button>
        ))}
      </div>

      {activeTab === 'account' && (
        <div className="card" style={{ maxWidth: 500 }}>
          <div className="card-header"><div className="card-title">Account Settings</div></div>
          <div className="form-group">
            <label className="form-label">Display Name</label>
            <input className="form-input" defaultValue="Alice" />
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input className="form-input" type="email" defaultValue="alice@example.com" />
          </div>
          <div className="form-group">
            <label className="form-label">Preferred Network</label>
            <select className="form-input">
              <option>Ethereum Mainnet</option>
              <option>Arbitrum</option>
              <option>Optimism</option>
              <option>Polygon</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Slippage Tolerance (%)</label>
            <input className="form-input" type="number" defaultValue="0.5" step="0.1" min="0" max="50" />
          </div>
          <div className="form-group">
            <label className="form-label">Transaction Deadline (minutes)</label>
            <input className="form-input" type="number" defaultValue="20" min="1" max="60" />
          </div>
          <button className="btn btn-primary">Save Changes</button>
        </div>
      )}

      {activeTab === 'security' && (
        <div className="card" style={{ maxWidth: 500 }}>
          <div className="card-header"><div className="card-title">Security Settings</div></div>
          <div className="form-group">
            <label className="form-label">Current Password</label>
            <input className="form-input" type="password" placeholder="Enter current password" />
          </div>
          <div className="form-group">
            <label className="form-label">New Password</label>
            <input className="form-input" type="password" placeholder="Enter new password" />
          </div>
          <div className="form-group">
            <label className="form-label">Confirm New Password</label>
            <input className="form-input" type="password" placeholder="Confirm new password" />
          </div>
          <div className="divider"></div>
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontWeight: 600, marginBottom: 8 }}>Two-Factor Authentication</div>
            <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 12 }}>
              Protect your account with an additional verification step.
            </p>
            <button className="btn btn-secondary">Enable 2FA</button>
          </div>
          <div className="divider"></div>
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontWeight: 600, marginBottom: 8 }}>Active Sessions</div>
            {[
              { device: 'Chrome / macOS', ip: '192.168.1.42', time: 'Now', current: true },
              { device: 'Safari / iPhone', ip: '10.0.0.5', time: '2 hr ago', current: false },
            ].map((s, i) => (
              <div key={i} className="metric-row">
                <div>
                  <div style={{ fontSize: 13 }}>{s.device}</div>
                  <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{s.ip} · {s.time}</div>
                </div>
                {s.current
                  ? <span className="badge badge-active">Current</span>
                  : <button className="btn btn-danger btn-sm">Revoke</button>
                }
              </div>
            ))}
          </div>
          <button className="btn btn-primary">Update Password</button>
        </div>
      )}

      {activeTab === 'notifications' && (
        <div className="card" style={{ maxWidth: 500 }}>
          <div className="card-header"><div className="card-title">Notification Preferences</div></div>
          {[
            { label: 'Position out of range', enabled: true },
            { label: 'Fee earnings threshold', enabled: true },
            { label: 'Price alerts', enabled: false },
            { label: 'System announcements', enabled: true },
            { label: 'Security events', enabled: true },
            { label: 'New feature releases', enabled: false },
          ].map((n, i) => (
            <div key={i} className="metric-row">
              <div style={{ fontSize: 13 }}>{n.label}</div>
              <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
                <input type="checkbox" defaultChecked={n.enabled} aria-label={n.label} />
                <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{n.enabled ? 'Enabled' : 'Disabled'}</span>
              </label>
            </div>
          ))}
          <div style={{ marginTop: 16 }}>
            <button className="btn btn-primary">Save Preferences</button>
          </div>
        </div>
      )}

      {activeTab === 'api-keys' && (
        <div className="card">
          <div className="card-header">
            <div className="card-title">API Keys</div>
            <button className="btn btn-primary btn-sm">Generate New Key</button>
          </div>
          <div className="table-container">
            <table>
              <thead><tr><th>Name</th><th>Key</th><th>Scopes</th><th>Created</th><th>Last Used</th><th>Actions</th></tr></thead>
              <tbody>
                {[
                  { name: 'Production', key: 'sk_prod_****1234', scopes: ['read', 'write'], created: '2024-01-15', used: '2 min ago' },
                  { name: 'Development', key: 'sk_dev_****5678', scopes: ['read'], created: '2024-02-20', used: '1 hr ago' },
                ].map((k, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: 600 }}>{k.name}</td>
                    <td><span className="address">{k.key}</span></td>
                    <td>{k.scopes.map(s => <span key={s} className="tag" style={{ marginRight: 4 }}>{s}</span>)}</td>
                    <td style={{ color: 'var(--text-muted)' }}>{k.created}</td>
                    <td style={{ color: 'var(--text-muted)' }}>{k.used}</td>
                    <td><button className="btn btn-danger btn-sm">Revoke</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
