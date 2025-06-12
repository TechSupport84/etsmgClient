import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Brand */}
          <div className="flex-shrink-0 text-xl font-bold text-blue-700">
            ETS MG BUILDERS SERVICES
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="/" className="text-gray-700 hover:text-blue-600">Accueil</a>
            <a href="/about" className="text-gray-700 hover:text-blue-600">À propos</a>
            <a href="/service" className="text-gray-700 hover:text-blue-600">Services</a>
            <a href="/project" className="text-gray-700 hover:text-blue-600">Projets</a>
            <a href="/contact" className="text-gray-700 hover:text-blue-600">Contact</a>
          </nav>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2 shadow-md">
          <a href="/" className="block text-gray-700 hover:text-blue-600">Accueil</a>
          <a href="/about" className="block text-gray-700 hover:text-blue-600">À propos</a>
          <a href="/service" className="block text-gray-700 hover:text-blue-600">Services</a>
          <a href="/project" className="block text-gray-700 hover:text-blue-600">Projets</a>
          <a href="/contact" className="block text-gray-700 hover:text-blue-600">Contact</a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
