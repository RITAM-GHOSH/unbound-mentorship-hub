
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Youtube } from "lucide-react";

interface YouTubeVideoProps {
  channelId: string;
}

const YouTubeVideo = ({ channelId }: YouTubeVideoProps) => {
  const [videoId, setVideoId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulating fetching the latest video from a YouTube channel
    // In a real application, you would use the YouTube API
    // For now, we'll just hardcode a recent video from the channel
    const fetchLatestVideo = () => {
      setLoading(true);
      
      try {
        // This is a placeholder video ID for demonstration
        // In a real application, you would fetch this from the YouTube API
        const demoVideoId = "4ycMJDaoPm4"; // A video from @aditiaggarwal7 channel
        
        setTimeout(() => {
          setVideoId(demoVideoId);
          setLoading(false);
        }, 500);
      } catch (err) {
        setError("Failed to load video");
        setLoading(false);
        console.error("Error fetching YouTube video:", err);
      }
    };

    fetchLatestVideo();
  }, [channelId]);

  if (loading) {
    return (
      <Card className="w-full aspect-video bg-gray-100 flex items-center justify-center">
        <CardContent className="p-6 flex flex-col items-center justify-center h-full">
          <div className="animate-pulse flex flex-col items-center">
            <Youtube size={48} className="text-[#FF5252] mb-4" />
            <div className="h-4 bg-gray-200 rounded w-48 mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-32"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="w-full aspect-video bg-gray-100 flex items-center justify-center">
        <CardContent className="p-6 text-center">
          <Youtube size={48} className="text-[#FF5252] mx-auto mb-4" />
          <p className="text-gray-500">{error}</p>
          <p className="text-sm text-gray-400 mt-2">Please try again later</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;
