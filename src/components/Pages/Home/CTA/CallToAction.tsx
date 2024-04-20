import BackgroundCellCore from "./BackgroundCellCore";
import ContactSection from "./CallToActionText";

export const CallToAction = () => {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <BackgroundCellCore />

      <ContactSection />
    </div>
  );
};
