
interface TestimonialCardProps {
  testimonial: {
    text: string;
    author: {
      name: string;
      role: string;
      image: string;
    };
  };
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="flex items-center mb-4 text-yellow-500">
        {Array(5).fill(0).map((_, i) => (
          <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.006z" clipRule="evenodd" />
          </svg>
        ))}
      </div>
      <p className="text-gray-600 mb-6">
        {testimonial.text}
      </p>
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
          <img 
            src={testimonial.author.image} 
            alt={testimonial.author.name}
            className="w-full h-full object-cover" 
          />
        </div>
        <div>
          <p className="font-medium">{testimonial.author.name}</p>
          <p className="text-sm text-gray-500">{testimonial.author.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
