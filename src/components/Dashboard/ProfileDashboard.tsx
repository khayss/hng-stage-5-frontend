import profileDetailsData from "@/assets/data/profileDetailsData.json";
import { ImageIcon } from "@/svgs/Icons";
import { DashboardButton } from "../common/Buttons/DashboardButton";

export function ProfileDashboard() {
  return (
    <div className="w-full p-16x md:p-0">
      <div className="w-full bg-white p-24x lg:p-40x rounded-12x flex flex-col gap-40x">
        <div className="w-full flex flex-col gap-8x">
          <h1 className="text-24x font-bold">Profile Details</h1>
          <p className="text-16x text-dim-gray">
            Add your detafils to create a personal touch to your profile.
          </p>
        </div>
        <div className="w-full">
          <form
            action=""
            className="w-full flex flex-col items-center justify-center gap-24x"
          >
            <div className="w-full flex flex-col gap-24x p-20x bg-seasalt md:flex-row md:items-center">
              <div className="w-full flex flex-col gap-16x md:flex-row md:items-center md:justify-between">
                <label htmlFor="" className="text-16x text-dim-gray">
                  Profile picture
                </label>
                <div>
                  <div className="w-[193px] h-[193px] bg-mauve rounded-12x flex flex-col items-center justify-center gap-8x">
                    <div>
                      <ImageIcon />
                    </div>
                    <div>
                      <p className="text-primary font-semibold">
                        + Upload Image
                      </p>
                    </div>
                  </div>
                  <input type="file" className="hidden" />
                </div>
              </div>
              <div>
                <p className="text-12x text-dim-gray">
                  Image must be below 1024x1024px. Use PNG or JPG format.
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col gap-24x p-20x bg-seasalt">
              {profileDetailsData.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-4x md:flex-row md:justify-between md:items-center"
                >
                  <label htmlFor="" className="text-12x md:w-1/2">
                    {item.label}
                    {item.required && <sup>*</sup>}
                  </label>
                  <input
                    placeholder={item.placeholder}
                    type={item.type}
                    name={item.name}
                    required={item.required}
                    className="w-full bg-white rounded-12x px-16x py-12x h-48x border-1x border-platinum md:w-1/2"
                  />
                </div>
              ))}
            </div>
            <DashboardButton />
          </form>
        </div>
      </div>
    </div>
  );
}
