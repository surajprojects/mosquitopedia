"use client";

import FormAction from "./formAction";
import { ChangeEvent, useState } from "react";
import { cn } from "@mosquitopedia/ui/lib/utils";
import { Check, Eye, EyeClosed } from "lucide-react";
import Btn from "@mosquitopedia/ui/components/button/btn";
import Separator from "@mosquitopedia/ui/components/ui/separator";
import FormField from "@mosquitopedia/ui/components/form/formField";
import FormHeader from "@mosquitopedia/ui/components/form/formHeader";
import WrapperCard from "@mosquitopedia/ui/components/card/wrapperCard";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [agreeTerms, setAgreeTerms] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
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
          title="Join the Hunt"
          description="Create your hunter account and start documenting"
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
          {/* Confirm Password */}
          <FormField
            key={3}
            fieldType={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            title="Confirm Password"
            textHolder="••••••••"
            fieldValue={formData.confirmPassword}
            onChangeFunc={handleChange}
          >
            <button
              type="button"
              onClick={() => setShowConfirmPassword((prevData) => !prevData)}
              className="inline cursor-pointer px-0.5"
            >
              {showConfirmPassword ? <Eye className="size-4" /> : <EyeClosed className="size-4" />}
            </button>
          </FormField>
          {/* Forgot Password */}
          <div className="mb-3.5 flex items-center justify-between text-sm">
            <div
              onClick={() => setAgreeTerms((prevData) => !prevData)}
              className="no-select flex cursor-pointer items-center gap-2"
            >
              <div
                className={cn(
                  "flex size-3.5 items-center justify-center rounded-full border border-primary text-white",
                  agreeTerms ? "bg-primary" : ""
                )}
              >
                {agreeTerms && <Check className="size-2.5" />}
              </div>
              <p className="font-medium">I agree to the Terms of Service and Privacy Policy</p>
            </div>
          </div>
          {/* Submit Button */}
          <Btn btnType="submit" text="Register" />
        </form>
        {/* Separator */}
        <div className="mt-8 mb-6 px-2">
          <Separator />
        </div>
        {/* Form Action */}
        <FormAction text="Already have an account?" linkName="Login" />
      </WrapperCard>
    </>
  );
}
