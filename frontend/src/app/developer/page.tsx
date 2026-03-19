'use client'
import AppShell from '@/components/AppShell'
import DeveloperDashboard from '@/components/pages/DeveloperDashboard'

export default function Page() {
  return (
    <AppShell activePage="developer">
      <DeveloperDashboard />
    </AppShell>
  )
}
