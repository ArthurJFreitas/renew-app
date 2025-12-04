"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

import { Eye, EyeOff } from "lucide-react";

import Logo from "@/assets/logos/renew.png";

import Image from "next/image";

import GitHubIcon from "@/assets/icons/github.svg";
import { getSupabaseClientBrowser } from "@/lib/db/browser-client";
import toast from "react-hot-toast";

function PasswordField({ label, value, onChange }: { label: string, value?: string, onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void }) {      
  const [show, setShow] = useState(false);

  return (
    <div className="space-y-2">
      <Label className="text-gray-700">{label}</Label>

      <div className="relative">
        <Input
          {...(value && { value })} 
          {...(onChange && { onChange })}
          type={show ? "text" : "password"}
          className="bg-gray-50 border-gray-300 text-gray-900 pr-12 focus:ring-2 focus:ring-blue-500 transition"
          placeholder="••••••••"
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute top-1/2 -translate-y-1/2 right-3 text-gray-500 hover:text-gray-800 transition cursor-pointer"
        >
          {show ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>
    </div>
  );
}

export default function AuthPage() {
  const [formData, setFormData] = useState({  
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const [mode, setMode] = useState<"login" | "register">("login");
  const router = useRouter();

  const supabase = getSupabaseClientBrowser();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(mode === "login") {
      const { error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if(error) {
        console.error(error);
        toast.error("Login failed. Please check your credentials.");
      } else {
        toast.success("Login successful!");
        router.push("/dashboard");
      }
    }

    if(mode === "register") {
      const { error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });

      if(error) {
        console.error(error);
        toast.error("Registration failed. Please check your credentials.");
      } else {
        setFormData({  email: "", password: "" });
        toast.success("Registration successful!, please check your email to confirm your account.");
      }
    }
  }

    const handleGitHubSignIn = async () => {
      const {  error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
        options: {
          redirectTo: process.env.NEXT_PUBLIC_SITE_URL + 'dashboard',
        },
      })

      if (error) {
        console.error('Error signing in with GitHub:', error.message)
      }
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-white to-gray-100 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="flex justify-center items-center mb-8">
          <Image src={Logo} alt="Logo" width={200} height={200} />
        </div>
        <Card className="bg-white border-gray-200 shadow-xl rounded-2xl">
          <CardHeader className="text-center space-y-2 py-6">
            <CardTitle className="text-3xl font-bold text-gray-900 tracking-tight">
              {mode === "login" ? "Welcome Back" : "Create Account"}
            </CardTitle>
            <CardDescription className="text-gray-500">
              {mode === "login"
                ? "Sign in to your account"
                : "Register to get started"}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4 pb-10 px-6">
            <form onSubmit={handleSubmit}>
              <div className="space-y-2">
                <div className="space-y-2">
                  <Label className="text-gray-700">Email</Label>
                  <Input
                    value={email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    type="email"
                    placeholder="you@example.com"
                    className="bg-gray-50 border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>    

                <PasswordField label="Password" value={password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />

                <Button className="w-full h-11 text-base font-medium rounded-xl bg-blue-600 text-white hover:bg-blue-500 transition cursor-pointer">
                  {mode === "login" ? "Login" : "Create Account"}
                </Button>

                <Separator className="bg-gray-200 my-6" />

                <div className="flex flex-col gap-3">
                  <Button
                    onClick={handleGitHubSignIn}
                    type="button"
                    variant="outline"
                    className="w-full h-11 rounded-xl border-gray-300 text-gray-700 hover:bg-gray-100 active:bg-gray-200 transition cursor-pointer"
                  >
                    Continue with GitHub
                    <Image src={GitHubIcon} alt="GitHub Icon" width={20} height={20} />
                  </Button>
                </div>

                <div className="text-center pt-2">
                  <button
                    className="text-gray-600 hover:text-blue-600 underline text-sm transition cursor-pointer"
                    onClick={() =>
                      setMode(mode === "login" ? "register" : "login")
                    }
                  >
                    {mode === "login"
                      ? "Don't have an account? Register"
                      : "Already have an account? Login"}
                  </button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
