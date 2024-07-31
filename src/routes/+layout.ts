import { createBrowserClient, createServerClient, isBrowser } from '@supabase/ssr'
const PUBLIC_SUPABASE_URL= "https://osqqfemzutaowfkjlymx.supabase.co"
const PUBLIC_SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9zcXFmZW16dXRhb3dma2pseW14Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUzMzkyMTcsImV4cCI6MjAzMDkxNTIxN30.AkhcJ04st3OQ7QYz7224YIcdZeynLYO6aKFPw_Jsasg"

import type { LayoutLoad } from './$types'

export const load: LayoutLoad = async ({ data, depends, fetch }) => {
  /**
   * Declare a dependency so the layout can be invalidated, for example, on
   * session refresh.
   */
  depends('supabase:auth')

  const supabase = isBrowser()
    ? createBrowserClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
        global: {
          fetch,
        },
      })
    : createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
        global: {
          fetch,
        },
        cookies: {
          getAll() {
            return data.cookies
          },
        },
      })

  /**
   * It's fine to use `getSession` here, because on the client, `getSession` is
   * safe, and on the server, it reads `session` from the `LayoutData`, which
   * safely checked the session using `safeGetSession`.
   */
  const {
    data: { session },
  } = await supabase.auth.getSession()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return { session, supabase, user }
}