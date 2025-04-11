
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="gtm-container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <img 
              src="/lovable-uploads/dab20404-75af-4648-ae4c-2fd1680bb6b6.png" 
              alt="GTM Unbound Logo" 
              className="h-28"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Accelerate Your <span className="bg-gradient-to-r from-[#FF5252] to-[#FF8A80] text-transparent bg-clip-text">Go-to-Market</span> Strategy
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Connect with industry leaders, access proven frameworks, and transform your GTM approach for sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#FF5252] hover:bg-[#FF8A80] text-white px-6">
              <Link to="/mentors" className="flex items-center gap-2">
                Mentorship <ArrowRight size={16} />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-[#FF5252] text-[#FF5252] px-6">
              <Link to="/events">Browse Events</Link>
            </Button>
            <Button size="lg" className="bg-[#FF8A80] hover:bg-[#FFAB91] text-white px-6">
              <Mail size={16} className="mr-2" /> Request Invite
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
