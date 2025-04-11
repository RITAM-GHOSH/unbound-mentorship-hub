
import { CheckCircle, Users, Calendar, MessageSquare } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="gtm-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need to Excel in GTM</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform provides the resources, connections, and knowledge to take your go-to-market strategy to the next level.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="w-14 h-14 bg-[#FFEBEE] rounded-full flex items-center justify-center mb-4">
              <Users className="text-[#FF5252]" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">1:1 Mentorship</h3>
            <p className="text-gray-600">
              Connect directly with seasoned GTM leaders from top companies who have been there and done that.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-gray-600">
                <CheckCircle size={16} className="text-green-500 mr-2" />
                Personalized guidance
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle size={16} className="text-green-500 mr-2" />
                Actionable feedback
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle size={16} className="text-green-500 mr-2" />
                Career acceleration
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="w-14 h-14 bg-[#FFEBEE] rounded-full flex items-center justify-center mb-4">
              <Calendar className="text-[#FF5252]" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Exclusive Events</h3>
            <p className="text-gray-600">
              Attend workshops, webinars, and networking sessions led by industry experts and thought leaders.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-gray-600">
                <CheckCircle size={16} className="text-green-500 mr-2" />
                Interactive workshops
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle size={16} className="text-green-500 mr-2" />
                Expert-led webinars
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle size={16} className="text-green-500 mr-2" />
                Networking opportunities
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="w-14 h-14 bg-[#FFEBEE] rounded-full flex items-center justify-center mb-4">
              <MessageSquare className="text-[#FF5252]" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Community Access</h3>
            <p className="text-gray-600">
              Join a thriving community of GTM professionals to share ideas, solve challenges, and grow together.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-gray-600">
                <CheckCircle size={16} className="text-green-500 mr-2" />
                Peer-to-peer learning
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle size={16} className="text-green-500 mr-2" />
                Resource sharing
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle size={16} className="text-green-500 mr-2" />
                Collaborative problem-solving
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
