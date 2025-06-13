import { useState } from "react";
import { useTheme, Theme } from "@/hooks/use-theme";
import { ChevronDown, Palette } from "lucide-react";
import { cn } from "@/lib/utils";

const themes: { value: Theme; label: string; description: string }[] = [
  {
    value: "light",
    label: "Light Theme",
    description: "Clean bright interface",
  },
  { value: "dark", label: "Dark Theme", description: "Current dark mode" },
  {
    value: "glassmorphism",
    label: "Glassmorphism",
    description: "Frosted glass effect",
  },
  {
    value: "cyberpunk",
    label: "Cyberpunk",
    description: "Neon futuristic style",
  },
  { value: "solarized", label: "Solarized", description: "Warm retro colors" },
];

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const currentTheme = themes.find((t) => t.value === theme);

  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300",
            "backdrop-blur-md bg-black/20 border border-white/20",
            "hover:bg-white/10 text-white shadow-lg",
            "focus:outline-none focus:ring-2 focus:ring-cyan-400/50",
          )}
        >
          <Palette className="w-4 h-4" />
          <span className="text-sm font-medium">{currentTheme?.label}</span>
          <ChevronDown
            className={cn(
              "w-4 h-4 transition-transform duration-200",
              isOpen && "rotate-180",
            )}
          />
        </button>

        {isOpen && (
          <div
            className={cn(
              "absolute top-full right-0 mt-2 w-64 rounded-xl overflow-hidden",
              "backdrop-blur-md bg-black/20 border border-white/20 shadow-xl",
            )}
          >
            {themes.map((themeOption) => (
              <button
                key={themeOption.value}
                onClick={() => {
                  setTheme(themeOption.value);
                  setIsOpen(false);
                }}
                className={cn(
                  "w-full px-4 py-3 text-left transition-all duration-200",
                  "hover:bg-white/10 text-white border-b border-white/10 last:border-b-0",
                  theme === themeOption.value && "bg-cyan-400/20",
                )}
              >
                <div className="font-medium text-sm">{themeOption.label}</div>
                <div className="text-xs text-gray-300 mt-1">
                  {themeOption.description}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-[-1]"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
