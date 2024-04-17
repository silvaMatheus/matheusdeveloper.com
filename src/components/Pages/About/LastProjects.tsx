import { ImageSlider } from "../../Common/ImageSlider";

export default function LastProjects() {
  const path = "/assets/projects/";

  const images: string[] = Array.from(
    { length: 3 },
    (_, i) => `${path}projeto${i + 1}.png`
  );

  return (
    <div className="flex h-full flex-col justify-center ">
      <div className="h-4/6 ">
        <ImageSlider images={images} />
      </div>
    </div>
  );
}
