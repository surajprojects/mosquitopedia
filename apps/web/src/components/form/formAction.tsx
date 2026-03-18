import Link from "next/link";

export default function FormAction({
  text = "Don't have an account?",
  linkTo = "#",
  linkName = "Register",
}: {
  text?: string;
  linkTo?: string;
  linkName?: string;
}) {
  return (
    <>
      <p className="flex items-center justify-center gap-2 font-sans text-sm text-secondary">
        {text}
        <Link
          href={linkTo}
          className="transition-effect font-medium text-primary hover:cursor-pointer hover:text-primary/95"
        >
          {linkName}
        </Link>
      </p>
    </>
  );
}
