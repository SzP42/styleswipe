import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('supaBaseUrl', 'supaBaseKey')