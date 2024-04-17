import BackgroundCellCore from "./BackgroundCellCore";
import ContactSection from "./CallToActionText";

export const CallToAction = () => {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <BackgroundCellCore />
      <div className="pointer-events-none relative z-50 flex h-full select-none flex-col items-center gap-5">
        <div className="after: flex h-full flex-col items-center justify-center gap-10">
          <ContactSection />
        </div>
      </div>
    </div>
  );
};
