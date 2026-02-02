import React from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();
  
  const navItems = [
    { name: "Services", href: "/services" },
    { name: "Results", href: "/results" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/"> 
              <img src="/logo.png" alt="Arroway Logo" width={150} height={40} className="h-10 object-contain" />
            </Link>
          </div>
          

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-colors ${
                  location.pathname === item.href
                    ? "text-[#074edb]"
                    : "text-gray-700 hover:text-[#074edb]"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contact">
              <Button className="bg-[#074edb] hover:bg-[#063db3] text-white">
                Get Started
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium transition-colors px-2 ${
                    location.pathname === item.href
                      ? "text-[#074edb]"
                      : "text-gray-700 hover:text-[#074edb]"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="bg-[#074edb] hover:bg-[#063db3] text-white w-full">
                  Get Started
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
