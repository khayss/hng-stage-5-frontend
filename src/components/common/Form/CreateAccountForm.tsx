import Image from "next/image";
import Link from "next/link";
import React, { Dispatch, FormEvent, SetStateAction } from "react";
import createAccountFormData from "@/assets/data/createAccountData.json";

type CreateAccountData = {
  [key: string]: string;
};
interface CreateAccountFormProperties {
  createAccountData: CreateAccountData;
  onSubmit: (e: FormEvent) => void;
  setCreteAccountData: Dispatch<SetStateAction<CreateAccountData>>;
}

export function CreateAccountForm({
  createAccountData,
  onSubmit,
  setCreteAccountData,
}: CreateAccountFormProperties) {
  const isDisableButton =
    !createAccountData.email ||
    !createAccountData.password ||
    !createAccountData.confirmPassword ||
    createAccountData.password.length < 8 ||
    createAccountData.password !== createAccountData.confirmPassword;
  return (
    <form
      onSubmit={onSubmit}
      className="w-full flex flex-col rounded-12x p-32x md:p-40x gap-40x bg-white"
    >
      <div className="flex flex-col gap-8x">
        <div className="flex flex-col gap-8x">
          <h1 className="font-bold text-32x">{"Create account"}</h1>
          <p className="text-16x text-dim-gray">
            {"Let’s get you started sharing your links!"}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-24x">
        <div className="flex flex-col gap-24x">
          {createAccountFormData.map((field) => (
            <div className="flex flex-col gap-24x" key={field.id}>
              <div className="flex flex-col gap-4x">
                <label htmlFor={field.name}>{field.label}</label>
              </div>
              <div className="flex items-center gap-12x py-12x px-16x border-1x border-platinum rounded-8x focus-within:border-primary focus-within:shadow-primary-sm">
                <div className="h-16x w-16x">
                  <Image
                    width={300}
                    height={300}
                    src={field.icon}
                    alt={field.label + " icon"}
                  />
                </div>
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  value={createAccountData[field.name]}
                  onChange={(e) =>
                    setCreteAccountData((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value,
                    }))
                  }
                  required
                  placeholder={field.placeholder}
                  className="placeholder:text-16x placeholder:text-jet w-full outline-none focus:outline-none text-16x"
                />
              </div>
            </div>
          ))}
          <div>
            <p className="text-dim-gray text-12x">
              {"Already have an account?"}
            </p>
          </div>
        </div>
        <div className="w-full">
          <button
            type="submit"
            disabled={isDisableButton}
            className={`${
              isDisableButton ? "bg-mauve shadow-primary-sm" : "bg-primary"
            } w-full items-center justify-center flex text-white rounded-8x px-[27px] py-[11px] text-16x font-semibold`}
          >
            {"Create new account"}
          </button>
        </div>
        <div>
          <p className="text-16x text-center flex flex-col md:flex-row justify-center md:gap-4x gap-0">
            <span className="text-dim-gray">{"Already have an account?"}</span>
            <span className="text-primary">
              <Link href={"/login"}>{"Login"}</Link>
            </span>
          </p>
        </div>
      </div>
    </form>
  );
}
