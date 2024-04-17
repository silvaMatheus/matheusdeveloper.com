import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

export function CardHover({ img }: { img: string }) {
  return (
    <div className="relative flex h-full  w-full items-center justify-center">
      <DirectionAwareHover imageUrl={img}>
        <p className="text-xl font-bold">In the mountains</p>
        <p className="text-sm font-normal">$1299 / night</p>
      </DirectionAwareHover>
    </div>
  );
}
