
import React from "react";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

interface HeaderProps {
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header className="border-b bg-card">
      <div className="flex h-16 items-center px-4">
        {children}
        <div className="ml-auto flex items-center space-x-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
