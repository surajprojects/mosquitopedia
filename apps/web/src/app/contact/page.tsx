"use client"

import { ContactForm } from "@mosquitopedia/ui";

interface contactFormType {
    name: string,
    email: string,
    message: string,
}

export default function Contact() {
    const handleSubmit = async (formData: contactFormType) => {
        try {
            // await axiosInstance.post("/contact", formData);
            // router.push("/");
            // toast.success("Successfully received the message!!!");
            alert("Successfully received the message!!!");
        }
        catch (error) {
            console.log(error);
            // errorHandle(error);
        }
    };
    return (
        <>
            <ContactForm handleSubmitForm={handleSubmit} />
        </>
    );
};