import React from 'react'
import { createServerClient } from '@/utils/supabase'
import { cookies } from 'next/headers'
import AdminLayout from '@/app/(admin)/layout'
import AdminDashboard from '@/app/(admin)/admin-dashboard'

// this page will be the context switch and will render the
// appropriate page based on the user's role
const MainPageSwitcher = async () => {
  const supabase = createServerClient(cookies())
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <AdminLayout>
      <AdminDashboard />
    </AdminLayout>
  )
}

export default MainPageSwitcher
