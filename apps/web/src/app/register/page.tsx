import LogoTitle from "@/components/home/logoTitle";
import RegisterForm from "@/components/form/registerForm";

export default function Register() {
  return (
    <>
      <section className="bg-sectionsecondary grow">
        <div className="section-wrapper flex flex-col items-center justify-center gap-6">
          <LogoTitle />
          <RegisterForm />
        </div>
      </section>
    </>
  );
}
