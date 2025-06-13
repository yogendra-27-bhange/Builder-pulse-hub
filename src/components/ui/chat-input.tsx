import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  placeholder?: string;
}

export function ChatInput({
  onSendMessage,
  placeholder = "Ask anything",
}: ChatInputProps) {
  const [message, setMessage] = useState("");

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
          <Plus className="w-6 h-6 text-cyan-400" />
        </div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={placeholder}
          className={cn(
            "w-full pl-16 pr-6 py-5 bg-transparent text-white text-lg",
            "rounded-full border-glow-cyan placeholder-gray-400",
            "focus:outline-none focus:border-glow-cyan focus:shadow-glow-cyan",
            "transition-all duration-300",
          )}
        />
      </div>
    </form>
  );
}
