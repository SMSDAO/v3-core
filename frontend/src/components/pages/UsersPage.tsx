'use client'

const USERS = [
  { id: 1, address: '0x742d35Cc6634C0532925a3b8D4C9E5C4a2b8a7F3', name: 'Alice', role: 'admin', status: 'active', joined: '2024-01-15' },
  { id: 2, address: '0xAbC123def456789012345678901234567890abcd', name: 'Bob', role: 'developer', status: 'active', joined: '2024-02-10' },
  { id: 3, address: '0x1234567890abcdef1234567890abcdef12345678', name: 'Carol', role: 'user', status: 'active', joined: '2024-03-05' },
  { id: 4, address: '0xFedCba9876543210fedcba9876543210FedCba98', name: 'Dave', role: 'auditor', status: 'active', joined: '2024-03-12' },
  { id: 5, address: '0x9999888877776666555544443333222211110000', name: 'Eve', role: 'user', status: 'inactive', joined: '2024-01-20' },
]

export default function UsersPage() {
  return (
    <div className="page-container">
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 className="page-title">Users</h1>
          <p className="page-subtitle">Manage user accounts and access levels</p>
        </div>
        <button className="btn btn-primary">+ Invite User</button>
      </div>

      <div className="grid-4" style={{ marginBottom: 24 }}>
        <div className="stat-card">
          <div className="stat-label">Total Users</div>
          <div className="stat-value">5</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Active</div>
          <div className="stat-value" style={{ color: 'var(--accent-success)' }}>4</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Inactive</div>
          <div className="stat-value" style={{ color: 'var(--accent-danger)' }}>1</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Admins</div>
          <div className="stat-value">1</div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <div className="card-title">All Users</div>
          <div style={{ display: 'flex', gap: 8 }}>
            <input className="form-input" style={{ padding: '6px 12px' }} placeholder="Search users..." aria-label="Search users" />
            <select className="form-input" style={{ padding: '6px 12px', width: 120 }} aria-label="Filter by role">
              <option value="">All roles</option>
              <option value="admin">Admin</option>
              <option value="developer">Developer</option>
              <option value="user">User</option>
              <option value="auditor">Auditor</option>
            </select>
          </div>
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Wallet Address</th>
                <th>Role</th>
                <th>Status</th>
                <th>Joined</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {USERS.map((u) => (
                <tr key={u.id}>
                  <td style={{ fontWeight: 600 }}>{u.name}</td>
                  <td><span className="address">{u.address.slice(0, 6)}…{u.address.slice(-4)}</span></td>
                  <td><span className={`badge badge-${u.role}`}>{u.role.charAt(0).toUpperCase() + u.role.slice(1)}</span></td>
                  <td><span className={`badge badge-${u.status}`}>{u.status.charAt(0).toUpperCase() + u.status.slice(1)}</span></td>
                  <td style={{ color: 'var(--text-muted)' }}>{u.joined}</td>
                  <td>
                    <div style={{ display: 'flex', gap: 6 }}>
                      <button className="btn btn-ghost btn-sm">Edit</button>
                      <button className="btn btn-ghost btn-sm">Permissions</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
