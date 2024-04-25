import { SupabaseClient } from '@supabase/supabase-js'

const isUserLoggedIn = async (supabase: SupabaseClient): Promise<boolean> => {
  const {
    data: { user },
  } = await supabase.auth.getUser()
  return !!user
}

export { isUserLoggedIn }
