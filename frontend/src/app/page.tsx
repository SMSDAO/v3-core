'use client'
import AppShell from '@/components/AppShell'
import HomePage from '@/components/pages/HomePage'

export default function Page() {
  return (
    <AppShell activePage="home">
      <HomePage />
    </AppShell>
  )
}
