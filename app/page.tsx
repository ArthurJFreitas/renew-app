import AuthPage from "./(auth)/page";
import DashboardPage from "./dashboard/page";
import { createSupabaseServerClient } from "@/lib/db/server-client";

export default async function Home() {

  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  console.log(user);
  
  if(!user) {
    return <AuthPage />;
  }

  return (
    <DashboardPage />
  );
}
