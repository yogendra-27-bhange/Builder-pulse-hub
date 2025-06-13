import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/use-theme";

interface ChatMessageProps {
  message: string;
  isUser: boolean;
}

export function ChatMessage({ message, isUser }: ChatMessageProps) {
  const { theme } = useTheme();

  return (
    <div
      className={cn(
        "flex w-full mb-6",
        isUser ? "justify-start" : "justify-end",
      )}
    >
      <div
        className={cn(
          "max-w-[80%] px-6 py-4 rounded-3xl text-white text-lg theme-message-glow",
          isUser
            ? "theme-message-user rounded-bl-lg"
            : "theme-message-assistant rounded-br-lg",
          // Glassmorphism specific styling
          theme === "glassmorphism" && "glass-message backdrop-blur-md",
          // Cyberpunk specific styling
          theme === "cyberpunk" && "border border-current/30",
        )}
      >
        {message}
      </div>
    </div>
  );
}
