import Tabs, { Tab } from "@/components/Header/Tabs";
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
      <SearchInput />
      <div className="h-6" />
      <Tabs tabs={tabs} />
    </div>
  );
}
