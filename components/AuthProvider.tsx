"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getSupabaseClientBrowser } from "@/lib/db/browser-client";

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const supabase = getSupabaseClientBrowser();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === "SIGNED_IN" && session) {
          router.push("/dashboard");
        } else if (event === "SIGNED_OUT") {
          router.push("/");
        } else if (event === "TOKEN_REFRESHED") {
          console.log("Session refreshed");
        }
      }
    );

    return () => {
      subscription?.unsubscribe();
    };
  }, [router, supabase]);

  return <>{children}</>;
}
