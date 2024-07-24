"use client";

import loginData from "@/assets/data/loginData.json";
import Auth from "@/components/Auth/Auth";
import { LoginForm } from "@/components/common/Form/LoginForm";
import { FormEvent, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import { useRouter } from "next/navigation";

const initialState: { [key: string]: string } = {
  email: "",
  password: "",
};

export default function Page() {
  const [loginData, setLoginData] = useState(initialState);
  const [loginError, setLoginError] = useState(false);
  const router = useRouter();

  const [loginWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

  const handleLogin = async () => {
    try {
      const response = await loginWithEmailAndPassword(
        loginData.email,
        loginData.password
      );
      console.log(response);

      if (response) {
        router.push("/dashboard/profile");
      }
    } catch (error) {
      setLoginError(true);
    }
  };
  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (loginError) {
      setLoginError(false);
    }
    handleLogin();
  };
  return (
    <div className="w-full">
      <Auth>
        <LoginForm
          loginData={loginData}
          onSubmit={handleFormSubmit}
          setLoginData={setLoginData}
        />
      </Auth>
    </div>
  );
}
