import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: string;
  isUser: boolean;
}

export function ChatMessage({ message, isUser }: ChatMessageProps) {
  return (
    <div
      className={cn(
        "flex w-full mb-6",
        isUser ? "justify-start" : "justify-end",
      )}
    >
      <div
        className={cn(
          "max-w-[80%] px-6 py-4 rounded-3xl text-white text-lg shadow-message-glow",
          isUser
            ? "bg-message-user border-glow-cyan rounded-bl-lg"
            : "bg-message-assistant border-glow-purple rounded-br-lg",
        )}
      >
        {message}
      </div>
    </div>
  );
}
