# Environment Variables

All environment variables required for this project.

---

## Smart Contract / Hardhat

| Variable            | Required | Description |
|---------------------|----------|-------------|
| `INFURA_API_KEY`    | For network deployment | Infura project API key for RPC access |
| `ETHERSCAN_API_KEY` | For contract verification | Etherscan API key for `hardhat-etherscan` |

---

## Frontend (Next.js)

| Variable                  | Required | Default | Description |
|---------------------------|----------|---------|-------------|
| `NEXT_PUBLIC_RPC_URL`     | Yes      | —       | Public RPC URL for the frontend to connect to (e.g. `https://base-sepolia.publicnode.com`) |
| `NEXT_PUBLIC_API_URL`     | Yes      | —       | Backend API base URL (e.g. `https://demo.castquest.app/api`) |
| `NEXT_PUBLIC_ENV`         | No       | `production` | Deployment environment label (`demo`, `staging`, `production`) |
| `NEXT_PUBLIC_CHAIN_ID`    | No       | `1`     | Default EVM chain ID |

---

## Authentication

| Variable            | Required | Description |
|---------------------|----------|-------------|
| `JWT_SECRET`        | Yes (prod) | Secret key for signing JWT tokens |
| `JWT_EXPIRES_IN`    | No       | Token expiry duration (default: `7d`) |
| `BCRYPT_ROUNDS`     | No       | bcrypt salt rounds for password hashing (default: `12`) |

---

## CI/CD Secrets

The following secrets must be configured in GitHub repository settings:

| Secret              | Description |
|---------------------|-------------|
| `NPM_TOKEN`         | npm publish token for release workflow |
| `MYTHX_API_KEY`     | MythX API key for security analysis workflow |
| `GITLEAKS_LICENSE`  | Gitleaks license key for secret scanning (optional for public repos) |

---

## Example `.env` file

```bash
# Copy from .env.example and fill in your values
INFURA_API_KEY=your_infura_api_key_here
ETHERSCAN_API_KEY=your_etherscan_api_key_here

NEXT_PUBLIC_RPC_URL=https://base-sepolia.publicnode.com
NEXT_PUBLIC_API_URL=https://your-api.example.com/api
NEXT_PUBLIC_ENV=development
NEXT_PUBLIC_CHAIN_ID=1

JWT_SECRET=change_me_to_a_long_random_secret
JWT_EXPIRES_IN=7d
BCRYPT_ROUNDS=12
```

> ⚠️ **Never commit real secrets to source control.** Add `.env` to `.gitignore`.
