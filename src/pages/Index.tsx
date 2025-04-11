
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, CheckCircle, Heart, MessageSquare, Users, Zap } from "lucide-react";

const Index = () => {
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
    <Layout>
      {/* Hero section */}
      <section className="bg-white py-20">
        <div className="gtm-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Accelerate Your <span className="bg-gradient-to-r from-gtm-blue to-gtm-purple text-transparent bg-clip-text">Go-to-Market</span> Strategy
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Connect with industry leaders, access proven frameworks, and transform your GTM approach for sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gtm-blue hover:bg-blue-600 text-white px-6">
                <Link to="/mentors" className="flex items-center gap-2">
                  Find a Mentor <ArrowRight size={16} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-gtm-blue text-gtm-blue px-6">
                <Link to="/events">Browse Events</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section className="bg-gray-50 py-16">
        <div className="gtm-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-gtm-blue">500+</p>
              <p className="text-gray-600">GTM Experts</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gtm-blue">1,200+</p>
              <p className="text-gray-600">Success Stories</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gtm-blue">75+</p>
              <p className="text-gray-600">Monthly Events</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gtm-blue">92%</p>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-20 bg-white">
        <div className="gtm-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need to Excel in GTM</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform provides the resources, connections, and knowledge to take your go-to-market strategy to the next level.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Users className="text-gtm-blue" size={24} />
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
              <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <Calendar className="text-gtm-indigo" size={24} />
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
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <MessageSquare className="text-gtm-purple" size={24} />
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

      {/* Featured mentors section */}
      <section className="py-20 bg-gray-50">
        <div className="gtm-container">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Mentors</h2>
              <p className="text-xl text-gray-600">
                Learn from the best in the industry
              </p>
            </div>
            <Link to="/mentors" className="mt-6 md:mt-0">
              <Button variant="outline" className="border-gtm-blue text-gtm-blue">
                View All Mentors
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredMentors.map((mentor) => (
              <div key={mentor.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
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
                  <Button size="sm" className="bg-gtm-blue hover:bg-blue-600 text-white w-full">
                    View Profile
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section className="py-20 bg-white">
        <div className="gtm-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Members Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't take our word for it — hear from the professionals who have transformed their GTM strategies with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
              <div className="flex items-center mb-4 text-yellow-500">
                {Array(5).fill(0).map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "The mentorship I received through GTM Unbound completely transformed our product launch strategy. My mentor provided insights that would have taken me years to discover on my own."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                  <img 
                    src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                    alt="Jessica Lee"
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <p className="font-medium">Jessica Lee</p>
                  <p className="text-sm text-gray-500">VP of Marketing, Fintech Startup</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
              <div className="flex items-center mb-4 text-yellow-500">
                {Array(5).fill(0).map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "The workshops and events are incredibly valuable. I've built a network of GTM professionals who have become both resources and friends. This community is truly one-of-a-kind."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                  <img 
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                    alt="David Rodriguez"
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <p className="font-medium">David Rodriguez</p>
                  <p className="text-sm text-gray-500">GTM Lead, SaaS Platform</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
              <div className="flex items-center mb-4 text-yellow-500">
                {Array(5).fill(0).map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "As a first-time founder, I was struggling with market positioning. My GTM Unbound mentor helped me clarify my value proposition and target audience, resulting in a 3x increase in customer acquisition."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                  <img 
                    src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                    alt="Michelle Wang"
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <p className="font-medium">Michelle Wang</p>
                  <p className="text-sm text-gray-500">Founder, E-commerce Startup</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gtm-blue/10 via-gtm-indigo/10 to-gtm-purple/10">
        <div className="gtm-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your GTM Strategy?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join GTM Unbound today to access expert mentorship, attend exclusive events, and connect with a community of GTM professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gtm-blue hover:bg-blue-600 text-white px-8">
              <Link to="/signup" className="flex items-center gap-2">
                Join Now <ArrowRight size={16} />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-gtm-blue text-gtm-blue px-8">
              <Link to="/mentors">Explore Mentors</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
