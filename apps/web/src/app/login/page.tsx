"use client"

import { LoginForm } from "@mosquitopedia/ui";

interface loginFormType {
    username: string,
    password: string,
}


export default function Login() {
    const handleSubmit = async (formData: loginFormType) => {
        try {
            // await axiosInstance.post("/contact", formData);
            // router.push("/");
            // toast.success("Successfully received the message!!!");
            alert("Successfully received the login request!!!");
        }
        catch (error) {
            console.log(error);
            // errorHandle(error);
        }
    };
    return (
        <>
            <div className="w-full py-40 flex justify-center items-center">
                <LoginForm handleSubmitForm={handleSubmit} />
            </div>
        </>
    );
};