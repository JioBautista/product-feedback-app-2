import Image from "next/image";
import Link from "next/link";
export default function GoBackButton() {
  return (
    <div className="flex items-center gap-1">
      <Image
        src={"/icon-arrow-left.svg"}
        width={8}
        height={4}
        alt="Go back icon"
      />
      <Link href={"/"} className="p-2 font-bold">
        Go Back
      </Link>
    </div>
  );
}
