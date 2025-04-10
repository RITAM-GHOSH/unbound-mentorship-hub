
import Layout from "@/components/layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="gtm-container py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">About GTM Unbound</h1>
        
        <div className="max-w-3xl mx-auto space-y-6 text-lg">
          <p>
            GTM Unbound is a platform dedicated to helping professionals excel in their go-to-market strategies through expert mentorship and specialized events.
          </p>
          
          <p>
            Our mission is to connect aspiring marketers, product managers, and business strategists with industry veterans who can provide valuable guidance and insights based on real-world experience.
          </p>
          
          <h2 className="text-2xl font-semibold mt-10 mb-4">Our Vision</h2>
          <p>
            We believe that successful go-to-market execution requires a unique blend of strategic thinking, market understanding, and tactical implementation. GTM Unbound aims to be the premier platform for professionals seeking to develop these critical skills.
          </p>
          
          <h2 className="text-2xl font-semibold mt-10 mb-4">What We Offer</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><span className="font-medium">Expert Mentorship:</span> Connect one-on-one with professionals who have successfully led go-to-market initiatives at top companies.</li>
            <li><span className="font-medium">Specialized Events:</span> Participate in workshops, webinars, and networking sessions focused on specific go-to-market challenges and strategies.</li>
            <li><span className="font-medium">Community:</span> Join a growing network of like-minded professionals who are passionate about mastering go-to-market execution.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-10 mb-4">Join Us</h2>
          <p>
            Whether you're looking to advance your career, improve your product launch strategy, or share your knowledge with others, GTM Unbound provides the platform and connections to help you succeed.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
