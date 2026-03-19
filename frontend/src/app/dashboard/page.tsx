'use client'
import AppShell from '@/components/AppShell'
import UserDashboard from '@/components/pages/UserDashboard'

export default function Page() {
  return (
    <AppShell activePage="dashboard">
      <UserDashboard />
    </AppShell>
  )
}
