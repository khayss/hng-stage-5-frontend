import { db } from "@/app/firebase/config";
import { LinksDashboard } from "@/components/Dashboard/LinksDashboard";
import { ProfileDashboard } from "@/components/Dashboard/ProfileDashboard";
import { Header } from "@/components/Header/Header";
import { PreviewSection } from "@/svgs/PreviewSection";
import { collection, addDoc } from "firebase/firestore";

async function addLink(userId: string, link: string, platform: string) {
  try {
    const docRef = await addDoc(collection(db, "links"), {
      userId: "123",
      link: "https://www.example.com",
      platform: "twitter",
    });
    console.log("Document written with ID: ", docRef.id);
    return true;
  } catch (error) {
    console.error("Error adding document: ", error);
    return false;
  }
}
export default function Page({ params }: { params: { dashboard: string } }) {
  return (
    <div className="w-full">
      <Header dashboard={params.dashboard} />
      <div className="w-full lg:flex lg:gap-24x items-center justify-center lg:items-stretch">
        <div className="hidden lg:w-2/5 lg:flex lg:justify-center lg:items-center py-40x bg-white rounded-12x">
          <PreviewSection />
        </div>
        <div className="w-full lg:w-3/5">
          {params.dashboard === "links" ? (
            <LinksDashboard />
          ) : params.dashboard === "profile" ? (
            <ProfileDashboard />
          ) : null}
        </div>
      </div>
    </div>
  );
}
