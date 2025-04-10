
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Calendar, Search, Users, MapPin, Clock, Filter } from "lucide-react";

// Sample events data
const eventsData = [
  {
    id: 1,
    title: "Go-to-Market Strategy Masterclass",
    description: "Learn proven frameworks and tactics for developing successful GTM strategies that drive growth and customer acquisition.",
    date: "May 15, 2025",
    time: "2:00 PM - 4:00 PM EST",
    location: "Virtual",
    image: "https://images.unsplash.com/photo-1540317580384-e5d43867caa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    attendees: 87,
    price: 0,
    tags: ["Strategy", "Workshop"],
    host: {
      name: "David Williams",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
      title: "VP of Sales at Adobe"
    }
  },
  {
    id: 2,
    title: "Product Marketing for SaaS Companies",
    description: "Discover effective product marketing strategies specifically for SaaS products. Focus on positioning, messaging, and launch execution.",
    date: "May 22, 2025",
    time: "1:00 PM - 3:00 PM EST",
    location: "Virtual",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    attendees: 54,
    price: 0,
    tags: ["Marketing", "SaaS"],
    host: {
      name: "Elena Rodriguez",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
      title: "CMO at Shopify"
    }
  },
  {
    id: 3,
    title: "Enterprise Sales Acceleration Summit",
    description: "A full-day summit focused on enterprise sales strategies, pipeline management, and closing techniques for complex B2B deals.",
    date: "June 5, 2025",
    time: "9:00 AM - 5:00 PM EST",
    location: "New York, NY",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    attendees: 125,
    price: 199,
    tags: ["Sales", "Enterprise", "Conference"],
    host: {
      name: "Michael Chen",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
      title: "Marketing Director at Salesforce"
    }
  },
  {
    id: 4,
    title: "Data-Driven Marketing Decisions",
    description: "Learn how to leverage data analytics to make better marketing decisions and measure the effectiveness of your campaigns.",
    date: "June 12, 2025",
    time: "11:00 AM - 1:00 PM EST",
    location: "Virtual",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    attendees: 72,
    price: 49,
    tags: ["Analytics", "Marketing"],
    host: {
      name: "Aisha Patel",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
      title: "Growth Lead at Stripe"
    }
  },
  {
    id: 5,
    title: "B2B Customer Journey Mapping Workshop",
    description: "A hands-on workshop to map your B2B customer journey and identify key touchpoints and opportunities for improvement.",
    date: "June 20, 2025",
    time: "10:00 AM - 3:00 PM PST",
    location: "San Francisco, CA",
    image: "https://images.unsplash.com/photo-1558403194-611308249627?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    attendees: 40,
    price: 149,
    tags: ["Workshop", "Customer Experience"],
    host: {
      name: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
      title: "Senior Product Manager at Google"
    }
  },
  {
    id: 6,
    title: "GTM Alignment: Sales & Marketing Collaboration",
    description: "Break down silos between sales and marketing teams to create a unified go-to-market approach that drives results.",
    date: "July 8, 2025",
    time: "1:00 PM - 3:00 PM EST",
    location: "Virtual",
    image: "https://images.unsplash.com/photo-1546520057-a59c8a28e313?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    attendees: 93,
    price: 0,
    tags: ["Strategy", "Teamwork"],
    host: {
      name: "Jason Kim",
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
      title: "Product Marketing Lead at Microsoft"
    }
  }
];

// Filter tags
const eventTags = ["Workshop", "Marketing", "Sales", "Strategy", "Analytics", "SaaS", "Enterprise", "Conference", "Customer Experience", "Teamwork"];

const Events = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [eventType, setEventType] = useState("all"); // 'all', 'virtual', 'inperson'
  const [pricingFilter, setPricingFilter] = useState("all"); // 'all', 'free', 'paid'
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter events based on the current filters
  const filteredEvents = eventsData.filter((event) => {
    // Search filter
    const matchesSearch = 
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      event.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Tags filter
    const matchesTags = 
      selectedTags.length === 0 || 
      event.tags.some(tag => selectedTags.includes(tag));
    
    // Event type filter
    const matchesType = 
      eventType === "all" ||
      (eventType === "virtual" && event.location === "Virtual") ||
      (eventType === "inperson" && event.location !== "Virtual");
    
    // Price filter
    const matchesPrice =
      pricingFilter === "all" ||
      (pricingFilter === "free" && event.price === 0) ||
      (pricingFilter === "paid" && event.price > 0);
    
    return matchesSearch && matchesTags && matchesType && matchesPrice;
  });

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  // Separate upcoming and past events based on date
  const currentDate = new Date();
  const upcomingEvents = filteredEvents.filter(event => new Date(event.date) >= currentDate);
  const pastEvents = filteredEvents.filter(event => new Date(event.date) < currentDate);

  return (
    <Layout>
      {/* Hero section */}
      <section className="bg-gradient-to-br from-gtm-blue/10 via-gtm-indigo/5 to-gtm-purple/10 py-16">
        <div className="gtm-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Discover GTM Events</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join workshops, webinars, and networking events focused on go-to-market strategies and career development.
          </p>
          <div className="max-w-3xl mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              placeholder="Search events..."
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

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filter sidebar */}
            <div className={`lg:w-1/4 ${isFilterOpen ? 'block' : 'hidden'} lg:block`}>
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-4">Filters</h2>
                
                {/* Event type filter */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Event Type</h3>
                  <div className="grid grid-cols-1 gap-2">
                    <Button 
                      variant={eventType === "all" ? "default" : "outline"}
                      className={eventType === "all" ? "gtm-btn-primary" : ""}
                      onClick={() => setEventType("all")}
                    >
                      All Events
                    </Button>
                    <Button 
                      variant={eventType === "virtual" ? "default" : "outline"}
                      className={eventType === "virtual" ? "gtm-btn-primary" : ""}
                      onClick={() => setEventType("virtual")}
                    >
                      Virtual Only
                    </Button>
                    <Button 
                      variant={eventType === "inperson" ? "default" : "outline"}
                      className={eventType === "inperson" ? "gtm-btn-primary" : ""}
                      onClick={() => setEventType("inperson")}
                    >
                      In-Person Only
                    </Button>
                  </div>
                </div>
                
                {/* Price filter */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Price</h3>
                  <div className="grid grid-cols-1 gap-2">
                    <Button 
                      variant={pricingFilter === "all" ? "default" : "outline"}
                      className={pricingFilter === "all" ? "gtm-btn-primary" : ""}
                      onClick={() => setPricingFilter("all")}
                    >
                      All Prices
                    </Button>
                    <Button 
                      variant={pricingFilter === "free" ? "default" : "outline"}
                      className={pricingFilter === "free" ? "gtm-btn-primary" : ""}
                      onClick={() => setPricingFilter("free")}
                    >
                      Free Only
                    </Button>
                    <Button 
                      variant={pricingFilter === "paid" ? "default" : "outline"}
                      className={pricingFilter === "paid" ? "gtm-btn-primary" : ""}
                      onClick={() => setPricingFilter("paid")}
                    >
                      Paid Only
                    </Button>
                  </div>
                </div>
                
                {/* Tags filter */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Topics</h3>
                  <div className="flex flex-wrap gap-2">
                    {eventTags.map((tag) => (
                      <button
                        key={tag}
                        className={`px-3 py-1 text-sm rounded-full transition-colors ${
                          selectedTags.includes(tag) 
                            ? "bg-gtm-blue text-white" 
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                        onClick={() => toggleTag(tag)}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Clear filters */}
                <Button 
                  variant="outline" 
                  className="w-full mt-4"
                  onClick={() => {
                    setSelectedTags([]);
                    setEventType("all");
                    setPricingFilter("all");
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            </div>
            
            {/* Events content */}
            <div className="lg:w-3/4">
              <Tabs defaultValue="upcoming">
                <TabsList className="mb-8">
                  <TabsTrigger value="upcoming" className="text-base px-6 py-2">
                    Upcoming Events
                  </TabsTrigger>
                  <TabsTrigger value="past" className="text-base px-6 py-2">
                    Past Events
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="upcoming" className="mt-0">
                  {upcomingEvents.length > 0 ? (
                    <div className="space-y-6">
                      {upcomingEvents.map((event) => (
                        <div 
                          key={event.id}
                          className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 flex flex-col md:flex-row"
                        >
                          <div className="md:w-1/3 h-48 md:h-auto relative">
                            <img
                              src={event.image}
                              alt={event.title}
                              className="w-full h-full object-cover"
                            />
                            {event.price > 0 && (
                              <div className="absolute top-4 right-4 bg-gtm-purple text-white px-3 py-1 rounded-full text-sm font-medium">
                                ${event.price}
                              </div>
                            )}
                            {event.price === 0 && (
                              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                Free
                              </div>
                            )}
                          </div>
                          <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                            <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
                            
                            <div className="flex flex-wrap gap-4 text-gray-600 mb-6">
                              <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-2" />
                                <span className="text-sm">{event.date}</span>
                              </div>
                              <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-2" />
                                <span className="text-sm">{event.time}</span>
                              </div>
                              <div className="flex items-center">
                                <MapPin className="w-4 h-4 mr-2" />
                                <span className="text-sm">{event.location}</span>
                              </div>
                              <div className="flex items-center">
                                <Users className="w-4 h-4 mr-2" />
                                <span className="text-sm">{event.attendees} attending</span>
                              </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-2 mb-6">
                              {event.tags.map((tag, index) => (
                                <span
                                  key={index}
                                  className="px-3 py-1 bg-blue-50 text-gtm-blue text-xs rounded-full"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            
                            <div className="flex items-center justify-between mt-auto">
                              <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                                  <img
                                    src={event.host.image}
                                    alt={event.host.name}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div>
                                  <p className="text-sm font-medium">{event.host.name}</p>
                                  <p className="text-xs text-gray-500">{event.host.title}</p>
                                </div>
                              </div>
                              <Button className="gtm-btn-primary">
                                Register
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="bg-white rounded-xl p-12 text-center">
                      <Calendar size={48} className="mx-auto text-gray-400 mb-4" />
                      <h3 className="text-xl font-semibold mb-2">No upcoming events found</h3>
                      <p className="text-gray-600 mb-4">
                        Try adjusting your filters or search terms
                      </p>
                      <Button 
                        variant="outline"
                        onClick={() => {
                          setSearchTerm("");
                          setSelectedTags([]);
                          setEventType("all");
                          setPricingFilter("all");
                        }}
                      >
                        Clear all filters
                      </Button>
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="past" className="mt-0">
                  {pastEvents.length > 0 ? (
                    <div className="space-y-6">
                      {pastEvents.map((event) => (
                        <div 
                          key={event.id}
                          className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 opacity-80 flex flex-col md:flex-row"
                        >
                          <div className="md:w-1/3 h-48 md:h-auto relative">
                            <div className="absolute inset-0 bg-gray-900 bg-opacity-30 flex items-center justify-center">
                              <span className="bg-gray-900 bg-opacity-70 text-white px-3 py-1 rounded-md">Past Event</span>
                            </div>
                            <img
                              src={event.image}
                              alt={event.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                            <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
                            
                            <div className="flex flex-wrap gap-4 text-gray-600 mb-6">
                              <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-2" />
                                <span className="text-sm">{event.date}</span>
                              </div>
                              <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-2" />
                                <span className="text-sm">{event.time}</span>
                              </div>
                              <div className="flex items-center">
                                <MapPin className="w-4 h-4 mr-2" />
                                <span className="text-sm">{event.location}</span>
                              </div>
                              <div className="flex items-center">
                                <Users className="w-4 h-4 mr-2" />
                                <span className="text-sm">{event.attendees} attended</span>
                              </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-2 mb-6">
                              {event.tags.map((tag, index) => (
                                <span
                                  key={index}
                                  className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            
                            <div className="flex items-center justify-between mt-auto">
                              <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                                  <img
                                    src={event.host.image}
                                    alt={event.host.name}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div>
                                  <p className="text-sm font-medium">{event.host.name}</p>
                                  <p className="text-xs text-gray-500">{event.host.title}</p>
                                </div>
                              </div>
                              <Button variant="outline">
                                View Recording
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="bg-white rounded-xl p-12 text-center">
                      <Calendar size={48} className="mx-auto text-gray-400 mb-4" />
                      <h3 className="text-xl font-semibold mb-2">No past events found</h3>
                      <p className="text-gray-600 mb-4">
                        Try adjusting your filters or search terms
                      </p>
                      <Button 
                        variant="outline"
                        onClick={() => {
                          setSearchTerm("");
                          setSelectedTags([]);
                          setEventType("all");
                          setPricingFilter("all");
                        }}
                      >
                        Clear all filters
                      </Button>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* Host event CTA */}
      <section className="py-16 bg-white">
        <div className="gtm-container">
          <div className="bg-gradient-to-br from-gtm-blue/20 via-gtm-indigo/15 to-gtm-purple/20 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-2/3">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Have Knowledge to Share?
                </h2>
                <p className="text-lg text-gray-700 mb-6 md:mb-0">
                  Host your own GTM event on our platform and reach professionals looking to enhance their skills and knowledge.
                </p>
              </div>
              <div className="md:w-1/3 text-center md:text-right">
                <Button size="lg" className="gtm-btn-secondary">
                  Host an Event
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
