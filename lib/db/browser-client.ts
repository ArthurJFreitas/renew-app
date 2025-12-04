"use client";

import { createBrowserClient } from "@supabase/ssr";
import type { SupabaseClient } from "@supabase/supabase-js";

type SupaBaseSchema = Record<string, never>;

let client: SupabaseClient<SupaBaseSchema> | null = null;

export function getSupabaseClientBrowser(): SupabaseClient<SupaBaseSchema> {
  if(client) {
    return client;
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if(!supabaseUrl || !supabaseKey) {
    throw new Error("SUPABASE_URL and SUPABASE_KEY environment variables are required");
  }

  client = createBrowserClient<SupaBaseSchema>(supabaseUrl, supabaseKey);

  return client;
}