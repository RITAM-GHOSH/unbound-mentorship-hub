
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Menu,
  X,
  Calendar,
  Users,
  LogIn
} from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="gtm-container flex items-center justify-between py-4">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold bg-gradient-to-r from-gtm-blue to-gtm-purple text-transparent bg-clip-text">
              GTM Unbound
            </span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/mentors" className="font-medium text-gray-600 hover:text-gtm-blue transition-colors">
            Find Mentors
          </Link>
          <Link to="/events" className="font-medium text-gray-600 hover:text-gtm-blue transition-colors">
            Events
          </Link>
          <Link to="/about" className="font-medium text-gray-600 hover:text-gtm-blue transition-colors">
            About Us
          </Link>
          <div className="pl-6 border-l border-gray-200">
            <Link to="/login">
              <Button variant="outline" className="mr-2">
                Log In
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-gtm-blue hover:bg-blue-600">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 rounded-md"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      <div 
        className={cn(
          "fixed inset-y-0 right-0 w-full bg-white transform transition-transform duration-300 ease-in-out z-40 md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-end">
            <button 
              className="p-2 rounded-md"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col space-y-8 mt-8">
            <Link 
              to="/mentors" 
              className="flex items-center space-x-2 text-lg font-medium"
              onClick={toggleMenu}
            >
              <Users size={20} />
              <span>Find Mentors</span>
            </Link>
            <Link 
              to="/events" 
              className="flex items-center space-x-2 text-lg font-medium"
              onClick={toggleMenu}
            >
              <Calendar size={20} />
              <span>Events</span>
            </Link>
            <Link 
              to="/login" 
              className="flex items-center space-x-2 text-lg font-medium"
              onClick={toggleMenu}
            >
              <LogIn size={20} />
              <span>Log In</span>
            </Link>
            <Button className="bg-gtm-blue hover:bg-blue-600 w-full" onClick={toggleMenu}>
              <Link to="/signup" className="w-full">Sign Up</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
