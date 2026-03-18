import LoginForm from "@/components/form/loginForm";
import LogoTitle from "@/components/home/logoTitle";

export default function Login() {
  return (
    <>
      <section className="bg-sectionsecondary grow">
        <div className="section-wrapper flex flex-col items-center justify-center gap-6">
          <LogoTitle />
          <LoginForm />
        </div>
      </section>
    </>
  );
}
