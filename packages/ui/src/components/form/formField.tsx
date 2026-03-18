import type { ChangeEvent } from "react";

export default function FormField({
  id = "name",
  title = "Name",
  isRequired = true,
  fieldType = "text",
  isTextHolder = true,
  textHolder = "Enter your name",
  fieldValue,
  showMessage = false,
  isSuccess = true,
  msgSuccess = "Alright! Username available!",
  msgError = "Oops! Username already taken!",
  children,
  onChangeFunc,
}: {
  id?: string;
  title?: string;
  isRequired?: boolean;
  fieldType?: string;
  isTextHolder?: boolean;
  textHolder?: string;
  fieldValue: string;
  showMessage?: boolean;
  isSuccess?: boolean;
  msgSuccess?: string;
  msgError?: string;
  children?: React.ReactNode;
  onChangeFunc: (evt: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}) {
  return (
    <>
      {isTextHolder ? (
        <div className="my-3 flex flex-col">
          <label htmlFor={id} className="text-sm font-medium">
            {title}
          </label>
          <div className="bg-sectionsecondary/50 my-1.5 flex rounded-xl border border-gray-300 p-3 text-sm font-normal text-[#2a2522] transition duration-75 ease-out outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2">
            <input
              type={fieldType}
              name={id}
              id={id}
              value={fieldValue}
              onChange={onChangeFunc}
              placeholder={textHolder}
              required={isRequired}
              className="grow outline-none"
            />
            {children}
          </div>
          {showMessage &&
            (isSuccess ? (
              <p className="mt-2 text-sm text-green-600 dark:text-green-500">{msgSuccess}</p>
            ) : (
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">{msgError}</p>
            ))}
        </div>
      ) : (
        <div className="my-3 flex flex-col">
          <label htmlFor={id} className="text-xs font-medium">
            {title}
          </label>
          <input
            type={fieldType}
            name={id}
            id={id}
            value={fieldValue}
            onChange={onChangeFunc}
            required={isRequired}
            className="bg-sectionsecondary/50 my-1.5 rounded-xl border border-gray-300 p-3 text-sm font-normal text-[#2a2522] duration-75 ease-out focus:outline-2 focus:outline-offset-2 focus:outline-primary"
          />
          {showMessage &&
            (isSuccess ? (
              <p className="mt-2 text-sm text-green-600 dark:text-green-500">{msgSuccess}</p>
            ) : (
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">{msgError}</p>
            ))}
        </div>
      )}
    </>
  );
}
