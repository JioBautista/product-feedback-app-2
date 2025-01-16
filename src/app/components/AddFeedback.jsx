import Link from "next/link";
import Button from "./Button";

export default function AddFeedback() {
  return (
    <Link href={"/new"}>
      <Button bg={"bg-[#AD1FEA]"}>+ Add Feedback</Button>
    </Link>
  );
}
