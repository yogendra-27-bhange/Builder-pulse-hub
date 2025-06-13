import { useState } from "react";
import { ChatMessage } from "@/components/ui/chat-message";
import { ChatInput } from "@/components/ui/chat-input";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
}

const Index = () => {
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
    <div className="min-h-screen bg-trushna-gradient flex flex-col">
      {/* Header with TRUSHNA branding */}
      <div className="flex-shrink-0 pt-16 pb-12 text-center">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-glow-cyan-intense animate-glow-pulse mb-4 tracking-wider">
          TRUSHNA
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide">
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
        <p className="text-gray-300 text-base md:text-lg font-medium tracking-wider leading-relaxed">
          <span className="text-cyan-400">DEVELOPED BY</span>
          <br />
          <span className="text-white font-semibold">TRUSHNA</span>
          <span className="text-gray-400 mx-2">AND</span>
          <span className="text-white font-semibold">YOGENDRA</span>
        </p>
      </div>
    </div>
  );
};

export default Index;
