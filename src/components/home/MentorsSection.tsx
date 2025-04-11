
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import MentorCard from "./MentorCard";

const MentorsSection = () => {
  // Featured mentors data
  const featuredMentors = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Senior Product Manager at Google",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
      rating: 4.9,
      topics: ["Product Strategy", "Go-to-Market", "User Research"],
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Marketing Director at Salesforce",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
      rating: 4.8,
      topics: ["Brand Marketing", "Growth Strategy", "B2B Marketing"],
    },
    {
      id: 3,
      name: "Aisha Patel",
      title: "Growth Lead at Stripe",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
      rating: 4.7,
      topics: ["Customer Acquisition", "Analytics", "Go-to-Market"],
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="gtm-container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Mentors</h2>
            <p className="text-xl text-gray-600">
              Learn from the best in the industry
            </p>
          </div>
          <Link to="/mentors" className="mt-6 md:mt-0">
            <Button variant="outline" className="border-[#FF5252] text-[#FF5252]">
              View All Mentors
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredMentors.map((mentor) => (
            <MentorCard key={mentor.id} mentor={mentor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;
