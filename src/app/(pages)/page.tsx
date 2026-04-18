import HeroSection from "@/features/home/components/hero";
import RewardsGallery from "@/features/home/components/rewards-gallery";
import TechTrustSection from "@/features/home/components/tech-trust-section";
import ProgressPipeline from "@/features/home/components/student-dashboard";
import TestRoomPreviewSection from "@/features/home/components/TestRoomPreviewSection";
import RegistrationPreviewSection from "@/features/home/components/RegistrationPreviewSection";
export default function Home() {
  return (
    <>
      <HeroSection />
      <RewardsGallery />
      <TechTrustSection />
      <ProgressPipeline />
      <TestRoomPreviewSection />
      <RegistrationPreviewSection />
    </>
  );
}
