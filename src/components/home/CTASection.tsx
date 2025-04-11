
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#FFEBEE] via-[#FFCDD2] to-[#FFCCBC]">
      <div className="gtm-container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your GTM Strategy?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join GTM Unbound today to access expert mentorship, attend exclusive events, and connect with a community of GTM professionals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-[#FF5252] hover:bg-[#FF8A80] text-white px-8">
            <Link to="/signup" className="flex items-center gap-2">
              Join Now <ArrowRight size={16} />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="border-[#FF5252] text-[#FF5252] px-8">
            <Link to="/mentors">Explore Mentors</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
