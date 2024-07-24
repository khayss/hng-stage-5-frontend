"use client";

import { HandOnTablet } from "@/svgs/HandOnTablet";
import { LinksCard } from "../common/Cards/LinksCard";
import { DashboardButton } from "../common/Buttons/DashboardButton";

export function LinksDashboard() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full lg:flex items-start justify-center bg-white rounded-12x px-16x md:p-0 h-full">
        <CustomizeLinks />
      </div>
    </div>
  );
}

function CustomizeLinks() {
  return (
    <div className="flex flex-col items-center w-full gap-40x md:p-40x">
      <div className="flex flex-col w-full gap-8x">
        <h3 className="text-24x font-bold">Customize your links</h3>
        <p className="text-16x text-dim-gray">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
      </div>
      <div className="w-full flex flex-col gap-24x">
        <div className="w-full">
          <button className="h-46x w-full rounded-12x border-1x border-primary text-primary font-semibold">
            + Add new link
          </button>
        </div>
        <div>
          {0.5 === 0.5 /* Math.random() */ ? <LinksCard /> : <EmptyLinksList />}
        </div>
      </div>
      <DashboardButton />
    </div>
  );
}

function EmptyLinksList() {
  return (
    <div className="w-full flex flex-col items-center text-center py-46x px-20x bg-seasalt rounded-12x">
      <div className="flex w-full flex-col items-center gap-24x md:px-56x">
        <div>
          <div className="h-80x md:h-160x">
            <HandOnTablet />
          </div>
        </div>
        <div>
          <h4 className="text-24x font-bold">Let’s get you started</h4>
          <p className="text-dim-gray text-16x">
            Use the “Add new link” button to get started. Once you have more
            than one link, you can reorder and edit them. We’re here to help you
            share your profiles with everyone!
          </p>
        </div>
      </div>
    </div>
  );
}
