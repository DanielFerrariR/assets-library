import SpinnerIcon from "@/assets/icons/spinner.svg";

export default function Loading() {
  return (
    <div className="flex w-full justify-center">
      <SpinnerIcon className="w-12 h-12 animate-spin" />
    </div>
  );
}
