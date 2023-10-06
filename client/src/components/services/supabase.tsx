import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://luvicyvgdfqsafhyynpv.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1dmljeXZnZGZxc2FmaHl5bnB2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY2MTg0NDAsImV4cCI6MjAxMjE5NDQ0MH0.o5mVKPPg7EOXJgKTyX-x0KDnp_nDTgXBPlfWxIIu0nY'
export const supabase = createClient(supabaseUrl, supabaseKey)
