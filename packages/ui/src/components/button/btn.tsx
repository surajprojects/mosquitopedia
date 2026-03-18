import Spinner from "@mosquitopedia/ui/components/ui/spinner";

export type BtnType = "button" | "reset" | "submit";

export default function Btn({
  text = "Click here!",
  btnType = "button",
  isLoading = false,
  btnDisabled = false,
}: {
  text?: string;
  btnType?: BtnType;
  isLoading?: boolean;
  btnDisabled?: boolean;
}) {
  return (
    <>
      <button
        type={btnType}
        disabled={isLoading ? true : btnDisabled}
        className="w-full rounded-xl bg-primary py-3 text-base font-medium text-white shadow-md shadow-primary/25 duration-300 ease-in-out outline-none hover:cursor-pointer hover:bg-primary/90 hover:shadow-lg disabled:cursor-not-allowed disabled:bg-primary/85"
      >
        {isLoading ? (
          <div className="flex w-full items-center justify-center">
            <Spinner customize={true} />
          </div>
        ) : (
          text
        )}
      </button>
    </>
  );
}
