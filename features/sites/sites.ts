import { createSupabaseServerClient } from "@/lib/db/server-client";

const supabase = await createSupabaseServerClient();

export async function fetchSites() {
  const { data, error } = await supabase.from("sites").select("*");
  if (error) throw error;
  return data ?? [];
}

export async function fetchSiteById(id: string) {
  const { data, error } = await supabase.from("sites").select("*").eq("id", id).single();
  if (error) throw error;
  return data;
}
