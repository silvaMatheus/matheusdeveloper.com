import StackCarousel from "./Carousel";
import MyStackText from "./MyStackText";

export default function MyStack() {
  return (
    <div
      className="relative flex h-full w-full flex-col gap-5  
        overflow-hidden rounded-xl border border-[#222229] bg-black p-5"
    >
      <StackCarousel />
      <MyStackText />
    </div>
  );
}
