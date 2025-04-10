
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-12 pb-8">
      <div className="gtm-container">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-xl font-bold bg-gradient-to-r from-gtm-blue to-gtm-purple text-transparent bg-clip-text">
                GTM Unbound
              </span>
            </Link>
            <p className="text-gray-600 mb-4">
              Connecting professionals with mentors and growth opportunities.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Mentorship</h3>
            <ul className="space-y-3">
              <li><Link to="/mentors" className="text-gray-600 hover:text-gtm-blue transition-colors">Find Mentors</Link></li>
              <li><Link to="/become-mentor" className="text-gray-600 hover:text-gtm-blue transition-colors">Become a Mentor</Link></li>
              <li><Link to="/how-it-works" className="text-gray-600 hover:text-gtm-blue transition-colors">How It Works</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Events</h3>
            <ul className="space-y-3">
              <li><Link to="/events" className="text-gray-600 hover:text-gtm-blue transition-colors">Upcoming Events</Link></li>
              <li><Link to="/past-events" className="text-gray-600 hover:text-gtm-blue transition-colors">Past Events</Link></li>
              <li><Link to="/host-event" className="text-gray-600 hover:text-gtm-blue transition-colors">Host an Event</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-600 hover:text-gtm-blue transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-gtm-blue transition-colors">Contact</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-gtm-blue transition-colors">Careers</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} GTM Unbound. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/terms" className="text-gray-500 hover:text-gtm-blue text-sm">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-gray-500 hover:text-gtm-blue text-sm">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
