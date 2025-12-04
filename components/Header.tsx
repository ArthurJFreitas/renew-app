"use client";

import Image from "next/image";
import Link from "next/link";
import LogoColored from "@/assets/logos/renew-colored.png";
import { User, LogOut } from "lucide-react";
import { useEffect, useState } from "react";
import { getSupabaseClientBrowser } from "@/lib/db/browser-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function Header() {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const supabase = getSupabaseClientBrowser();
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUserEmail(user.email || null);
      }
    };
    getUser();
  }, [supabase]);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error("Logout failed");
    } else {
      toast.success("Logged out successfully");
      router.push("/");
    }
  };

  return (
    <header className="bg- border-b border-gray-200 shadow-sm">
      <div className="px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/dashboard" className="flex items-center">
            <Image src={LogoColored} alt="Renew Logo" width={120} height={40}  />
          </Link>

          {userEmail && (
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition"
              >
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                  <User size={20} className="text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700 hidden sm:block">
                  {userEmail}
                </span>
              </button>

              {showDropdown && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-500 py-2 z-50">
                  <div className="px-4 py-3 border-b border-gray-400">
                    <p className="text-sm font-medium text-gray-900">Signed in as</p>
                    <p className="text-sm text-gray-600 truncate">{userEmail}</p>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition"
                  >
                    <LogOut size={16} />
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
