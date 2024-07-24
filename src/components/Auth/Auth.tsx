"use client";

import Logo from "@/svgs/Logo";

type AuthProperties = {
  children: React.ReactNode;
};

export default function Auth({ children }: AuthProperties) {
  return (
    <div className="w-full flex flex-col items-center my-[100px]">
      <div className="w-full flex flex-col max-w-[476px] gap-50x">
        <div className="w-full flex md:justify-center px-32x">
          <Logo />
        </div>
        <div className="w-full flex flex-col items-center">{children}</div>
      </div>
    </div>
  );
}
