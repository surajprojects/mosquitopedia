export default function Separator({ text = "or" }: { text?: string }) {
  return (
    <>
      <div className="relative flex w-full items-center justify-center">
        <div className="w-full border-b border-gray-300"></div>
        <p className="absolute bg-white px-2.5 text-xs font-medium text-secondary">{text}</p>
      </div>
    </>
  );
}
