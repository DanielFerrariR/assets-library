import Tabs, { Tab } from "@/components/Header/Tabs";
import { Suspense } from "react";
import SpinnerIcon from "@/assets/icons/spinner.svg";
import SearchInput from "@/components/Header/SeachInput";

const tabs: Tab[] = [
  {
    label: "Featured",
    url: "/",
  },
  {
    label: "Kpi",
    url: "/kpi",
  },
  {
    label: "Layouts",
    url: "/layouts",
  },
  {
    label: "Storyboards",
    url: "/storyboards",
  },
];

export default function Header() {
  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="font-black text-5xl">Library</h1>
      <div className="h-10" />
      <p className="text-base text-center">
        Browse for assets needed to report and present analysis
      </p>
      <div className="h-10" />
      <Suspense
        fallback={
          <div className="flex w-full justify-center">
            <SpinnerIcon className="w-6 h-6 animate-spin" />
          </div>
        }
      >
        <SearchInput />
      </Suspense>
      <div className="h-6" />
      <Tabs tabs={tabs} />
    </div>
  );
}
