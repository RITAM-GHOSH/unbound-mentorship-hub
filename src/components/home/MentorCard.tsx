
import { Button } from "@/components/ui/button";

interface MentorCardProps {
  mentor: {
    id: number;
    name: string;
    title: string;
    image: string;
    rating: number;
    topics: string[];
  };
}

const MentorCard = ({ mentor }: MentorCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="p-6 flex flex-col items-center text-center">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-[#FF8A80]/20">
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
              className="px-3 py-1 bg-[#FFEBEE] text-[#FF5252] text-xs rounded-full"
            >
              {topic}
            </span>
          ))}
        </div>
        <Button size="sm" className="bg-[#FF5252] hover:bg-[#FF8A80] text-white w-full">
          View Profile
        </Button>
      </div>
    </div>
  );
};

export default MentorCard;
