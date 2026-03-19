# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

---

## [1.0.0] - 2026-03-15

### Added

- **CI/CD Workflows**
  - `ci.yml`: Full compile + test + lint pipeline triggered on push and pull_request
  - `security.yml`: Dependency vulnerability scanning, Solhint security rules, and secret scanning (Gitleaks) — runs on push, PR, and weekly schedule
  - `release.yml`: Production npm publish triggered on GitHub release event
- **Documentation** (`/docs` directory)
  - `architecture.md`: Contract architecture, pool/factory design, dependency graph
  - `deployment.md`: Deploy instructions, network configurations, reproducible build notes
  - `env-vars.md`: All required environment variables with descriptions
  - `user-guide.md`: How to connect wallets, perform swaps, manage liquidity
  - `admin-guide.md`: Admin dashboard usage, RBAC, user management, audit logs
  - `developer-guide.md`: Contributing guidelines, local setup, testing, CI reference
- **Frontend** (`/frontend` directory)
  - Next.js enterprise UI with Neo-Glow design system (soft glow, gradients, animations)
  - Tab-based navigation: Home | Dashboard | Users | Admin | Developer | Settings | Docs
  - **User Dashboard**: account overview, activity metrics, notifications, settings
  - **Admin Dashboard**: system overview, user management, roles, billing, audit logs, contract monitoring
  - **Developer Dashboard**: contract interaction console, API monitoring, log viewer, environment management
  - Wallet-based authentication (MetaMask/WalletConnect integration stubs)
  - RBAC with four roles: Admin, Developer, User, Auditor
  - Responsive, mobile-friendly, accessibility-compliant layouts
- **`CHANGELOG.md`**: Created with Keep-a-Changelog format

### Changed

- **GitHub Actions workflows** updated to use non-deprecated action versions:
  - `actions/checkout` → `v3`
  - `actions/setup-node` → `v3` (with built-in yarn cache support)
  - `actions/setup-python` → `v4`
  - Removed deprecated `actions/cache@v1` (replaced by `setup-node` built-in cache)
  - Replaced `wearerequired/lint-action` with direct `solhint` and `prettier` script calls
- **`package.json`**: Added `solhint` and `prettier` scripts for CI compatibility
- **`README.md`**: Expanded with quick-start, architecture overview, docs links, and UI preview section

### Fixed

- CI pipeline failures caused by deprecated `actions/cache@v1`, `actions/setup-node@v1`, and `actions/checkout@v1`

### Security

- Added dependency vulnerability scanning via `yarn audit` in `security.yml`
- Added secret scanning via Gitleaks in `security.yml`
- Audited `.env.example` — no real secrets present (only placeholder public URLs)
- Smart contracts are unchanged from the upstream Uniswap V3 Core audit baseline

---

## [1.0.1] - 2021-06-02 (upstream baseline)

- Original Uniswap V3 Core release (`@uniswap/v3-core@1.0.1`)

[Unreleased]: https://github.com/SMSDAO/v3-core/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/SMSDAO/v3-core/releases/tag/v1.0.0
[1.0.1]: https://github.com/Uniswap/uniswap-v3-core/releases/tag/v1.0.1
