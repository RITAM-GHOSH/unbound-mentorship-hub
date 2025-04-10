
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Users, Search, Filter, MapPin, Calendar, Check } from "lucide-react";

// Sample mentors data
const mentorsData = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Senior Product Manager at Google",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
    rating: 4.9,
    topics: ["Product Strategy", "Go-to-Market", "User Research"],
    location: "San Francisco, CA",
    bio: "10+ years experience in product management across B2B and B2C products. Previously led product teams at Airbnb and Uber.",
    hourlyRate: 125,
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Marketing Director at Salesforce",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
    rating: 4.8,
    topics: ["Brand Marketing", "Growth Strategy", "B2B Marketing"],
    location: "New York, NY",
    bio: "15 years of B2B marketing experience with focus on SaaS and enterprise software. Expert in demand generation and account-based marketing.",
    hourlyRate: 110,
  },
  {
    id: 3,
    name: "Aisha Patel",
    title: "Growth Lead at Stripe",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
    rating: 4.7,
    topics: ["Customer Acquisition", "Analytics", "Go-to-Market"],
    location: "Boston, MA",
    bio: "Data-driven growth expert who has helped scale multiple startups. Previously led growth at Calendly and HubSpot.",
    hourlyRate: 95,
  },
  {
    id: 4,
    name: "David Williams",
    title: "VP of Sales at Adobe",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
    rating: 4.9,
    topics: ["Enterprise Sales", "Sales Strategy", "Pipeline Management"],
    location: "Seattle, WA",
    bio: "20+ years of B2B sales leadership experience. Expert in building and scaling high-performance sales teams for enterprise software.",
    hourlyRate: 150,
  },
  {
    id: 5,
    name: "Elena Rodriguez",
    title: "CMO at Shopify",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
    rating: 4.8,
    topics: ["Brand Strategy", "Demand Generation", "Marketing Operations"],
    location: "Toronto, Canada",
    bio: "Former agency executive turned CMO. Specialized in ecommerce marketing strategies and omnichannel campaigns.",
    hourlyRate: 135,
  },
  {
    id: 6,
    name: "Jason Kim",
    title: "Product Marketing Lead at Microsoft",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
    rating: 4.7,
    topics: ["Product Marketing", "Market Research", "Competitive Analysis"],
    location: "Austin, TX",
    bio: "Product marketing specialist with deep experience in B2B software and cloud services. Expert in positioning and messaging.",
    hourlyRate: 105,
  },
];

// Categories for filtering
const categories = [
  "Product Strategy",
  "Go-to-Market",
  "Brand Marketing",
  "Growth Strategy",
  "Sales",
  "Product Marketing",
  "Market Research",
  "Customer Research",
  "Analytics",
  "Demand Generation"
];

const Mentors = () => {
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter mentors based on search and filters
  const filteredMentors = mentorsData.filter((mentor) => {
    // Search filter
    const matchesSearch = 
      mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      mentor.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.topics.some(topic => topic.toLowerCase().includes(searchTerm.toLowerCase()));
    
    // Category filter
    const matchesCategory = 
      selectedCategories.length === 0 || 
      mentor.topics.some(topic => selectedCategories.includes(topic));
    
    // Price filter
    const matchesPrice = 
      mentor.hourlyRate >= priceRange[0] && 
      mentor.hourlyRate <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  return (
    <Layout>
      {/* Hero section */}
      <section className="bg-gradient-to-br from-gtm-blue/10 via-gtm-indigo/5 to-gtm-purple/10 py-16">
        <div className="gtm-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Find Your Ideal Mentor</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with experienced go-to-market professionals who can help you navigate challenges and accelerate your career.
          </p>
          <div className="max-w-3xl mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              placeholder="Search by name, specialty, or industry..."
              className="pl-10 h-12 rounded-xl"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-12 bg-gray-50">
        <div className="gtm-container">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Mobile filter toggle */}
            <div className="lg:hidden mb-4">
              <Button 
                variant="outline" 
                className="w-full flex items-center justify-center gap-2"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <Filter size={18} />
                {isFilterOpen ? "Hide Filters" : "Show Filters"}
              </Button>
            </div>

            {/* Filter sidebar */}
            <div className={`lg:w-1/4 ${isFilterOpen ? 'block' : 'hidden'} lg:block`}>
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-4">Filters</h2>
                
                {/* Specialties filter */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Specialties</h3>
                  <div className="space-y-2 max-h-60 overflow-y-auto">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center">
                        <Checkbox 
                          id={`category-${category}`} 
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={() => toggleCategory(category)}
                          className="mr-2"
                        />
                        <label 
                          htmlFor={`category-${category}`}
                          className="text-sm text-gray-700 cursor-pointer"
                        >
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Price range filter */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Price range</h3>
                  <div className="px-2">
                    <Slider
                      defaultValue={[0, 200]}
                      max={200}
                      step={5}
                      value={priceRange}
                      onValueChange={(value) => setPriceRange(value as [number, number])}
                    />
                    <div className="flex justify-between mt-2 text-sm text-gray-600">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>
                
                {/* Clear filters */}
                <Button 
                  variant="outline" 
                  className="w-full mt-4"
                  onClick={() => {
                    setSelectedCategories([]);
                    setPriceRange([0, 200]);
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            </div>
            
            {/* Mentors list */}
            <div className="lg:w-3/4">
              <div className="mb-6 flex flex-col sm:flex-row justify-between items-center">
                <p className="text-gray-600">
                  Showing {filteredMentors.length} mentors
                </p>
                <div className="mt-3 sm:mt-0">
                  <select 
                    className="border rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gtm-blue"
                    defaultValue="recommended"
                  >
                    <option value="recommended">Recommended</option>
                    <option value="newest">Newest</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rating</option>
                  </select>
                </div>
              </div>
              
              {filteredMentors.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredMentors.map((mentor) => (
                    <div key={mentor.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                      <div className="p-6">
                        <div className="flex gap-4">
                          <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                            <img
                              src={mentor.image}
                              alt={mentor.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{mentor.name}</h3>
                            <p className="text-gray-600 text-sm">{mentor.title}</p>
                            <div className="flex items-center mt-1">
                              <span className="flex items-center text-yellow-500">
                                {Array(5).fill(0).map((_, i) => (
                                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.006z" clipRule="evenodd" />
                                  </svg>
                                ))}
                              </span>
                              <span className="ml-1 text-sm font-medium">{mentor.rating}</span>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-gray-700 text-sm mt-4 mb-3">
                          {mentor.bio.length > 120 
                            ? `${mentor.bio.substring(0, 120)}...` 
                            : mentor.bio}
                        </p>
                        
                        <div className="flex items-center text-gray-600 text-sm mb-3">
                          <MapPin size={16} className="mr-1" />
                          {mentor.location}
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {mentor.topics.slice(0, 3).map((topic, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-blue-50 text-gtm-blue text-xs rounded-full"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex justify-between items-center mt-5">
                          <div className="text-xl font-semibold">${mentor.hourlyRate}/hr</div>
                          <Button className="gtm-btn-primary">View Profile</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-xl p-12 text-center">
                  <Users size={48} className="mx-auto text-gray-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No mentors found</h3>
                  <p className="text-gray-600 mb-4">
                    Try adjusting your filters or search terms
                  </p>
                  <Button 
                    variant="outline"
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategories([]);
                      setPriceRange([0, 200]);
                    }}
                  >
                    Clear all filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="gtm-container">
          <div className="bg-gradient-to-br from-gtm-blue/20 via-gtm-indigo/15 to-gtm-purple/20 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-2/3">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Want to Share Your Expertise?
                </h2>
                <p className="text-lg text-gray-700 mb-6 md:mb-0">
                  Join our network of GTM mentors and help others succeed while building your professional reputation.
                </p>
              </div>
              <div className="md:w-1/3 text-center md:text-right">
                <Button size="lg" className="gtm-btn-secondary">
                  Become a Mentor
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Mentors;
