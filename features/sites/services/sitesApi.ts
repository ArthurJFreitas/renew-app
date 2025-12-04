import { getSupabaseClientBrowser } from "@/lib/db/browser-client";

export async function fetchSites() {
  const supabase = await getSupabaseClientBrowser();
  const { data, error } = await supabase.from("sites").select("*");
  if (error) throw error;
  return data ?? [];
}

export async function fetchSiteById(id?: string) {
  if (!id) {
    throw new Error("Site ID is required");
  } 
  const supabase = await getSupabaseClientBrowser();
  const { data, error } = await supabase.from("sites").select("*").eq("id", id).single();
  if (error) throw error;
  return data;
}