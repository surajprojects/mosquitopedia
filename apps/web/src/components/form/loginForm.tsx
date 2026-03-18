"use client";

import Link from "next/link";
import FormAction from "./formAction";
import { ChangeEvent, useState } from "react";
import { cn } from "@mosquitopedia/ui/lib/utils";
import { Check, Eye, EyeClosed } from "lucide-react";
import Btn from "@mosquitopedia/ui/components/button/btn";
import Separator from "@mosquitopedia/ui/components/ui/separator";
import FormField from "@mosquitopedia/ui/components/form/formField";
import FormHeader from "@mosquitopedia/ui/components/form/formHeader";
import WrapperCard from "@mosquitopedia/ui/components/card/wrapperCard";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [doRememberMe, setDoRememberMe] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (evt: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const fieldName = evt.target.name;
    const fieldValue = evt.target.value;

    setFormData((prevData) => {
      return {
        ...prevData,
        [fieldName]: fieldValue,
      };
    });
  };
  return (
    <>
      <WrapperCard>
        {/* Header */}
        <FormHeader
          title="Welcome Back, Hunter"
          description="Continue your mosquito documentation journey"
          className="w-sm"
        />
        {/* Body */}
        <form className="mt-8">
          {/* Email */}
          <FormField
            key={1}
            fieldType="email"
            id="email"
            title="Email"
            textHolder="hunter@example.com"
            fieldValue={formData.email}
            onChangeFunc={handleChange}
          />
          {/* Password */}
          <FormField
            key={2}
            fieldType={showPassword ? "text" : "password"}
            id="password"
            title="Password"
            textHolder="••••••••"
            fieldValue={formData.password}
            onChangeFunc={handleChange}
          >
            <button
              type="button"
              onClick={() => setShowPassword((prevData) => !prevData)}
              className="inline cursor-pointer px-0.5"
            >
              {showPassword ? <Eye className="size-4" /> : <EyeClosed className="size-4" />}
            </button>
          </FormField>
          {/* Forgot Password */}
          <div className="mb-3.5 flex items-center justify-between text-sm">
            <div
              onClick={() => setDoRememberMe((prevData) => !prevData)}
              className="no-select flex cursor-pointer items-center gap-2"
            >
              <div
                className={cn(
                  "flex size-3.5 items-center justify-center rounded-full border border-primary text-white",
                  doRememberMe ? "bg-primary" : ""
                )}
              >
                {doRememberMe && <Check className="size-2.5" />}
              </div>
              <p className="font-medium">Remember me</p>
            </div>
            <Link href="#" className="text-primary">
              Forgot password?
            </Link>
          </div>
          {/* Submit Button */}
          <Btn btnType="submit" text="Login" />
        </form>
        {/* Separator */}
        <div className="mt-8 mb-6 px-2">
          <Separator />
        </div>
        {/* Form Action */}
        <FormAction />
      </WrapperCard>
    </>
  );
}
