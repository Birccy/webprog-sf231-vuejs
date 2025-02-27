import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://gjjvctzydzgfiyiwktcv.supabase.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdqanZjdHp5ZHpnZml5aXdrdGN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA2MjE4NjQsImV4cCI6MjA1NjE5Nzg2NH0.6Npo4WRb59d5RnfuE7eIXPSCMoX-N9bBRK21nh-nB1s')