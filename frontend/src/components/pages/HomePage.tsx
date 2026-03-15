'use client'

export default function HomePage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Welcome to SMSDAO v3-core</h1>
        <p className="page-subtitle">Enterprise Uniswap V3 Core protocol management platform</p>
      </div>

      {/* Hero Section */}
      <div className="card card-glow" style={{ marginBottom: 24, padding: '40px 32px', textAlign: 'center' }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>🦄</div>
        <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 12, background: 'linear-gradient(135deg, #6c63ff, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Uniswap V3 Core — Enterprise Edition
        </h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: 600, margin: '0 auto 24px', lineHeight: 1.8 }}>
          Manage, monitor, and interact with Uniswap V3 liquidity pools. Built for enterprises with
          role-based access control, real-time monitoring, and comprehensive audit capabilities.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/dashboard" className="btn btn-primary">Open Dashboard</a>
          <a href="/docs" className="btn btn-secondary">View Docs</a>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid-3" style={{ marginBottom: 24 }}>
        <div className="card">
          <div style={{ fontSize: 32, marginBottom: 12 }}>📊</div>
          <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>Live Pool Monitoring</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: 13 }}>
            Real-time statistics for all deployed liquidity pools including TVL, volume, and fee earnings.
          </p>
        </div>
        <div className="card">
          <div style={{ fontSize: 32, marginBottom: 12 }}>🔐</div>
          <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>Enterprise RBAC</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: 13 }}>
            Role-based access control with Admin, Developer, User, and Auditor roles.
          </p>
        </div>
        <div className="card">
          <div style={{ fontSize: 32, marginBottom: 12 }}>🛠</div>
          <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>Developer Console</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: 13 }}>
            Interact with smart contracts directly from the browser with the integrated contract console.
          </p>
        </div>
        <div className="card">
          <div style={{ fontSize: 32, marginBottom: 12 }}>🔍</div>
          <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>Audit Logs</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: 13 }}>
            Full audit trail of all administrative actions, user activities, and system events.
          </p>
        </div>
        <div className="card">
          <div style={{ fontSize: 32, marginBottom: 12 }}>⚡</div>
          <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>High Performance</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: 13 }}>
            Optimized queries, caching, pagination, and lazy loading for enterprise-scale data.
          </p>
        </div>
        <div className="card">
          <div style={{ fontSize: 32, marginBottom: 12 }}>📱</div>
          <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>Mobile Ready</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: 13 }}>
            Responsive design with touch-optimized mobile layout and PWA support.
          </p>
        </div>
      </div>

      {/* Protocol Stats */}
      <div className="card">
        <div className="card-header">
          <div>
            <div className="card-title">Protocol Overview</div>
            <div className="card-subtitle">Uniswap V3 Core — Solidity 0.7.6</div>
          </div>
          <span className="badge badge-active">Live</span>
        </div>
        <div className="grid-4">
          <div>
            <div className="stat-label">Fee Tiers</div>
            <div className="stat-value" style={{ fontSize: 20 }}>3</div>
            <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 4 }}>0.05% · 0.30% · 1.00%</div>
          </div>
          <div>
            <div className="stat-label">Solidity Version</div>
            <div className="stat-value" style={{ fontSize: 20 }}>0.7.6</div>
            <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 4 }}>Optimizer: 800 runs</div>
          </div>
          <div>
            <div className="stat-label">Core Contracts</div>
            <div className="stat-value" style={{ fontSize: 20 }}>4</div>
            <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 4 }}>Factory · Pool · Deployer · Guard</div>
          </div>
          <div>
            <div className="stat-label">Libraries</div>
            <div className="stat-value" style={{ fontSize: 20 }}>14</div>
            <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 4 }}>Math · Oracle · Tick · Swap</div>
          </div>
        </div>
      </div>
    </div>
  )
}
