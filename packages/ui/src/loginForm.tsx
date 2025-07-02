"use client"

import Image from "next/image";
import { ChangeEvent, useState } from "react";

interface loginFormType {
    username: string,
    password: string,
}

export function LoginForm({ handleSubmitForm }: { handleSubmitForm: (formData: loginFormType) => void }) {

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
        const fieldName = evt.target.name;
        const changedValue = evt.target.value;
        setFormData((prevData) => {
            return {
                ...prevData,
                [fieldName]: changedValue
            }
        });
    };

    return (
        <>
            <section className="flex border-2 w-5/12 rounded-2xl">
                <div className="relative w-80 h-80">
                    <Image
                        src={"/login_img_01.png"}
                        alt="login_image"
                        fill
                        className="aspect-square object-cover rounded-2xl"
                    />
                </div>
                <div className="grow flex flex-col items-center p-8">
                    <h2 className="text-3xl font-medium underline mb-2">Login</h2>
                    <form>
                        <div className="my-4">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                placeholder="Enter username"
                                className="rounded-md mx-2 border px-2 py-1"
                            />
                        </div>
                        <div className="my-4">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Enter password"
                                className="rounded-md mx-2 border px-2 py-1"
                            />
                        </div>
                        <div className="flex justify-center my-6">
                            <button type="submit" className="border border-black shadow-md py-1 px-3 text-white bg-green-500 rounded-xl hover:cursor-pointer hover:bg-green-600">Login</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};