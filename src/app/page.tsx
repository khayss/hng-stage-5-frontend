import Logo from "@/svgs/Logo";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24x w-full gap-40x my-100x">
      <div className="w-full flex flex-col items-center">
        <div>
          <Logo />
        </div>
      </div>
      <div className="flex w-full flex-col items-center gap-12x">
        <div className="w-full text-center flex items-center justify-center">
          <h1 className="text-32x font-bold">Welcome</h1>
        </div>
        <div className="flex w-full flex-col items-center md:flex-row gap-12x max-w-[375px]">
          <Link
            href={"/create-account"}
            className="px-16x py-12x bg-primary rounded-12x text-white text-center flex items-center justify-center w-full"
          >
            <p className="font-medium">Create Account</p>
          </Link>
          <Link
            href={"/login"}
            className="bg-white text-center py-12x px-16x border-1x rounded-12x border-primary text-primary w-full font-medium flex items-center justify-center"
          >
            <p>Login</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
