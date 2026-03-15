'use client'
import { useRouter } from 'next/navigation'

interface AppShellProps {
  children: React.ReactNode
  activePage: string
}

const NAV_TABS = [
  { id: 'home', label: 'Home', href: '/', icon: '⬡' },
  { id: 'dashboard', label: 'Dashboard', href: '/dashboard', icon: '◈' },
  { id: 'users', label: 'Users', href: '/users', icon: '◉' },
  { id: 'admin', label: 'Admin', href: '/admin', icon: '⬟' },
  { id: 'developer', label: 'Developer', href: '/developer', icon: '⬢' },
  { id: 'settings', label: 'Settings', href: '/settings', icon: '⚙' },
  { id: 'docs', label: 'Docs', href: '/docs', icon: '◎' },
]

export default function AppShell({ children, activePage }: AppShellProps) {
  const router = useRouter()

  return (
    <div className="app-shell">
      {/* Navigation Bar */}
      <nav className="nav-bar" role="navigation" aria-label="Main navigation">
        <a className="nav-logo" href="/" aria-label="SMSDAO v3-core Home">
          <div className="logo-icon" aria-hidden="true">🦄</div>
          <span>SMSDAO v3</span>
        </a>

        <ul className="nav-tabs" role="tablist" aria-label="Page navigation">
          {NAV_TABS.map((tab) => (
            <li key={tab.id} role="presentation">
              <a
                href={tab.href}
                className={`nav-tab${activePage === tab.id ? ' active' : ''}`}
                role="tab"
                aria-selected={activePage === tab.id}
                aria-label={tab.label}
              >
                {tab.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <button className="btn btn-secondary btn-sm" aria-label="Connect wallet">
            Connect Wallet
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="mobile-nav" role="navigation" aria-label="Mobile navigation">
        {NAV_TABS.map((tab) => (
          <a
            key={tab.id}
            href={tab.href}
            className={`mobile-nav-item${activePage === tab.id ? ' active' : ''}`}
            aria-label={tab.label}
          >
            <span className="mobile-nav-icon" aria-hidden="true">{tab.icon}</span>
            <span>{tab.label}</span>
          </a>
        ))}
      </nav>

      {/* Footer */}
      <footer className="footer">
        <span>SMSDAO v3-core © 2026 — Enterprise Edition v1.0.0</span>
      </footer>
    </div>
  )
}
