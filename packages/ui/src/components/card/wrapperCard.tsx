export default function WrapperCard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="rounded-3xl bg-white p-6 shadow-lg shadow-secondary/10">{children}</div>
    </>
  );
}
