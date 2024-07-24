import { PlatformCard } from "@/components/common/Cards/PlatformCard";
import Image from "next/image";

export default function Page() {
  return (
    <div className="w-full flex flex-col items-center gap-60x pb-60x relative">
      <div className="w-full hidden md:block absolute top-0 inset-x-0 bg-primary rounded-b-32x overflow-hidden h-[357px]"></div>
      <div className="w-full md:p-24x z-10">
        <div className="w-full flex items-center justify-between p-16x gap-16x md:rounded-12x bg-white">
          <button className="font-semibold text-primary flex items-center justify-center px-28x py-12x rounded-8x border-1x border-primary">
            Back to Editor
          </button>
          <button className="font-semibold text-white bg-primary flex items-center justify-center px-28x py-12x rounded-8x border-1x border-primary">
            Share Link
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col items-center gap-56x px-70x md:px-56x md:py-48x z-10 bg-white md:rounded-24x md:w-[349px] md:shadow-secondary-sm">
        <div className="w-full flex flex-col items-center gap-24x">
          <div className="w-110x h-110x border-primary border-4x rounded-full overflow-hidden">
            <Image alt="" src={""} />
          </div>

          <div className="flex flex-col items-center text-center gap-8x">
            <h1 className="font-bold text-32x">Ben Wright</h1>
            <p className="text-dim-gray">ben@example.com</p>
          </div>
        </div>
        <div className="w-full flex flex-col items-center gap-20x">
          <PlatformCard />
          <PlatformCard />
        </div>
      </div>
    </div>
  );
}
