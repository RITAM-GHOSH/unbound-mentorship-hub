
import TestimonialCard from "./TestimonialCard";

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "The mentorship I received through GTM Unbound completely transformed our product launch strategy. My mentor provided insights that would have taken me years to discover on my own.",
      author: {
        name: "Jessica Lee",
        role: "VP of Marketing, Fintech Startup",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
      }
    },
    {
      text: "The workshops and events are incredibly valuable. I've built a network of GTM professionals who have become both resources and friends. This community is truly one-of-a-kind.",
      author: {
        name: "David Rodriguez",
        role: "GTM Lead, SaaS Platform",
        image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
      }
    },
    {
      text: "As a first-time founder, I was struggling with market positioning. My GTM Unbound mentor helped me clarify my value proposition and target audience, resulting in a 3x increase in customer acquisition.",
      author: {
        name: "Michelle Wang",
        role: "Founder, E-commerce Startup",
        image: "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
      }
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="gtm-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Members Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't take our word for it — hear from the professionals who have transformed their GTM strategies with us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
