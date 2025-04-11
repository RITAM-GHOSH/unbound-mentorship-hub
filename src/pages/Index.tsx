
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import VideoSection from "@/components/home/VideoSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import MentorsSection from "@/components/home/MentorsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import RequestInviteSection from "@/components/home/RequestInviteSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <StatsSection />
      <VideoSection />
      <FeaturesSection />
      <MentorsSection />
      <TestimonialsSection />
      <RequestInviteSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
