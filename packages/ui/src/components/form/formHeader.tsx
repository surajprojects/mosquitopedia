import clsx from "clsx";

export interface FormHeaderType {
  title: string;
  description: string;
}

export type FormHeaderTypeList = FormHeaderType[];

export default function FormHeader({
  title = "title",
  description = "description",
  className = "",
}: Partial<FormHeaderType> & { className?: string }) {
  return (
    <>
      <div className={clsx(className)}>
        <h3 className="font-heading my-2 text-center text-2xl font-bold">{title}</h3>
        <p className="text-center font-sans text-base text-secondary">{description}</p>
      </div>
    </>
  );
}
