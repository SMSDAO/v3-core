'use client'
import AppShell from '@/components/AppShell'
import AdminDashboard from '@/components/pages/AdminDashboard'

export default function Page() {
  return (
    <AppShell activePage="admin">
      <AdminDashboard />
    </AppShell>
  )
}
