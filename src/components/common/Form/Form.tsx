"use client";
import Image from "next/image";
import Link from "next/link";
import {
  DetailedHTMLProps,
  Dispatch,
  FormEvent,
  InputHTMLAttributes,
  SetStateAction,
} from "react";

export type FormProperties = {
  data: {
    inputField: DetailedHTMLProps<
      InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >;
    label: string;
    icon: string;
    extraInfo?: string;
    name: string;
  }[];
  title: string;
  description: string;
  buttonText: string;
  callToActionText: string;
  callToActionLink: string;
  callToActionLabel: string;
  onSubmit: (e: FormEvent) => void;
  setCreateAccountData: Dispatch<
    SetStateAction<{
      [key: string]: string;
    }>
  >;
  createAccountData: { [key: string]: string };
};

export default function Form({
  data,
  onSubmit,
  title,
  buttonText,
  callToActionLabel,
  callToActionLink,
  callToActionText,
  description,
  setCreateAccountData,
  createAccountData,
}: FormProperties) {
  return (
    <form
      onSubmit={onSubmit}
      className="w-full max-w-[476px] flex flex-col rounded-12x p-32x md:p-40x gap-40x bg-white"
    >
      <div className="flex flex-col gap-8x">
        <h1 className="font-bold text-32x">{title}</h1>
        <p className="text-16x text-dim-gray">{description}</p>
      </div>
      <div className="flex flex-col gap-24x">
        {data.map((input, index) => (
          <div key={index} className="flex flex-col gap-24x">
            <div className="flex flex-col gap-4x">
              <label
                htmlFor={input.inputField.id}
                className="text-12x text-jet"
              >
                {input.label}
              </label>
              <div className="flex items-center gap-12x py-12x px-16x border-1x border-platinum rounded-8x focus-within:border-primary focus-within:shadow-primary-sm">
                <div className="h-16x w-16x">
                  <Image
                    width={300}
                    height={300}
                    src={input.icon}
                    alt={input.label}
                  />
                </div>
                <input
                  onChange={(e) =>
                    setCreateAccountData((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value,
                    }))
                  }
                  value={createAccountData[input.name]}
                  {...input.inputField}
                  className="placeholder:text-16x placeholder:text-jet w-full outline-none focus:outline-none text-16x"
                />
                {/* {isEmpty && <p></p>} */}
              </div>
            </div>
            {input.extraInfo && (
              <div>
                <p className="text-dim-gray text-12x">{input.extraInfo}</p>
              </div>
            )}
          </div>
        ))}
        <div className="w-full">
          <button
            type="submit"
            className="w-full items-center justify-center flex bg-primary text-white rounded-8x px-[27px] py-[11px] text-16x font-semibold"
          >
            {buttonText}
          </button>
        </div>
        <div>
          <p className="text-16x text-center flex flex-col md:flex-row justify-center md:gap-4x gap-0">
            <span className="text-dim-gray">{`${callToActionText}`}</span>
            <span className="text-primary">
              <Link href={callToActionLink}>{callToActionLabel}</Link>
            </span>
          </p>
        </div>
      </div>
    </form>
  );
}
