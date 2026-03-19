'use client'
import AppShell from '@/components/AppShell'
import SettingsPage from '@/components/pages/SettingsPage'

export default function Page() {
  return (
    <AppShell activePage="settings">
      <SettingsPage />
    </AppShell>
  )
}
