
import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { Sun, Moon } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { cn } from "@/lib/utils";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed bottom-5 right-5 z-50 animate-fade-in">
      <Toggle
        pressed={theme === "dark"}
        onPressedChange={toggleTheme}
        aria-label="Toggle theme"
        className={cn(
          "h-10 w-10 rounded-full shadow-lg",
          theme === "dark" 
            ? "bg-xform-blue-dark text-white hover:bg-xform-blue-light" 
            : "bg-white text-xform-blue-dark hover:bg-gray-100"
        )}
      >
        {theme === "dark" ? (
          <Moon className="h-5 w-5" />
        ) : (
          <Sun className="h-5 w-5" />
        )}
      </Toggle>
    </div>
  );
};

export default ThemeToggle;
