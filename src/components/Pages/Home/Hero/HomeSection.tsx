import ShortcutHome from "@/components/ui/shortCutHome.tsx";
import HeroAnimationWrapper from "./HeroAnimationWrapper";
import HeroText from "./HeroText";

export default function HeroSection() {
  return (
    <section className="relative flex h-screen flex-col items-center justify-center py-20 sm:gap-5">
      {/* <TechStackAnimation /> */}
      <HeroAnimationWrapper>
        <HeroText />
        <ShortcutHome />
      </HeroAnimationWrapper>
    </section>
  );
}
