import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";

export function PasswordField({
  label,
  placeholder = "••••••••",
}: {
  label: string;
  placeholder?: string;
}) {
  const [show, setShow] = useState(false);

  return (
    <div className="space-y-2">
      <Label className="text-gray-700">{label}</Label>

      <div className="relative">
        <Input
          type={show ? "text" : "password"}
          placeholder={placeholder}
          className="bg-gray-50 border-gray-300 text-gray-900 pr-10"
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute top-1/2 -translate-y-1/2 right-3 text-gray-500 hover:text-gray-700 transition"
        >
          {show ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
    </div>
  );
}
