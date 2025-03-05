import Link from "next/link";
import Button from "../components/Button";
import Tabs from "../components/Tabs";
import GoBackButton from "../components/GoBackButton";

export default function Layout({ children }) {
  return (
    <div className="lg:col-span-4 lg:pt-5">
      <div className="bg-[#373F68] text-white p-5 lg:rounded-md">
        <div className="flex items-center justify-between">
          <div>
            <GoBackButton />
            <h1 className="text-xl font-bold">Roadmap</h1>
          </div>

          <Link href={"/new"}>
            <Button bg={"bg-[#AD1FEA]"}>+ Add Feedback</Button>
          </Link>
        </div>
      </div>

      <div className="md:hidden">
        <Tabs />
      </div>
      {children}
    </div>
  );
}
