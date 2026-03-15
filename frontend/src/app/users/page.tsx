'use client'
import AppShell from '@/components/AppShell'
import UsersPage from '@/components/pages/UsersPage'

export default function Page() {
  return (
    <AppShell activePage="users">
      <UsersPage />
    </AppShell>
  )
}
