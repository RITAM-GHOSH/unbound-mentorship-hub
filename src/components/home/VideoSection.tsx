
import YouTubeVideo from "@/components/YouTubeVideo";

const VideoSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="gtm-container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Learn From Our Experts</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch our latest videos to get insights from top GTM professionals and accelerate your growth strategy.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <YouTubeVideo channelId="@aditiaggarwal7" />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
