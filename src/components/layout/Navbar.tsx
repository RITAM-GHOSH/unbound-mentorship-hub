
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Menu,
  X,
  Calendar,
  Users,
  LogIn,
  Home,
  LogOut,
  User
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/context/AuthContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();

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
          <Link to="/" className="font-medium text-gray-600 hover:text-gtm-blue transition-colors flex items-center gap-1">
            <Home size={18} />
            Home
          </Link>
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
            {user ? (
              <div className="flex items-center gap-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex items-center gap-1"
                  onClick={() => signOut()}
                >
                  <LogOut size={16} />
                  Log Out
                </Button>
                <Button 
                  className="bg-gtm-blue hover:bg-blue-600 flex items-center gap-1"
                  size="sm"
                >
                  <User size={16} />
                  Profile
                </Button>
              </div>
            ) : (
              <>
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
              </>
            )}
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
              to="/" 
              className="flex items-center space-x-2 text-lg font-medium"
              onClick={toggleMenu}
            >
              <Home size={20} />
              <span>Home</span>
            </Link>
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
            
            {user ? (
              <>
                <button 
                  className="flex items-center space-x-2 text-lg font-medium"
                  onClick={() => {
                    signOut();
                    toggleMenu();
                  }}
                >
                  <LogOut size={20} />
                  <span>Log Out</span>
                </button>
                <Button 
                  className="bg-gtm-blue hover:bg-blue-600 w-full"
                  onClick={toggleMenu}
                >
                  <Link to="/profile" className="w-full flex items-center justify-center gap-2">
                    <User size={20} />
                    Profile
                  </Link>
                </Button>
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
