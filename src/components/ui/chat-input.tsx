import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/use-theme";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  placeholder?: string;
}

export function ChatInput({
  onSendMessage,
  placeholder = "Ask anything",
}: ChatInputProps) {
  const [message, setMessage] = useState("");
  const { theme } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative">
        <div className="absolute left-6 top-1/2 transform -translate-y-1/2">
          <Plus
            className={cn(
              "w-6 h-6",
              theme === "light"
                ? "text-blue-500"
                : theme === "cyberpunk"
                  ? "text-yellow-400"
                  : theme === "solarized"
                    ? "text-cyan-400"
                    : "text-cyan-400",
            )}
          />
        </div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={placeholder}
          className={cn(
            "w-full pl-16 pr-6 py-5 bg-transparent text-lg rounded-full",
            "focus:outline-none transition-all duration-300",
            // Theme-specific styling
            theme === "light" &&
              "text-gray-800 border-2 border-blue-300 focus:border-blue-500 placeholder-gray-500",
            theme === "dark" &&
              "text-white border border-cyan-400/60 focus:border-cyan-400 placeholder-gray-400 theme-glow",
            theme === "glassmorphism" &&
              "text-white border border-white/30 focus:border-white/50 placeholder-gray-300 glass-effect backdrop-blur-md",
            theme === "cyberpunk" &&
              "text-yellow-400 border-2 border-magenta-500 focus:border-cyan-400 placeholder-magenta-300 shadow-lg shadow-magenta-500/30",
            theme === "solarized" &&
              "text-gray-100 border border-yellow-600/60 focus:border-yellow-500 placeholder-gray-400",
          )}
        />
      </div>
    </form>
  );
}
