
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Calendar, Users, Zap, TrendingUp, MessageSquare } from "lucide-react";

// Sample mentors data
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

// Sample events data
const upcomingEvents = [
  {
    id: 1,
    title: "Go-to-Market Strategy Masterclass",
    date: "May 15, 2025",
    time: "2:00 PM - 4:00 PM EST",
    image: "https://images.unsplash.com/photo-1540317580384-e5d43867caa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    attendees: 87,
  },
  {
    id: 2,
    title: "Product Marketing for SaaS Companies",
    date: "May 22, 2025",
    time: "1:00 PM - 3:00 PM EST",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    attendees: 54,
  }
];

const Index = () => {
  return (
    <Layout>
      {/* Hero section */}
      <section className="bg-gradient-to-br from-gtm-blue/10 via-gtm-indigo/5 to-gtm-purple/10 py-20">
        <div className="gtm-container">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Accelerate Your <span className="bg-gradient-to-r from-gtm-blue to-gtm-purple text-transparent bg-clip-text">Go-to-Market</span> Success
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
                Connect with expert mentors and join specialized events to level up your GTM skills and network with industry leaders.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="gtm-btn-primary">
                  <Link to="/mentors">Find a Mentor</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-gtm-blue text-gtm-blue">
                  <Link to="/events">Browse Events</Link>
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-64 h-64 bg-gtm-blue/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-gtm-purple/10 rounded-full blur-3xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="GTM professionals collaborating" 
                  className="rounded-2xl shadow-lg relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-20 bg-white">
        <div className="gtm-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How GTM Unbound Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform connects professionals with top industry mentors and curated events to accelerate your go-to-market expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
              <div className="w-14 h-14 bg-gtm-blue/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-gtm-blue" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Mentorship</h3>
              <p className="text-gray-600">
                Connect with vetted go-to-market experts from leading companies for personalized guidance.
              </p>
            </div>
            
            <div className="p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100">
              <div className="w-14 h-14 bg-gtm-indigo/10 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="text-gtm-indigo" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Specialized Events</h3>
              <p className="text-gray-600">
                Participate in workshops, webinars, and networking events focused on go-to-market strategies.
              </p>
            </div>
            
            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100">
              <div className="w-14 h-14 bg-gtm-purple/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-gtm-purple" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Skill Development</h3>
              <p className="text-gray-600">
                Gain practical insights and actionable strategies to enhance your go-to-market execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured mentors section */}
      <section className="py-20 bg-gray-50">
        <div className="gtm-container">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Mentors</h2>
              <p className="text-xl text-gray-600">
                Connect with industry experts ready to share their knowledge
              </p>
            </div>
            <Link to="/mentors" className="mt-6 md:mt-0">
              <Button variant="outline" className="border-gtm-blue text-gtm-blue">
                View All Mentors
              </Button>
            </Link>
          </div>
          
          <div className="gtm-grid">
            {featuredMentors.map((mentor) => (
              <div key={mentor.id} className="gtm-card overflow-hidden">
                <div className="p-6 flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-gtm-blue/20">
                    <img 
                      src={mentor.image} 
                      alt={mentor.name}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{mentor.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{mentor.title}</p>
                  <div className="flex items-center mb-4">
                    <span className="flex items-center text-yellow-500">
                      {Array(5).fill(0).map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                      ))}
                    </span>
                    <span className="ml-1 text-sm font-medium">{mentor.rating}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center mb-5">
                    {mentor.topics.map((topic, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-blue-50 text-gtm-blue text-xs rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                  <Button size="sm" className="gtm-btn-primary w-full">
                    View Profile
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Upcoming events section */}
      <section className="py-20 bg-white">
        <div className="gtm-container">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h2>
              <p className="text-xl text-gray-600">
                Join interactive sessions led by industry experts
              </p>
            </div>
            <Link to="/events" className="mt-6 md:mt-0">
              <Button variant="outline" className="border-gtm-blue text-gtm-blue">
                View All Events
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <Link to={`/events/${event.id}`} key={event.id}>
                <div className="gtm-card flex flex-col md:flex-row overflow-hidden h-full">
                  <div className="w-full md:w-1/3 h-48 md:h-auto">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-semibold text-lg mb-2 hover:text-gtm-blue transition-colors">
                      {event.title}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-4">
                      <Users className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.attendees} attending</span>
                    </div>
                    <div className="mt-auto">
                      <Button size="sm" className="gtm-btn-secondary">
                        Register Now
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gtm-blue/20 via-gtm-indigo/15 to-gtm-purple/20">
        <div className="gtm-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Accelerate Your Growth?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join GTM Unbound today to connect with mentors, attend events, and advance your go-to-market skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gtm-btn-primary">
              <Link to="/signup">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-gtm-blue text-gtm-blue">
              <Link to="/how-it-works">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
