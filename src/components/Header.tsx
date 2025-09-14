"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    // Se siamo nella pagina del blog, usiamo la navigazione standard
    if (window.location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image
                src="/images/logo.png"
                alt="Studio Fulminis Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold text-blue-800">
                Studio Fulminis
              </span>
              <span className="text-xs md:text-sm text-gray-600 hidden sm:block">
                Sistemi Fotovoltaici
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-800 transition-colors duration-200 font-medium cursor-pointer"
              onClick={(e) => {
                if (window.location.pathname === "/") {
                  e.preventDefault();
                  scrollToSection("hero");
                }
              }}
            >
              Home
            </Link>
            <button
              onClick={() => scrollToSection("chi-sono")}
              className="text-gray-700 hover:text-blue-800 transition-colors duration-200 font-medium cursor-pointer"
            >
              Chi Sono
            </button>
            <button
              onClick={() => scrollToSection("servizi")}
              className="text-gray-700 hover:text-blue-800 transition-colors duration-200 font-medium cursor-pointer"
            >
              Servizi
            </button>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-blue-800 transition-colors duration-200 font-medium cursor-pointer"
            >
              Articoli
            </Link>
            <button
              onClick={() => scrollToSection("contatti")}
              className="text-gray-700 hover:text-blue-800 transition-colors duration-200 font-medium cursor-pointer"
            >
              Contatti
            </button>
            <button
              onClick={() => scrollToSection("contatti")}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium flex items-center space-x-2"
            >
              <Sun className="w-4 h-4" />
              <span>Preventivo</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-gray-200"
          >
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-left text-gray-700 hover:text-blue-800 transition-colors duration-200 font-medium py-2 block"
                onClick={(e) => {
                  if (window.location.pathname === "/") {
                    e.preventDefault();
                    scrollToSection("hero");
                  }
                  setIsMenuOpen(false);
                }}
              >
                Home
              </Link>
              <button
                onClick={() => scrollToSection("chi-sono")}
                className="text-left text-gray-700 hover:text-blue-800 transition-colors duration-200 font-medium py-2 cursor-pointer"
              >
                Chi Sono
              </button>
              <button
                onClick={() => scrollToSection("servizi")}
                className="text-left text-gray-700 hover:text-blue-800 transition-colors duration-200 font-medium py-2 cursor-pointer"
              >
                Servizi
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-left text-gray-700 hover:text-blue-800 transition-colors duration-200 font-medium py-2 cursor-pointer"
              >
                Gallery
              </button>
              <Link
                href="/blog"
                className="text-left text-gray-700 hover:text-blue-800 transition-colors duration-200 font-medium py-2 cursor-pointer"
              >
                Articoli
              </Link>
              <button
                onClick={() => scrollToSection("contatti")}
                className="text-left text-gray-700 hover:text-blue-800 transition-colors duration-200 font-medium py-2 cursor-pointer"
              >
                Contatti
              </button>
              <button
                onClick={() => scrollToSection("contatti")}
                className="bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium flex items-center justify-center space-x-2 mt-4"
              >
                <Sun className="w-4 h-4" />
                <span>Richiedi Preventivo</span>
              </button>
            </div>
          </motion.nav>
        )}
      </div>
    </header>
  );
}
