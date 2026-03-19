# Admin Guide

## Overview

This guide covers the administrative features of SMSDAO v3-core, accessible to users with the **Admin** or **Auditor** role.

---

## Accessing the Admin Dashboard

1. Log in with an account that has the **Admin** role.
2. Navigate to the **Admin** tab in the top navigation bar.
3. You will see the Admin Dashboard with system overview panels.

---

## User Management

### Viewing Users

In **Admin → Users**, you can:
- View all registered users with their roles and status
- Search and filter by role, status, or email
- Sort by registration date or last activity

### Creating Users

1. Click **Create User**.
2. Fill in the user's email address and display name.
3. Assign an initial role (Admin, Developer, User, Auditor).
4. Click **Create** — the user will receive an invitation email.

### Editing Users

1. Click on a user's row or the **Edit** icon.
2. Modify the user's role or status.
3. Click **Save**.

### Deactivating Users

1. Select the user and click **Deactivate**.
2. The user will lose access immediately. Their data is preserved.

---

## Role Management

SMSDAO v3-core uses **Role-Based Access Control (RBAC)** with four roles:

| Role        | Description |
|-------------|-------------|
| **Admin**   | Full access — user management, billing, config, all dashboards |
| **Developer** | Contract console, API monitoring, environment management |
| **User**    | Dashboard, swap, liquidity, account settings |
| **Auditor** | Read-only access to audit logs, contract monitoring, user activity |

### Assigning Roles

1. Go to **Admin → Role Management**.
2. Select a user.
3. Choose their new role from the dropdown.
4. Click **Assign Role**.

---

## Permission Management

Fine-grained permissions can be layered on top of roles.

1. Go to **Admin → Permissions**.
2. Select a role or a specific user.
3. Toggle individual permissions on/off.
4. Save changes.

---

## Billing Controls

In **Admin → Billing**:
- View current usage metrics per user
- Set usage limits or quotas
- View billing history and invoices
- Export billing reports (CSV)

---

## Contract Monitoring

In **Admin → Contract Monitor**:
- View factory events (pool creation)
- Monitor pool statistics (TVL, volume, fees)
- Watch for unusual activity or errors

---

## API Monitoring

In **Admin → API Monitor**:
- View real-time API request metrics
- Identify slow or failing endpoints
- Review rate limiting events
- Export API logs

---

## Audit Logs

In **Admin → Audit Logs**:
- View a full history of admin actions
- Filter by user, action type, or date range
- Export audit logs for compliance

---

## Configuration Settings

In **Admin → Settings**:
- System-level configuration flags
- Feature toggles (enable/disable features)
- Maintenance mode switch
- Security settings (max login attempts, session timeout)

---

## Security Best Practices

- Assign the minimum necessary role to each user.
- Review audit logs weekly.
- Rotate API keys regularly.
- Enable multi-factor authentication for Admin accounts.
