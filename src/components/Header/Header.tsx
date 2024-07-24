import { EyeIcon, LinkIcon, ProfileIcon } from "@/svgs/Icons";
import { DevlinkLogo, DevLinkText } from "@/svgs/Logo";
import Link from "next/link";

export function Header({ dashboard }: { dashboard: string }) {
  return (
    <div className="md:p-24x w-full">
      <div className="flex items-center justify-between p-16x w-full bg-white text-16x font-semibold md:rounded-12x">
        <Link href={"/"}>
          <div className="flex items-center gap-6x">
            <DevlinkLogo height={32} />
            <div className="hidden md:block">
              <DevLinkText height={21} />
            </div>
          </div>
        </Link>
        <div className="flex items-center justify-center h-46x text-dim-gray">
          <Link
            href={"/dashboard/links"}
            className={`${
              dashboard === "links" ? "bg-mauve text-primary" : ""
            } h-full rounded-8x`}
          >
            <div className="h-full flex items-center justify-center px-28x gap-8x">
              <LinkIcon height={20} />
              <p className="hidden md:block">Links</p>
            </div>
          </Link>
          <Link
            href={"/dashboard/profile"}
            className={`${
              dashboard === "profile" ? "bg-mauve text-primary" : ""
            } h-full rounded-8x`}
          >
            <div className="h-full flex items-center justify-center px-28x gap-8x">
              <ProfileIcon height={20} />
              <p className="hidden md:block">Profile Details</p>
            </div>
          </Link>
        </div>
        <div className="h-46x px-28x flex items-center justify-center border-1x border-primary rounded-8x text-primary">
          <div className="md:hidden">
            <EyeIcon height={20} />
          </div>
          <p className="hidden md:block">Preview</p>
        </div>
      </div>
    </div>
  );
}
