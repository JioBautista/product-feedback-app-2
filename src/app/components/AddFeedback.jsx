import Link from "next/link";

export default function AddFeedback() {
  return (
    <Link href={"/new"}>
      <button className="p-3 bg-[#AD1FEA] text-white font-bold rounded-xl">
        + Add Feedback
      </button>
    </Link>
  );
}
