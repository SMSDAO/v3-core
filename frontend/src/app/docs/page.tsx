'use client'
import AppShell from '@/components/AppShell'
import DocsPage from '@/components/pages/DocsPage'

export default function Page() {
  return (
    <AppShell activePage="docs">
      <DocsPage />
    </AppShell>
  )
}
