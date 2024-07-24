import { RightArrow } from "@/svgs/Icons";
import Image from "next/image";

export function PlatformCard() {
  return (
    <div className="w-full rounded-8x flex items-center justify-between p-16x gap-8x bg-black">
      <div className="flex items-center gap-8x">
        <div className="h-20x w-20x">
          <Image alt="" src={""} />
        </div>
        <div>
          <p className="text-white">GitHub</p>
        </div>
      </div>
      <div>
        <RightArrow />
      </div>
    </div>
  );
}
