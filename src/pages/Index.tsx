import { useState } from "react";
import { ChatMessage } from "@/components/ui/chat-message";
import { ChatInput } from "@/components/ui/chat-input";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
}

const Index = () => {
  const { theme } = useTheme();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "How's the weather?",
      isUser: true,
    },
    {
      id: 2,
      text: "The weather is sunny.",
      isUser: false,
    },
  ]);

  const handleSendMessage = (messageText: string) => {
    const newMessage: Message = {
      id: messages.length + 1,
      text: messageText,
      isUser: true,
    };
    setMessages([...messages, newMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        text: "I understand your question. How can I help you further?",
        isUser: false,
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div
      className={cn(
        "min-h-screen theme-bg flex flex-col relative",
        // Glassmorphism needs special background
        theme === "glassmorphism" && "glass-effect",
      )}
    >
      {/* Theme Switcher */}
      <ThemeSwitcher />

      {/* Header with TRUSHNA branding */}
      <div className="flex-shrink-0 pt-16 pb-12 text-center">
        <h1
          className={cn(
            "text-6xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-wider theme-title",
            theme === "cyberpunk" && "animate-cyberpunk-flicker",
          )}
        >
          TRUSHNA
        </h1>
        <p className="text-xl md:text-2xl font-light tracking-wide theme-subtitle">
          A VIRTUAL ASSISTANT
        </p>
      </div>

      {/* Chat container */}
      <div className="flex-1 flex flex-col max-w-4xl w-full mx-auto px-6 md:px-8">
        {/* Messages area */}
        <div className="flex-1 flex flex-col justify-center space-y-6 mb-16">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message.text}
              isUser={message.isUser}
            />
          ))}
        </div>

        {/* Input area */}
        <div className="flex-shrink-0 pb-12">
          <ChatInput onSendMessage={handleSendMessage} />
        </div>
      </div>

      {/* Footer */}
      <div className="flex-shrink-0 pb-8 text-center">
        <p className="text-base md:text-lg font-medium tracking-wider leading-relaxed">
          <span className="theme-footer-primary">DEVELOPED BY</span>
          <br />
          <span className="theme-footer-secondary font-semibold">TRUSHNA</span>
          <span className="theme-footer-tertiary mx-2">AND</span>
          <span className="theme-footer-secondary font-semibold">YOGENDRA</span>
        </p>
      </div>
    </div>
  );
};

export default Index;
