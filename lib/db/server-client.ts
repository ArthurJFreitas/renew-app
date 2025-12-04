import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

function getEnvironmentVariable() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if(!supabaseUrl || !supabaseKey) {
    throw new Error("SUPABASE_URL and SUPABASE_KEY environment variables are required");
  }

  return {
    supabaseUrl,
    supabaseKey,
  };
}

export async function createSupabaseServerClient(){
  const { supabaseUrl, supabaseKey } = getEnvironmentVariable();
  const cookieStore = await cookies();

  return createServerClient(supabaseUrl, supabaseKey, {
    cookies: {
      getAll(){
        return cookieStore.getAll()
      },
      setAll(cookiesToSet){
        try {
          cookiesToSet.forEach(({name, value, options}) => {  
            cookieStore.set(name, value, options);
          });
        } catch (error) {
          console.error("Error setting cookies", error);
        }
      }
    },
  }); 
};