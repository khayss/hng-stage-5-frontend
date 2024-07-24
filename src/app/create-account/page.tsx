"use client";

import { FormEvent, useState } from "react";
import { CreateAccountForm } from "@/components/common/Form/CreateAccountForm";
import Auth from "@/components/Auth/Auth";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import { useRouter } from "next/navigation";

const initialState: { [key: string]: string } = {
  email: "",
  password: "",
  confirmPassword: "",
};

export default function Page() {
  const [createAccountData, setCreateAccountData] = useState(initialState);
  const [createAccountError, setCreateAccountError] = useState(false);
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  const router = useRouter();

  const handleCreateAccount = async () => {
    try {
      const response = await createUserWithEmailAndPassword(
        createAccountData.email,
        createAccountData.password
      );
      if (response) {
        router.push("/dashboard/links");
      }
      setCreateAccountData(initialState);
    } catch (error) {
      setCreateAccountError(true);
    }
  };
  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (createAccountError) {
      setCreateAccountError(false);
    }
    handleCreateAccount();
  };

  return (
    <div className="w-full">
      <Auth>
        <CreateAccountForm
          createAccountData={createAccountData}
          onSubmit={handleFormSubmit}
          setCreteAccountData={setCreateAccountData}
        />
      </Auth>
    </div>
  );
}
